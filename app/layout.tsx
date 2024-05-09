import HeaderWrapper from "./_components/navigation/header/header-wrapper";
import Footer from "./_components/navigation/footer/footer";

import "./globals.css";
import ScrollUpButton from "./_components/navigation/scroll-up-button";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderWrapper />
        {children}
        <ScrollUpButton />
        <Footer />
      </body>
    </html>
  );
}
