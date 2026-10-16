import { LinkButton } from './Button'

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 lg:py-20" aria-labelledby="cta-heading">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_85%_10%,rgba(23,107,138,0.55),transparent_65%)]"
        aria-hidden="true"
      />
      <div className="container-page relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 id="cta-heading" className="text-3xl font-extrabold text-white sm:text-4xl">
            Let&apos;s Build Your Business Future Together!
          </h2>
          <p className="mt-4 text-white/75">
            Whether you need a new website, custom software, or business automation solutions,
            we&apos;re here to help. Get in touch and let&apos;s discuss your requirements.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <LinkButton to="/contact" variant="lime" arrow className="w-full sm:w-auto">
            Talk to Our Expert
          </LinkButton>
          <LinkButton to="/services" variant="outlineLight" className="w-full sm:w-auto">
            Explore Our Services
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
