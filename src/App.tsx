/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import SchedulePage from './pages/SchedulePage';
import RecordingsPage from './pages/RecordingsPage';
import SettingsPage from './pages/SettingsPage';
import LobbyPage from './pages/LobbyPage';
import MeetingPage from './pages/MeetingPage';
import SolutionsPage from './pages/SolutionsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" theme="dark" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/recordings" element={<RecordingsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/lobby" element={<LobbyPage />} />
        <Route path="/meeting" element={<MeetingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
