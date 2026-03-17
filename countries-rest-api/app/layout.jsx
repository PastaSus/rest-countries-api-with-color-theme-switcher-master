import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeProvider";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "REST Countries",
  description: "Get information about countries via a RESTful API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
