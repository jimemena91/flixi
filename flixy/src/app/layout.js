import Head from 'next/head';
import { Inter } from 'next/font/google';
import Footer from '../components/footer/footer';
import './globals.css';
import footerStyles from '../components/footer/footer.module.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Flixy',
  description: 'Mundo documental',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}