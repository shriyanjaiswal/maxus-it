import { LinkButton } from './Button'

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-10 sm:py-16 lg:py-20" aria-labelledby="cta-heading">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_85%_10%,rgba(23,107,138,0.55),transparent_65%)]"
        aria-hidden="true"
      />
      <div className="container-page relative flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 id="cta-heading" className="text-[20px] font-extrabold text-white sm:text-3xl lg:text-4xl font-heading leading-tight">
            Let&apos;s Build Your Business Future Together!
          </h2>
          <p className="mt-2.5 sm:mt-4 text-[14px] sm:text-base text-white/75 leading-relaxed">
            Whether you need a new website, custom software, or business automation solutions,
            we&apos;re here to help. Get in touch and let&apos;s discuss your requirements.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton to="/contact" variant="lime" arrow className="w-full sm:w-auto justify-center min-h-[44px]">
            Talk to Our Expert
          </LinkButton>
          <LinkButton to="/services" variant="outlineLight" className="w-full sm:w-auto justify-center min-h-[44px]">
            Explore Our Services
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
