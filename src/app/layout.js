import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Visions to Visuals - Trusted Partners for Website Design and Development",
  description: 'High-quality reliable websites that elevate your digital presence. Your website is more than a digital brochure; it’s a powerful tool for engaging customers and enhancing your brand’s identity. We focus on delivering customized solutions that reflect your unique values and stories, ensuring an optimal user experience that boosts engagement and conversions.'
};

const HotjarSnippet = () => {
  return (
    <>
      <Script id="hotjar-snippet">
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:5024968,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
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
      <HotjarSnippet></HotjarSnippet>
      <body>{children}</body>
    </html>
  );
}
