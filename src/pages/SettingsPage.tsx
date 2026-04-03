import DashboardLayout from '../components/DashboardLayout';
import { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Video');

  return (
    <DashboardLayout>
      <div className="p-8 max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-headline font-bold text-on-surface">Settings</h1>
          <p className="text-on-surface-variant mt-1">Manage your application preferences.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Settings Sidebar */}
          <div className="w-full md:w-48 space-y-1">
            {['General', 'Video', 'Audio', 'Background'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${tab === activeTab ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Settings Content - Video */}
          <div className="flex-1 bg-surface-container-lowest rounded-2xl p-6 md:p-8 space-y-8 shadow-sm">
            <div>
              <h2 className="text-xl font-headline font-bold text-on-surface mb-4">{activeTab} Settings</h2>
              
              {activeTab === 'Video' && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface">Camera</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none shadow-sm">
                      <option>FaceTime HD Camera (Built-in)</option>
                      <option>External Webcam 1080p</option>
                    </select>
                  </div>

                  {/* Video Preview */}
                  <div className="aspect-video bg-surface-container rounded-2xl overflow-hidden relative shadow-sm">
                    <img src="https://picsum.photos/seed/preview/800/450" alt="Camera Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                      <div className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full">
                        Preview
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 mt-6 bg-surface-container-low p-4 rounded-xl">
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">Mirror my video</span>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">Touch up my appearance</span>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                    </label>

                    <div className="space-y-2 pt-2">
                      <label className="text-sm font-medium text-on-surface">Adjust for low light</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-surface focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none shadow-sm">
                        <option>Auto</option>
                        <option>Manual</option>
                        <option>Off</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              {activeTab !== 'Video' && (
                <div className="text-on-surface-variant text-sm">
                  {activeTab} settings coming soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
