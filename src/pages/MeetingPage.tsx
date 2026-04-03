import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, MicOff, Video, VideoOff, MonitorUp, Smile, PhoneOff, MessageSquare, Users, LayoutGrid, Maximize, MoreVertical } from 'lucide-react';
import { cn } from '../lib/utils';
import { toast } from 'sonner';

export default function MeetingPage() {
  const navigate = useNavigate();
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [layout, setLayout] = useState<'grid' | 'focus'>('grid');
  const [showSidebar, setShowSidebar] = useState(false);

  const participants = [
    { id: 1, name: 'Alex Morgan', isSpeaking: true, image: 'https://picsum.photos/seed/p1/600/400' },
    { id: 2, name: 'Sarah Jenkins', isSpeaking: false, image: 'https://picsum.photos/seed/p2/600/400' },
    { id: 3, name: 'David Chen', isSpeaking: false, image: 'https://picsum.photos/seed/p3/600/400' },
    { id: 4, name: 'Emily Davis', isSpeaking: false, image: 'https://picsum.photos/seed/p4/600/400' },
    { id: 5, name: 'Michael Brown', isSpeaking: false, image: 'https://picsum.photos/seed/p5/600/400' },
    { id: 6, name: 'Jessica Wilson', isSpeaking: false, image: 'https://picsum.photos/seed/p6/600/400' },
  ];

  const handleLeave = () => {
    toast.success('You left the meeting');
    navigate('/dashboard');
  };

  const handleShareScreen = () => {
    toast.info('Screen sharing started');
  };

  const handleReaction = () => {
    toast.info('Reactions menu opened');
  };

  const handleMoreOptions = () => {
    toast.info('More options menu opened');
  };

  return (
    <div className="h-screen bg-neutral-950 flex flex-col overflow-hidden text-white">
      {/* Top Bar */}
      <header className="px-6 py-4 flex items-center justify-between bg-neutral-900/50 backdrop-blur-md absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center gap-4">
          <h1 className="font-headline font-bold text-lg">Weekly Sync</h1>
          <div className="w-1 h-1 rounded-full bg-neutral-500"></div>
          <span className="text-sm text-neutral-400 font-mono">10:24</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setLayout(layout === 'grid' ? 'focus' : 'grid')}
            className="p-2 rounded-lg hover:bg-neutral-800 transition-colors text-neutral-300 hover:text-white"
            title="Toggle Layout"
          >
            {layout === 'grid' ? <Maximize size={20} /> : <LayoutGrid size={20} />}
          </button>
          <button 
            onClick={() => setShowSidebar(!showSidebar)}
            className={cn("p-2 rounded-lg transition-colors flex items-center gap-2", showSidebar ? "bg-primary/20 text-primary" : "hover:bg-neutral-800 text-neutral-300 hover:text-white")}
          >
            <Users size={20} />
            <span className="text-sm font-medium">6</span>
          </button>
          <button onClick={() => { setShowSidebar(true); toast.info('Chat opened'); }} className="p-2 rounded-lg hover:bg-neutral-800 transition-colors text-neutral-300 hover:text-white">
            <MessageSquare size={20} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative flex pt-16 pb-24 px-4 gap-4">
        {/* Video Area */}
        <div className={cn("flex-1 transition-all duration-300", layout === 'grid' ? 'flex items-center justify-center' : 'flex gap-4')}>
          
          {layout === 'grid' ? (
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
              {participants.map(p => (
                <div 
                  key={p.id} 
                  className={cn(
                    "relative rounded-2xl overflow-hidden bg-neutral-800 aspect-video",
                    p.isSpeaking && "ring-4 ring-primary shadow-[0_0_24px_rgba(0,70,204,0.4)]"
                  )}
                >
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-3 left-3 bg-neutral-900/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                    {p.isSpeaking && <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>}
                    {p.name}
                  </div>
                  <div className="absolute top-3 right-3 bg-neutral-900/60 backdrop-blur-md p-1.5 rounded-lg">
                    <MicOff size={14} className={p.isSpeaking ? "hidden" : "text-error"} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Focus View - Main Speaker */}
              <div className="flex-1 relative rounded-2xl overflow-hidden bg-neutral-800 h-full">
                <img src={participants[0].image} alt={participants[0].name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute bottom-4 left-4 bg-neutral-900/60 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  {participants[0].name}
                </div>
              </div>
              {/* Focus View - Sidebar Videos */}
              <div className="w-64 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
                {participants.slice(1).map(p => (
                  <div key={p.id} className="relative rounded-xl overflow-hidden bg-neutral-800 aspect-video shrink-0">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute bottom-2 left-2 bg-neutral-900/60 backdrop-blur-md px-2 py-1 rounded-md text-xs font-medium">
                      {p.name}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right Sidebar (Chat/Participants) */}
        {showSidebar && (
          <div className="w-80 bg-neutral-900 rounded-2xl border border-neutral-800 flex flex-col overflow-hidden shrink-0">
            <div className="p-4 bg-neutral-800 flex items-center justify-between">
              <h2 className="font-headline font-bold">Participants (6)</h2>
              <button onClick={() => setShowSidebar(false)} className="text-neutral-400 hover:text-white">
                <MoreVertical size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-2">
              {participants.map(p => (
                <div key={p.id} className="flex items-center justify-between p-2 hover:bg-neutral-800 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-3">
                    <img src={p.image} alt={p.name} className="w-8 h-8 rounded-full object-cover" referrerPolicy="no-referrer" />
                    <span className="text-sm font-medium">{p.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400">
                    {p.isSpeaking ? <Mic size={16} className="text-primary" /> : <MicOff size={16} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Bottom Floating Control Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-neutral-800/80 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-2xl">
        <button 
          onClick={() => setIsMicOn(!isMicOn)}
          className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-all", isMicOn ? "bg-neutral-700 hover:bg-neutral-600" : "bg-error text-white")}
        >
          {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
        </button>
        <button 
          onClick={() => setIsVideoOn(!isVideoOn)}
          className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-all", isVideoOn ? "bg-neutral-700 hover:bg-neutral-600" : "bg-error text-white")}
        >
          {isVideoOn ? <Video size={20} /> : <VideoOff size={20} />}
        </button>
        
        <div className="w-px h-8 bg-neutral-700 mx-2"></div>
        
        <button onClick={handleShareScreen} className="w-12 h-12 rounded-xl flex items-center justify-center bg-neutral-700 hover:bg-neutral-600 transition-all">
          <MonitorUp size={20} />
        </button>
        <button onClick={handleReaction} className="w-12 h-12 rounded-xl flex items-center justify-center bg-neutral-700 hover:bg-neutral-600 transition-all">
          <Smile size={20} />
        </button>
        <button onClick={handleMoreOptions} className="w-12 h-12 rounded-xl flex items-center justify-center bg-neutral-700 hover:bg-neutral-600 transition-all">
          <MoreVertical size={20} />
        </button>
        
        <div className="w-px h-8 bg-neutral-700 mx-2"></div>
        
        <button 
          onClick={handleLeave}
          className="px-6 h-12 rounded-xl flex items-center justify-center bg-error hover:bg-error/90 text-white font-medium transition-all gap-2"
        >
          <PhoneOff size={20} />
          <span className="hidden sm:inline">Leave</span>
        </button>
      </div>

    </div>
  );
}
