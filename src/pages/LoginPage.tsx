import { Link, useNavigate } from 'react-router-dom';
import { Video } from 'lucide-react';
import { toast } from 'sonner';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Successfully logged in');
    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    toast.success('Successfully logged in with Google');
    navigate('/dashboard');
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info('Password reset link sent to your email');
  };

  const handleSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info('Sign up flow initiated');
  };

  return (
    <div className="min-h-screen flex bg-surface">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        <div className="max-w-md w-full mx-auto space-y-8">
          <Link to="/" className="flex items-center gap-2 text-primary font-headline font-bold text-xl mb-12">
            <div className="bg-primary text-on-primary p-1.5 rounded-lg">
              <Video size={20} />
            </div>
            The Fluid Exchange
          </Link>

          <div>
            <h2 className="text-3xl font-headline font-bold text-on-surface">Welcome back</h2>
            <p className="text-on-surface-variant mt-2">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-on-surface">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest focus:bg-surface focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                required
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-on-surface">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest focus:bg-surface focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                required
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" />
                <span className="text-sm text-on-surface-variant">Remember for 30 days</span>
              </label>
              <a href="#" onClick={handleForgotPassword} className="text-sm font-medium text-primary hover:underline">Forgot password?</a>
            </div>

            <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-medium shadow-sm hover:shadow transition-all mt-4">
              Sign in
            </button>

            <button type="button" onClick={handleGoogleLogin} className="w-full py-3 rounded-xl bg-surface-container-lowest text-on-surface font-medium hover:bg-surface-container-low transition-all flex items-center justify-center gap-2 shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign in with Google
            </button>
          </form>

          <p className="text-center text-sm text-on-surface-variant pt-4">
            Don't have an account? <a href="#" onClick={handleSignUp} className="font-medium text-primary hover:underline">Sign up</a>
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 p-4">
        <div className="w-full h-full rounded-3xl overflow-hidden relative">
          <img 
            src="https://picsum.photos/seed/abstract/1000/1200" 
            alt="Abstract" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12">
            <h3 className="text-3xl font-headline font-bold text-white mb-4">
              "The Fluid Exchange has completely transformed how our global team collaborates."
            </h3>
            <p className="text-white/80 font-medium">Sarah Jenkins, CTO at TechFlow</p>
          </div>
        </div>
      </div>
    </div>
  );
}
