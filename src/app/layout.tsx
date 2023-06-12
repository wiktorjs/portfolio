import './styles/globals.scss';
import './styles/typography.scss';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Wiktor Sienkiewicz',
  description: "Hi there! I am a passionate front-end developer skilled in creating interactive and visually appealing web applications. Explore my projects, which showcase my HTML, CSS, JavaScript, and modern front-end frameworks and libraries skills. My goal is to create user-friendly responsive apps that work seamlessly. Paying attention to even the tiniest details, I make my applications pleasant to look at. Let's connect and discuss how I can contribute to your next front-end development project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
