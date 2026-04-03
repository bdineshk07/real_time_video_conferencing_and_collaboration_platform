import DashboardLayout from '../components/DashboardLayout';
import { Play, MoreVertical, Clock, Calendar } from 'lucide-react';
import { toast } from 'sonner';

export default function RecordingsPage() {
  const recordings = [
    { id: 1, title: 'Q3 Planning Session', date: 'Oct 12, 2023', duration: '45:20', thumbnail: 'https://picsum.photos/seed/rec1/400/225' },
    { id: 2, title: 'Design Sync - Mobile App', date: 'Oct 10, 2023', duration: '32:15', thumbnail: 'https://picsum.photos/seed/rec2/400/225' },
    { id: 3, title: 'Client Onboarding', date: 'Oct 08, 2023', duration: '58:40', thumbnail: 'https://picsum.photos/seed/rec3/400/225' },
    { id: 4, title: 'Engineering Standup', date: 'Oct 05, 2023', duration: '15:00', thumbnail: 'https://picsum.photos/seed/rec4/400/225' },
    { id: 5, title: 'Marketing Campaign Review', date: 'Oct 01, 2023', duration: '42:10', thumbnail: 'https://picsum.photos/seed/rec5/400/225' },
    { id: 6, title: 'All Hands Meeting', date: 'Sep 28, 2023', duration: '1:15:00', thumbnail: 'https://picsum.photos/seed/rec6/400/225' },
  ];

  const handlePlay = (title: string) => {
    toast.info(`Playing recording: ${title}`);
  };

  const handleMoreOptions = (title: string) => {
    toast.info(`Options for: ${title}`);
  };

  return (
    <DashboardLayout>
      <div className="p-8 max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-headline font-bold text-on-surface">Recordings</h1>
            <p className="text-on-surface-variant mt-1">Access and manage your past meeting recordings.</p>
          </div>
          <div className="flex items-center gap-4">
            <input 
              type="text" 
              placeholder="Search recordings..." 
              className="px-4 py-2 rounded-full bg-surface-container-lowest focus:bg-surface focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm w-64 shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recordings.map(rec => (
            <div key={rec.id} className="bg-surface-container-lowest rounded-2xl overflow-hidden group hover:shadow-md transition-all shadow-sm">
              <div className="relative aspect-video bg-surface-container">
                <img src={rec.thumbnail} alt={rec.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button onClick={() => handlePlay(rec.title)} className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Play size={24} className="ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded">
                  {rec.duration}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-on-surface font-headline line-clamp-1">{rec.title}</h3>
                  <button onClick={() => handleMoreOptions(rec.title)} className="text-on-surface-variant hover:text-on-surface p-1 rounded-md hover:bg-surface-container transition-colors">
                    <MoreVertical size={16} />
                  </button>
                </div>
                <div className="flex items-center gap-4 mt-2 text-xs text-on-surface-variant">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {rec.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
