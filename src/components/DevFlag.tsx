import { AlertTriangle } from 'lucide-react'

/**
 * Visible only while content is still awaiting client approval. Unapproved
 * records are filtered out of production builds entirely.
 */
export function DevFlag({ label }: { label: string }) {
  if (import.meta.env.PROD) return null
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
      <AlertTriangle className="size-3.5" aria-hidden="true" />
      {label}
    </p>
  )
}

export function DevNotice({ children }: { children: React.ReactNode }) {
  if (import.meta.env.PROD) return null
  return (
    <div
      role="status"
      className="rounded-(--radius-card) border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900"
    >
      {children}
    </div>
  )
}
