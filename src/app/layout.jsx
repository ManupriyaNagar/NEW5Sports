import './globals.css';
import Header from './../components/global/header';
import Footer from './../components/global/Footer';
import { ThemeProvider } from './../components/contex/ThemeContext';

export const metadata = {
title: '5 Sports Health',
description: 'INDIA’S FIRST INTEGRATED SPORTS MEDICINE & REHAB CENTER',
icons: {
icon: [
{ url: '/favicon.svg', type: 'image/svg+xml' },
// Optional fallback for older browsers:

],
},
};

export default function RootLayout({ children }) {
return (
<html lang="en">
<body>
<ThemeProvider>
<Header />
{children}
<Footer />
</ThemeProvider>
</body>
</html>
);
}