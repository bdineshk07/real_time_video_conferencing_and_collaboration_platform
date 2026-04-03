import { Link } from 'react-router-dom';
import { Video } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-surface/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 text-primary font-headline font-bold text-xl">
          <div className="bg-primary text-on-primary p-1.5 rounded-lg">
            <Video size={20} />
          </div>
          The Fluid Exchange
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-on-surface-variant">
          <a href="#" className="hover:text-primary transition-colors">Product</a>
          <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
          <a href="#" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="hover:text-primary transition-colors">Resources</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/login" className="text-sm font-medium text-primary hover:bg-primary/5 px-4 py-2 rounded-full transition-colors">
          Log in
        </Link>
        <Link to="/login" className="text-sm font-medium text-on-primary bg-gradient-to-r from-primary to-primary-container px-5 py-2 rounded-full shadow-sm hover:shadow transition-all">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
