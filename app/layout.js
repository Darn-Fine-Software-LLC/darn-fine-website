import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Darn Fine Software | Custom web and app development.",
  description:
    "Darn Fine Software works with you to solve business needs with custom web and mobile applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <footer className="w-full bg-gray-100 px-10 md:px-20 py-6 text-center flex flex-col justify-center">
            <span className="block text-sm text-gray-600 font-bold">
              Darn Fine Software LLC
            </span>
            <span className="block text-sm text-gray-500 w-full">
              Proudly based in{" "}
              <address className="inline not-italic">
                Hilliard, Ohio{" "}
                <span className="sr-only">43026 United States</span>
              </address>
            </span>
            <span className="flex flex-row text-sm items-center justify-center gap-1 text-gray-500 w-full">
              <a
                href="tel:7403312854"
                className="cursor-pointer hover:text-blue-600 underline"
              >
                (740) 331-2854
              </a>
              {"•"}
              <a
                href="mailto:alex@darnfinesoftware.com"
                className="cursor-pointer hover:text-blue-600 underline"
              >
                Email Us
              </a>
            </span>
          </footer>
        </div>
      </body>
      <GoogleAnalytics gaId="G-1EP1GXNJKD" />
    </html>
  );
}
