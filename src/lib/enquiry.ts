export type EnquiryPayload = {
  name: string
  email: string
  phone: string
  topic: string
  message: string
}

export type SubmitResult =
  | { status: 'accepted' }
  | { status: 'rejected'; message: string }
  | { status: 'unconfigured' }

/**
 * Delivery depends on a real form provider endpoint supplied at build time.
 * Without it we report "not configured" instead of pretending the message sent.
 * Only the endpoint URL is shipped to the browser — never a private key.
 */
const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

export const formProviderConfigured = Boolean(endpoint)

export async function submitEnquiry(payload: EnquiryPayload): Promise<SubmitResult> {
  if (!endpoint) return { status: 'unconfigured' }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        _subject: `Website enquiry: ${payload.topic || 'General'} — ${payload.name}`,
      }),
    })

    return response.ok
      ? { status: 'accepted' }
      : {
          status: 'rejected',
          message: `The enquiry service responded with ${response.status}. Please try again or contact us by phone.`,
        }
  } catch {
    return {
      status: 'rejected',
      message: 'We could not reach the enquiry service. Please try again, or call or email us directly.',
    }
  }
}
