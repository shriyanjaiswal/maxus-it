import type React from 'react'

/**
 * Visible only while content is still awaiting client approval. Unapproved
 * records are filtered out of production builds entirely.
 */
export function DevFlag(_props: { label: string }) {
  return null
}

export function DevNotice(_props: { children: React.ReactNode }) {
  return null
}
