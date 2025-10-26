import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 text-red-700 px-3 py-1 text-xs font-medium mb-4">
            <span className="h-2 w-2 rounded-full bg-red-600"></span>
            Official House of the School
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
            Chitradurga House
          </h1>
          <p className="mt-3 text-lg text-neutral-700 max-w-prose" id="about">
            Inspired by the fort city of Chitradurga, our house embodies resilience and innovation. We nurture leaders who think globally and act responsibly—driven by technology, education, and environmental stewardship.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#highlights" className="px-5 py-3 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors shadow-sm">Explore Highlights</a>
            <a href="#join" className="px-5 py-3 rounded-md border border-neutral-300 text-neutral-800 hover:bg-neutral-50 transition-colors">Our Vision</a>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            <div>
              <dt className="text-xs text-neutral-500">Founded</dt>
              <dd className="text-lg font-semibold">2008</dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-500">Motto</dt>
              <dd className="text-lg font-semibold">Rise with Resolve</dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-500">House Color</dt>
              <dd className="text-lg font-semibold">Crimson Red</dd>
            </div>
          </dl>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative h-[360px] sm:h-[440px] lg:h-[520px] w-full rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
            <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent"></div>
          </div>
          <p className="mt-3 text-xs text-neutral-500 text-center">
            Tip: Click and drag the red globe to spin it.
          </p>
        </div>
      </div>
    </section>
  );
}
