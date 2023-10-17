import './App.css';
import './common/css/Common.css';

import Dashboard from './pages/organizer/Dashboard';
import EventType from './pages/organizer/Event/Type';
import EventDetails from './pages/organizer/Event/EventDetails';
import EventPhotos from './pages/organizer/Event/Photo';
import EventBasicInfo from './pages/organizer/Event/BasicInfo';

import OrganizerLayout from './layout/organizer/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {organizer_url} from './common/Helpers';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<OrganizerLayout> <Dashboard title={'dashboard'} /> </OrganizerLayout>} />
        <Route path={organizer_url+'event/dashboard'} element={<OrganizerLayout> <Dashboard title={'dashboard'} /> </OrganizerLayout>} />
        <Route path={organizer_url+'event/add-event'} element={<OrganizerLayout> <EventType title={'Select event type'} /> </OrganizerLayout>} />
        <Route path={organizer_url+'event/add-event-basic-info'} element={<OrganizerLayout> <EventBasicInfo title={'Basic Info'} /> </OrganizerLayout>} />
        <Route path={organizer_url+'event/add-event-details'} element={<OrganizerLayout> <EventDetails title={'Event Details'} /> </OrganizerLayout>} />        
        <Route path={organizer_url+'event/add-event-photos'} element={<OrganizerLayout> <EventPhotos title={'Photos'} /> </OrganizerLayout>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
