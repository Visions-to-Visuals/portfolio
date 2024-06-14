import "./globals.css";

export const metadata = {
  title: "Visions to Visuals | Website Design and Development",
  description: 'Welcome to Visions to Visuals, a professional web design and development company. We specialize in crafting stunning, user-friendly websites that elevate your brand’s digital presence and drive business growth. We understand that a website is more than just a digital brochure; it’s a powerful tool for engaging customers and enhancing your brand’s identity. We focus on delivering customized solutions that reflect your unique values and stories, ensuring an optimal user experience that boosts engagement and conversions. Contact us today to transform your vision into a visual reality.'
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
      <body>{children}</body>
    </html>
  );
}
