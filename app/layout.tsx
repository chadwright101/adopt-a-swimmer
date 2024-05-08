import Footer from "./_components/navigation/footer/footer";
import Header from "@/app/_components/navigation/header/header";
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
