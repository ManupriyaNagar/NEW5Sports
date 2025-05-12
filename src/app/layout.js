import Header from '@/components/global/header';
import './globals.css';
import { ThemeProvider } from '@/components/contex/ThemeContext';

export const metadata = {
  title: 'Your App',
  description: 'App description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
