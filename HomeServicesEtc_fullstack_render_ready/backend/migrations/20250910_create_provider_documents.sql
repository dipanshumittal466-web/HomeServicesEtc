CREATE TABLE provider_documents (
  id BIGSERIAL PRIMARY KEY,
  provider_id BIGINT NOT NULL,
  doc_type TEXT NOT NULL,
  storage_key TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  original_name TEXT,
  uploaded_by BIGINT,
  uploaded_at TIMESTAMPTZ DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'pending',
  verified_by BIGINT,
  verified_at TIMESTAMPTZ,
  expiry_date DATE,
  notes TEXT
);
ALTER TABLE IF EXISTS providers
  ADD COLUMN IF NOT EXISTS verification_status TEXT DEFAULT 'unverified',
  ADD COLUMN IF NOT EXISTS acknowledged_policy_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS last_document_upload_at TIMESTAMPTZ;
