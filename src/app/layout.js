import Footer from "@/components/shared/Footer";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "The Daily Star News Portal",
  description: "Daily Star is Working for General Public",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Navbar></Navbar>
        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
