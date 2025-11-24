import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'BUGUMA - Supporting Refugees',
  description: 'BUGUMA is dedicated to supporting, empowering, and uplifting refugees to rebuild their lives with dignity, security, and opportunity.',
  keywords: 'refugees, NGO, empowerment, community support, South Africa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
