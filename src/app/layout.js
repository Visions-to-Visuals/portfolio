import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Visions to Visuals - Trusted Website Design & Development",
  description: 'Visions to Visuals creates reliable websites that elevate your brand. Customized solutions with Visions to Visuals boost engagement and conversions.'
};

const GoogleAnalyticsSnippet = () => {
  return (
    <>
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-LETVVC7HP2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LETVVC7HP2');
        `}
      </Script>
    </>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="home" className="
    monitor:text-[1.3rem]
    laptop:text-[.85rem] 
    laptop-s:text-[.75rem] 
    tablet:text-[1.2vw]
    tablet-s:text-[1rem]
    mobile:text-[.9rem]
    mobile-s:text-[.85rem]
    ">
      <GoogleAnalyticsSnippet></GoogleAnalyticsSnippet>
      <body>{children}</body>
    </html>
  );
}
