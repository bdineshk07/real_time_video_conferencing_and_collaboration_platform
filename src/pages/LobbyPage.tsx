import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mic, MicOff, Video, VideoOff, Settings, MonitorUp, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export default function LobbyPage() {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const navigate = useNavigate();

  const handlePresent = () => {
    toast.info('Starting presentation mode...');
    navigate('/meeting');
  };

  const handleJoinPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info('Dial-in details sent to your device.');
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <header className="px-6 py-4 flex items-center justify-between shadow-sm bg-surface-container-lowest z-10 relative">
        <Link to="/dashboard" className="flex items-center gap-2 text-primary font-headline font-bold text-xl">
          <div className="bg-primary text-on-primary p-1.5 rounded-lg">
            <Video size={20} />
          </div>
          Fluid
        </Link>
        <div className="flex items-center gap-4">
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" className="w-8 h-8 rounded-full" />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left: Video Preview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-video bg-surface-container rounded-3xl overflow-hidden relative shadow-lg">
              {isVideoOn ? (
                <img src="https://picsum.photos/seed/lobby/800/450" alt="Camera Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-surface-container-high">
                  <div className="w-24 h-24 rounded-full bg-primary text-on-primary flex items-center justify-center text-4xl font-bold">
                    A
                  </div>
                </div>
              )}
              
              {/* Floating Controls */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-surface-container-lowest/80 backdrop-blur-xl px-6 py-3 rounded-full shadow-lg">
                <button 
                  onClick={() => setIsMicOn(!isMicOn)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isMicOn ? 'bg-surface-container hover:bg-surface-container-high text-on-surface' : 'bg-error text-on-error'}`}
                >
                  {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
                </button>
                <button 
                  onClick={() => setIsVideoOn(!isVideoOn)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isVideoOn ? 'bg-surface-container hover:bg-surface-container-high text-on-surface' : 'bg-error text-on-error'}`}
                >
                  {isVideoOn ? <Video size={20} /> : <VideoOff size={20} />}
                </button>
                <div className="w-px h-8 bg-outline-variant mx-2"></div>
                <button onClick={() => toast.info('Effects menu opened')} className="w-12 h-12 rounded-full flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface transition-all">
                  <Sparkles size={20} />
                </button>
                <button onClick={() => navigate('/settings')} className="w-12 h-12 rounded-full flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface transition-all">
                  <Settings size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Meeting Info & Join */}
          <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm text-center lg:text-left">
            <h1 className="text-3xl font-headline font-bold text-on-surface mb-2">Ready to join?</h1>
            <p className="text-on-surface-variant mb-8">Weekly Sync</p>

            <div className="space-y-4 mb-8">
              <p className="text-sm text-on-surface-variant">No one else is here yet</p>
              {/* Or list participants if any */}
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => navigate('/meeting')}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-medium shadow-sm hover:shadow transition-all text-lg"
              >
                Join now
              </button>
              <button onClick={handlePresent} className="w-full py-3.5 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface font-medium hover:bg-surface-container-low transition-all flex items-center justify-center gap-2">
                <MonitorUp size={20} />
                Present
              </button>
            </div>
            
            <p className="text-xs text-on-surface-variant mt-6 text-center">
              Other options: <a href="#" onClick={handleJoinPhone} className="text-primary hover:underline">Join by phone</a>
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
