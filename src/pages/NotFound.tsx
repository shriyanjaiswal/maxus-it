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
      />
      <section className="bg-navy-deep py-20 lg:py-28">
        <div className="container-page max-w-2xl text-center">
          <p className="font-display text-6xl font-extrabold text-lime lg:text-7xl">404</p>
          <h1 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-4 text-white/75">
            The address may have changed, or the link was entered incorrectly. Here are the pages
            people usually need.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <LinkButton to="/" variant="lime" arrow>
              Back to Home
            </LinkButton>
            <LinkButton to="/contact" variant="outlineLight">
              Contact Us
            </LinkButton>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <LinkButton to={link.to} variant="outlineLight" className="border-0 px-0 py-0 text-white/80 hover:bg-transparent hover:text-lime">
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
