import Navbar from '../components/Navbar';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleStartFree = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-20 pb-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface leading-tight">
            Fluid communication <br/> for modern teams.
          </h1>
          
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Experience crystal-clear video, seamless collaboration, and enterprise-grade security in one unified platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <form onSubmit={handleStartFree} className="flex w-full sm:w-auto max-w-sm relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                className="w-full pl-5 pr-32 py-4 rounded-full bg-surface-container-lowest focus:bg-surface focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
              />
              <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 rounded-full font-medium shadow-sm hover:shadow transition-all flex items-center gap-2">
                Start for free
              </button>
            </form>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-on-surface-variant pt-2">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-primary" /> No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-primary" /> Free 14-day trial
            </span>
          </div>
        </div>

        {/* Mockup Image Area */}
        <div className="mt-20 w-full max-w-6xl mx-auto bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden relative aspect-video">
          <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-low to-surface-container-lowest flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 w-full h-full p-8">
              <div className="bg-surface-container rounded-2xl col-span-2 row-span-2 relative overflow-hidden">
                <img src="https://picsum.photos/seed/meeting1/800/600" alt="Meeting" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-surface-container rounded-2xl relative overflow-hidden">
                 <img src="https://picsum.photos/seed/meeting2/400/300" alt="Meeting" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-surface-container rounded-2xl relative overflow-hidden">
                 <img src="https://picsum.photos/seed/meeting3/400/300" alt="Meeting" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
