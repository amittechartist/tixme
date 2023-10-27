import './App.css';
import './common/css/Common.css';
// Organizer Admin
import Dashboard from './pages/organizer/Dashboard';
import EventType from './pages/organizer/Event/Type';
import EventDetails from './pages/organizer/Event/EventDetails';
import EventPhotos from './pages/organizer/Event/Photo';
import EventBasicInfo from './pages/organizer/Event/BasicInfo';
import OrganizerLayout from './layout/organizer/Layout'
// website
import WebsiteLayout from './layout/website/Layout'
import Home from './pages/website/Home';
import Event from './pages/website/Event';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {app_url, organizer_url} from './common/Helpers';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        {/* website */}
        <Route path={app_url} element={<WebsiteLayout> <Home title={'Tixme'} /> </WebsiteLayout>} />
        <Route path={app_url+'event'} element={<WebsiteLayout> <Event title={'Tixme'} /> </WebsiteLayout>} />
        {/* Organizer Admin */}
        <Route path={organizer_url+'event/dashboard'} element={<OrganizerLayout> <Dashboard title={'dashboard'} /> </OrganizerLayout>} />
        <Route path={organizer_url+'event/add-event'} element={<OrganizerLayout> <EventType title={'Select event type'} /> </OrganizerLayout>} />
        <Route path={organizer_url+'event/add-event-basic-info'} element={<OrganizerLayout> <EventBasicInfo title={'Basic Info'} /> </OrganizerLayout>} />
        <Route path={organizer_url+'event/add-event-details'} element={<OrganizerLayout> <EventDetails title={'Event Details'} /> </OrganizerLayout>} />        
        <Route path={organizer_url+'event/add-event-photos'} element={<OrganizerLayout> <EventPhotos title={'Photos'} /> </OrganizerLayout>} />        
        {/* Admin */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
