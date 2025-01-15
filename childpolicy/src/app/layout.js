import Topbar from "./_components/Topbar";
import "./globals.css";
import {Poppins} from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: "el RED - Policies",
  description: "el RED - Policies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Topbar/>
        {children}
      </body>
    </html>
  );
}
