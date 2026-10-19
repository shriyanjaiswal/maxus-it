import { quickLinks } from '../data/site'
import { LinkButton } from '../components/Button'
import { Seo } from '../components/Seo'

export function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | MAXUS IT SERVICES"
        description="The page you requested could not be found."
        path="/404"
        noindex={true}
      />
      <section className="bg-navy-deep py-12 sm:py-20 lg:py-28">
        <div className="container-page max-w-2xl text-center">
          <p className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-lime">404</p>
          <h1 className="mt-4 sm:mt-6 text-[22px] sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-3 sm:mt-4 text-[14px] sm:text-base text-white/75 leading-relaxed">
            The address may have changed, or the link was entered incorrectly. Here are the pages
            people usually need.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <LinkButton to="/" variant="lime" arrow className="w-full sm:w-auto justify-center">
              Back to Home
            </LinkButton>
            <LinkButton to="/contact" variant="outlineLight" className="w-full sm:w-auto justify-center">
              Contact Us
            </LinkButton>
          </div>
          <ul className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2.5 text-[13px] sm:text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <LinkButton to={link.to} variant="outlineLight" className="border-0 px-2 py-1 text-white/80 hover:bg-transparent hover:text-lime">
                  {link.label}
                </LinkButton>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
