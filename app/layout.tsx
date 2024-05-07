import Footer from "./_components/navigation/header/footer/footer";
import Header from "./_components/navigation/header/header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
