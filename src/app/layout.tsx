import { Inter, Unica_One } from 'next/font/google';
import "./globals.css";


export const metadata = {
  title: 'The Canvas | Eligibility Checker',
  description: 'Check your wallet for The Canvas NFT eligibility.',
};



const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const unica = Unica_One({ weight: '400', subsets: ['latin'], variable: '--font-unica' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${inter.variable} ${unica.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className="bg-[#0F0F1A] text-white"
      >
        {children}
      </body>
    </html>
  );
}
