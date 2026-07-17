-- Reviews table for D1 database
-- Run this migration to set up the schema

CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  review TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'unused' CHECK (status IN ('unused', 'assigned', 'used')),
  assigned_at TEXT,
  copied_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_reviews_status ON reviews(status);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at);
CREATE INDEX IF NOT EXISTS idx_reviews_assigned_at ON reviews(assigned_at);
CREATE INDEX IF NOT EXISTS idx_reviews_copied_at ON reviews(copied_at);
