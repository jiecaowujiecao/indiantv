CREATE TABLE public.app_settings (id INT PRIMARY KEY DEFAULT 1, apk_url TEXT NOT NULL DEFAULT 'https://example.com/gootv.apk', updated_at TIMESTAMPTZ NOT NULL DEFAULT now(), CONSTRAINT singleton CHECK (id = 1));
GRANT SELECT ON public.app_settings TO anon, authenticated;
GRANT ALL ON public.app_settings TO service_role;
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read apk url" ON public.app_settings FOR SELECT USING (true);
INSERT INTO public.app_settings (id, apk_url) VALUES (1, 'https://example.com/gootv.apk') ON CONFLICT DO NOTHING;