-- Create app_role enum for roles
CREATE TYPE public.app_role AS ENUM ('admin', 'imam', 'committee', 'congregation');

-- Create profiles table
CREATE TABLE public.profiles (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
    full_name TEXT,
    phone TEXT,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_roles table (separate from profiles for security)
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Create prayer_times table
CREATE TABLE public.prayer_times (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    fajr TIME NOT NULL,
    sunrise TIME NOT NULL,
    dhuhr TIME NOT NULL,
    asr TIME NOT NULL,
    maghrib TIME NOT NULL,
    isha TIME NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(date)
);

-- Create donations table
CREATE TABLE public.donations (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    donor_name TEXT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    donation_type TEXT NOT NULL DEFAULT 'general',
    payment_method TEXT,
    status TEXT NOT NULL DEFAULT 'completed',
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create events table
CREATE TABLE public.events (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE,
    location TEXT,
    event_type TEXT NOT NULL DEFAULT 'general',
    capacity INTEGER,
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create event_rsvps table
CREATE TABLE public.event_rsvps (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    event_id UUID REFERENCES public.events(id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    status TEXT NOT NULL DEFAULT 'attending',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(event_id, user_id)
);

-- Create announcements table
CREATE TABLE public.announcements (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'general',
    is_pinned BOOLEAN DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create facilities table
CREATE TABLE public.facilities (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    capacity INTEGER,
    hourly_rate DECIMAL(10,2) DEFAULT 0,
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create facility_bookings table
CREATE TABLE public.facility_bookings (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    facility_id UUID REFERENCES public.facilities(id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    purpose TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prayer_times ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_rsvps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.facilities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.facility_bookings ENABLE ROW LEVEL SECURITY;

-- Helper function to check user role (SECURITY DEFINER to bypass RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Helper function to check if user is admin or committee member
CREATE OR REPLACE FUNCTION public.is_admin_or_committee(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role IN ('admin', 'committee')
  )
$$;

-- Helper function to check if user can manage prayers (admin, imam, committee)
CREATE OR REPLACE FUNCTION public.can_manage_prayers(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role IN ('admin', 'imam', 'committee')
  )
$$;

-- Profiles policies
CREATE POLICY "Users can view all profiles" ON public.profiles
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE TO authenticated USING (user_id = auth.uid());

CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());

-- User roles policies (only admins can manage roles)
CREATE POLICY "Users can view own roles" ON public.user_roles
    FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert roles" ON public.user_roles
    FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update roles" ON public.user_roles
    FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles" ON public.user_roles
    FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Prayer times policies (public read, admin/imam/committee write)
CREATE POLICY "Anyone can view prayer times" ON public.prayer_times
    FOR SELECT USING (true);

CREATE POLICY "Staff can manage prayer times" ON public.prayer_times
    FOR ALL TO authenticated USING (public.can_manage_prayers(auth.uid()));

-- Donations policies
CREATE POLICY "Staff can view all donations" ON public.donations
    FOR SELECT TO authenticated USING (public.is_admin_or_committee(auth.uid()) OR user_id = auth.uid());

CREATE POLICY "Authenticated users can create donations" ON public.donations
    FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Staff can update donations" ON public.donations
    FOR UPDATE TO authenticated USING (public.is_admin_or_committee(auth.uid()));

CREATE POLICY "Admins can delete donations" ON public.donations
    FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Events policies (public read, staff write)
CREATE POLICY "Anyone can view events" ON public.events
    FOR SELECT USING (true);

CREATE POLICY "Staff can create events" ON public.events
    FOR INSERT TO authenticated WITH CHECK (public.is_admin_or_committee(auth.uid()) OR public.has_role(auth.uid(), 'imam'));

CREATE POLICY "Staff can update events" ON public.events
    FOR UPDATE TO authenticated USING (public.is_admin_or_committee(auth.uid()) OR created_by = auth.uid());

CREATE POLICY "Staff can delete events" ON public.events
    FOR DELETE TO authenticated USING (public.is_admin_or_committee(auth.uid()));

-- Event RSVPs policies
CREATE POLICY "Users can view RSVPs" ON public.event_rsvps
    FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.is_admin_or_committee(auth.uid()));

CREATE POLICY "Users can create own RSVP" ON public.event_rsvps
    FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own RSVP" ON public.event_rsvps
    FOR UPDATE TO authenticated USING (user_id = auth.uid());

CREATE POLICY "Users can delete own RSVP" ON public.event_rsvps
    FOR DELETE TO authenticated USING (user_id = auth.uid() OR public.is_admin_or_committee(auth.uid()));

-- Announcements policies (public read, staff write)
CREATE POLICY "Anyone can view announcements" ON public.announcements
    FOR SELECT USING (true);

CREATE POLICY "Staff can create announcements" ON public.announcements
    FOR INSERT TO authenticated WITH CHECK (public.is_admin_or_committee(auth.uid()) OR public.has_role(auth.uid(), 'imam'));

CREATE POLICY "Staff can update announcements" ON public.announcements
    FOR UPDATE TO authenticated USING (public.is_admin_or_committee(auth.uid()) OR created_by = auth.uid());

CREATE POLICY "Staff can delete announcements" ON public.announcements
    FOR DELETE TO authenticated USING (public.is_admin_or_committee(auth.uid()));

-- Facilities policies (public read, staff write)
CREATE POLICY "Anyone can view facilities" ON public.facilities
    FOR SELECT USING (true);

CREATE POLICY "Staff can manage facilities" ON public.facilities
    FOR ALL TO authenticated USING (public.is_admin_or_committee(auth.uid()));

-- Facility bookings policies
CREATE POLICY "Users can view own bookings or staff can view all" ON public.facility_bookings
    FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.is_admin_or_committee(auth.uid()));

CREATE POLICY "Users can create bookings" ON public.facility_bookings
    FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own bookings" ON public.facility_bookings
    FOR UPDATE TO authenticated USING (user_id = auth.uid() OR public.is_admin_or_committee(auth.uid()));

CREATE POLICY "Staff can delete bookings" ON public.facility_bookings
    FOR DELETE TO authenticated USING (public.is_admin_or_committee(auth.uid()));

-- Trigger for updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_prayer_times_updated_at
    BEFORE UPDATE ON public.prayer_times
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_events_updated_at
    BEFORE UPDATE ON public.events
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_announcements_updated_at
    BEFORE UPDATE ON public.announcements
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Function to handle new user signup (creates profile)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (user_id, full_name)
    VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
    
    -- By default, new users get 'congregation' role
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'congregation');
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();