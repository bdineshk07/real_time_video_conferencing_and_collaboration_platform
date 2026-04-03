import DashboardLayout from '../components/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function SchedulePage() {
  const navigate = useNavigate();

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Meeting scheduled successfully!');
    navigate('/dashboard');
  };

  return (
    <DashboardLayout>
      <div className="p-8 max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-headline font-bold text-on-surface">Schedule Meeting</h1>
          <p className="text-on-surface-variant mt-1">Set up a new meeting and invite participants.</p>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm">
          <form onSubmit={handleSchedule} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-on-surface">Meeting Title</label>
              <input 
                type="text" 
                placeholder="e.g. Weekly Sync" 
                required
                className="w-full px-4 py-3 rounded-xl bg-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-on-surface">Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-on-surface">Time</label>
                <input 
                  type="time" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-on-surface">Timezone</label>
              <select className="w-full px-4 py-3 rounded-xl bg-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none shadow-sm">
                <option>Pacific Time (PT)</option>
                <option>Eastern Time (ET)</option>
                <option>Coordinated Universal Time (UTC)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-on-surface">Description (Optional)</label>
              <textarea 
                rows={4}
                placeholder="Add meeting agenda or notes..."
                className="w-full px-4 py-3 rounded-xl bg-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none shadow-sm"
              ></textarea>
            </div>

            <div className="pt-6 mt-6 flex items-center justify-end gap-4 bg-surface-container-low p-4 rounded-xl">
              <button type="button" onClick={() => navigate('/dashboard')} className="px-6 py-2.5 rounded-full font-medium text-on-surface-variant hover:bg-surface-container transition-colors">
                Cancel
              </button>
              <button type="submit" className="px-6 py-2.5 rounded-full font-medium bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-sm hover:shadow transition-all">
                Schedule Meeting
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
