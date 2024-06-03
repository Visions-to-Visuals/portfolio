export default function Pricing() {


    function List({text}) {
        return(
            <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{text}</span>
          </li>
        )
    }

    return(
<section className="py-12 my-[5rem]">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h1 className="text-[3rem] font-extrabold sm:text-5xl">
        Our Pricing Packages
      </h1>
      <p className="mt-4 text-xl tablet-s:text-[1.1rem] tablet-s:px-[2rem]">
        These prices have a range because we only charge based on your specific needs.
      </p>
    </div>

    <div className="flex items-stretch justify-center gap-8 tablet-s:flex-col tablet-s:items-center">
      <div className="rounded-[1rem] shadow-lg p-6 transform w-[23rem] tablet-s:w-[30rem]">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Small Business</h2>
          <p className="mt-4 opacity-60">Ideal for websites that don't require complex features and a lot of pages.</p>
        </div>
        <div className="mb-8 flex flex-col justify-center items-center">
            <span class="text-[1rem] font-medium text-gray-400">Starting at </span>
            <span className="text-4xl font-extrabold">$1000</span>
        </div>
        <ul className="mb-8 space-y-4">
          <List text="Website Sitemap"></List>
          <List text="1 Design Concept"></List>
          <List text="2 Revision Meetings"></List>
          <List text="Main page and up to 5 pages"></List>
          <List text="1 CMS Collection"></List>
          <List text="Content copywriting"></List>
          <List text="Brand Guidelines Kit"></List>
          <List text="Technical SEO Optimization"></List>
          <List text="30-day post-launch Support"></List>
          <List text="1-hour session for CMS Training"></List>
          <List text="Full Ownership of Design + Development"></List>
        </ul>
      </div>

      <div className="rounded-[1rem] shadow-lg p-6 transform w-[23rem] tablet-s:w-[30rem]">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Upscaling</h2>
          <p className="mt-4 opacity-60">Great for more complex websites that need a little more of everything.</p>
        </div>
        <div className="mb-8">
          <span className="text-4xl font-extrabold">$1500-2500</span>
        </div>
        <ul className="mb-8 space-y-4">
            <List text="Website Sitemap"></List>
            <List text="2 Design Concepts"></List>
            <List text="4 Revision Meetings"></List>
            <List text="Main page and up to 12 pages"></List>
            <List text="3 CMS Collections"></List>
            <List text="Custom-coded website"></List>
            <List text="Content copywriting"></List>
            <List text="Brand Guidelines Kit"></List>
            <List text="Technical SEO Optimization"></List>
            <List text="30-day post-launch Support"></List>
            <List text="Two 1-hour sessions for CMS Training"></List>
            <List text="Full Ownership of Design + Development"></List>
        </ul>
      </div>

      <div className="rounded-[1rem] shadow-lg p-6 transform w-[23rem] tablet-s:w-[30rem]">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Enterprise</h2>
          <p className="mt-4 opacity-60">For websites that require more advanced features and heavy-duty designs.</p>
        </div>
        <div className="mb-8">
          <span className="text-4xl font-extrabold">$2500+</span>
        </div>
        <ul className="mb-8 space-y-4">
            <List text="Website Sitemap"></List>
            <List text="3 Design Concepts"></List>
            <List text="Unlimited Revision Meetings"></List>
            <List text="Unlimited Pages"></List>
            <List text="Unlimited CMS Collections"></List>
            <List text="Custom-coded website"></List>
            <List text="Content copywriting"></List>
            <List text="Brand Guidelines Kit"></List>
            <List text="Technical SEO Optimization"></List>
            <List text="60-day post-launch Support"></List>
            <List text="Five 1-hour sessions for CMS Training"></List>
            <List text="Full Ownership of Design + Development"></List>
        </ul>
        {/* <a href="#" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
          Get Started
        </a> */}
      </div>
    </div>
  </div>
</section>

    );
}