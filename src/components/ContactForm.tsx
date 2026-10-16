import { useState, type FormEvent } from 'react'
import { AlertCircle, Loader2, Send, CheckCircle2 } from 'lucide-react'
import { services } from '../data/services'
import { formProviderConfigured, submitEnquiry, type EnquiryPayload } from '../lib/enquiry'
import { ActionButton } from './Button'
import { mailtoLink, telLink } from '../data/site'
import { company } from '../data/company'

type Errors = Partial<Record<keyof EnquiryPayload, string>>

const empty: EnquiryPayload = { name: '', email: '', phone: '', topic: '', message: '' }

const validate = (values: EnquiryPayload): Errors => {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.'
  if (values.phone.trim() && !/^[0-9+\-\s()]{6,20}$/.test(values.phone.trim()))
    errors.phone = 'Please enter a valid phone number.'
  if (values.message.trim().length < 15)
    errors.message = 'Please describe your requirement in at least a sentence.'
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle')
  const [failure, setFailure] = useState('')

  const field = (key: keyof EnquiryPayload) => ({
    value: values[key],
    id: key,
    name: key,
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((current) => ({ ...current, [key]: event.target.value }))
      if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }))
    },
  })

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setState('idle')
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }

    setState('sending')
    const result = await submitEnquiry(values)
    if (result.status === 'accepted') {
      setState('sent')
      setValues(empty)
      return
    }
    setState('failed')
    setFailure(
      result.status === 'unconfigured'
        ? 'Online enquiry delivery is not configured on this deployment yet. Your message was not sent.'
        : result.message,
    )
  }

  const inputClass = (key: keyof EnquiryPayload) =>
    `w-full rounded-(--radius-btn) border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-silver focus:border-blue ${
      errors[key] ? 'border-red-400' : 'border-line'
    }`

  const labelClass = 'mb-1.5 block font-display text-sm font-bold text-navy'

  const error = (key: keyof EnquiryPayload) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-red-600">
        <AlertCircle className="size-3.5" aria-hidden="true" />
        {errors[key]}
      </p>
    ) : null

  if (state === 'sent') {
    return (
      <div
        role="status"
        className="rounded-(--radius-card) border border-lime-dark/40 bg-lime/15 p-8"
      >
        <CheckCircle2 className="size-8 text-lime-dark" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-navy">Enquiry sent</h3>
        <p className="mt-2 text-sm text-ink">
          Thank you. Your message has been accepted for delivery. We reply during business hours.
        </p>
        <button
          type="button"
          onClick={() => setState('idle')}
          className="mt-5 text-sm font-bold text-blue underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-red-600">*</span>
          </label>
          <input type="text" autoComplete="name" className={inputClass('name')} {...field('name')} />
          {error('name')}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            autoComplete="email"
            className={inputClass('email')}
            {...field('email')}
          />
          {error('email')}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            type="tel"
            autoComplete="tel"
            className={inputClass('phone')}
            {...field('phone')}
          />
          {error('phone')}
        </div>
        <div>
          <label htmlFor="topic" className={labelClass}>
            What do you need?
          </label>
          <select id="topic" name="topic" className={inputClass('topic')} value={values.topic}
            onChange={(event) => setValues((c) => ({ ...c, topic: event.target.value }))}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Your requirement <span className="text-red-600">*</span>
        </label>
        <textarea
          rows={5}
          className={inputClass('message')}
          placeholder="Briefly describe your business and what you want to improve."
          {...field('message')}
        />
        {error('message')}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company-website">Company website</label>
        <input id="company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state === 'failed' && (
        <div
          role="alert"
          className="rounded-(--radius-card) border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <p className="font-semibold">{failure}</p>
          {!formProviderConfigured && (
            <p className="mt-2">
              Reach us directly at{' '}
              <a href={telLink} className="underline">
                {company.contact.phoneDisplay}
              </a>{' '}
              or{' '}
              <a href={mailtoLink()} className="underline break-all">
                {company.contact.email}
              </a>
              .
            </p>
          )}
        </div>
      )}

      <ActionButton type="submit" variant="navy" disabled={state === 'sending'} className="w-full sm:w-auto">
        {state === 'sending' ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Send Enquiry
          </>
        )}
      </ActionButton>
      <p className="text-xs text-muted">
        By sending this enquiry you agree to us using these details to respond to you. See our{' '}
        <a href="/privacy-policy" className="text-blue underline underline-offset-2">
          privacy policy
        </a>
        .
      </p>
    </form>
  )
}
