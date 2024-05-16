import { antonio, spartan } from "./js/fonts";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Frontend Mentor | Planets fact site",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${antonio.variable} ${spartan.variable}`}>
      <body className="min-h-screen bg-main-black text-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
