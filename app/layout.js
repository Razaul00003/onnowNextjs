import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./GlobalRedux/provider";

export const metadata = {
  title: "Onnow Order Page",
  description: "Its all about payment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
