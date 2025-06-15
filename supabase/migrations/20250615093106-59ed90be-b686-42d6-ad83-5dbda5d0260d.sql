-- Create waitlist table for storing lead information
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  interest TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can submit to waitlist" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view all submissions
CREATE POLICY "Admins can view all waitlist submissions" 
ON public.waitlist 
FOR SELECT 
USING (false); -- This will need to be updated when admin auth is implemented

-- Create index for better performance on email lookups
CREATE INDEX idx_waitlist_email ON public.waitlist(email);
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at);