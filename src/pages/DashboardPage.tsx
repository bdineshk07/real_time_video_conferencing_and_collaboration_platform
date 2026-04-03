import DashboardLayout from '../components/DashboardLayout';
import { Video, Plus, Calendar, Clock, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function DashboardPage() {
  const navigate = useNavigate();
  const upcomingMeetings = [
    { id: 1, title: 'Weekly Team Sync', time: '10:00 AM - 11:00 AM', attendees: 5, color: 'bg-blue-100 text-blue-700' },
    { id: 2, title: 'Design Review', time: '1:00 PM - 2:00 PM', attendees: 3, color: 'bg-purple-100 text-purple-700' },
    { id: 3, title: 'Client Presentation', time: '3:30 PM - 4:30 PM', attendees: 8, color: 'bg-green-100 text-green-700' },
  ];

  const handleJoinMeeting = () => {
    const code = window.prompt("Enter meeting code:");
    if (code) {
      toast.success(`Joining meeting ${code}...`);
      navigate('/lobby');
    }
  };

  return (
    <DashboardLayout>
      <div className="p-8 max-w-6xl mx-auto space-y-8">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-headline font-bold text-on-surface">Welcome back, Alex</h1>
            <p className="text-on-surface-variant mt-1">Here's what's happening today.</p>
          </div>
          <p className="text-sm font-medium text-on-surface-variant bg-surface-container px-4 py-2 rounded-full">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/lobby" className="bg-gradient-to-br from-primary to-primary-container p-6 rounded-2xl text-on-primary shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              <Video size={32} className="mb-4" />
              <h3 className="text-lg font-bold font-headline">New Meeting</h3>
              <p className="text-on-primary/80 text-sm mt-1">Start an instant meeting</p>
            </Link>
            
            <button onClick={handleJoinMeeting} className="bg-surface-container-lowest p-6 rounded-2xl text-left hover:shadow-md transition-all group shadow-sm">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Plus size={24} />
              </div>
              <h3 className="text-lg font-bold font-headline text-on-surface">Join Meeting</h3>
              <p className="text-on-surface-variant text-sm mt-1">Enter a meeting code or link</p>
            </button>

            <Link to="/schedule" className="bg-surface-container-lowest p-6 rounded-2xl text-left hover:shadow-md transition-all group shadow-sm">
              <div className="bg-secondary-container w-12 h-12 rounded-xl flex items-center justify-center text-on-secondary-container mb-4 group-hover:scale-110 transition-transform">
                <Calendar size={24} />
              </div>
              <h3 className="text-lg font-bold font-headline text-on-surface">Schedule</h3>
              <p className="text-on-surface-variant text-sm mt-1">Plan a future meeting</p>
            </Link>
          </div>

          {/* Upcoming Meetings */}
          <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-headline font-bold text-on-surface">Upcoming Meetings</h2>
              <Link to="/schedule" className="text-sm font-medium text-primary hover:underline">View all</Link>
            </div>
            
            <div className="space-y-4">
              {upcomingMeetings.map(meeting => (
                <div key={meeting.id} className="flex items-center justify-between p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${meeting.color}`}>
                      {meeting.title.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface">{meeting.title}</h4>
                      <div className="flex items-center gap-3 text-sm text-on-surface-variant mt-1">
                        <span className="flex items-center gap-1"><Clock size={14} /> {meeting.time}</span>
                        <span className="flex items-center gap-1"><Users size={14} /> {meeting.attendees}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/lobby" className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Join
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity or Stats */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-headline font-bold text-on-surface mb-6">This Week</h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-on-surface-variant mb-1">Total Meeting Time</p>
                <p className="text-3xl font-bold font-headline text-on-surface">12h 45m</p>
              </div>
              <div>
                <p className="text-sm text-on-surface-variant mb-1">Meetings Hosted</p>
                <p className="text-3xl font-bold font-headline text-on-surface">8</p>
              </div>
              <div className="pt-4 mt-4 bg-surface-container-low p-4 rounded-xl">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-on-surface-variant">Storage used</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-primary h-full w-[45%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
