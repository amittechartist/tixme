import './App.css';
import './common/css/Common.css';
// Admin
import AdminDashboard from './pages/admin/Dashboard';
import AddCategory from './pages/admin/category/AddCategory';
import AllCategory from './pages/admin/category/AllCategory';
import AllCustomers from './pages/admin/customers/AllCustomers';
import ActiveOrganizer from './pages/admin/organizer/ActiveOrganizer';
import PendingOrganizer from './pages/admin/organizer/PendingOrganizer';
import AdminLayout from './layout/admin/Layout'
// Organizer Admin
import Dashboard from './pages/organizer/Dashboard';
import EventType from './pages/organizer/Event/Type';
import EventDetails from './pages/organizer/Event/EventDetails';
import EventPhotos from './pages/organizer/Event/Photo';
import EventBasicInfo from './pages/organizer/Event/BasicInfo';
import OrganizerLayout from './layout/organizer/Layout'
// website auth
import Signup from './pages/website/auth/Signup';
import OrganizerSignup from './pages/website/auth/OrganizerSignup';
import AdminLogin from './pages/website/auth/AdminLogin';
// website
import WebsiteLayout from './layout/website/Layout'
import Home from './pages/website/Home';
import Event from './pages/website/Event';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {app_url, organizer_url,admin_url} from './common/Helpers';
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <>
      <Toaster position="top-center"/>
      <BrowserRouter>
      <Routes>
        {/* auth */}
        <Route path={app_url+'auth/customer/signup'} element={<WebsiteLayout> <Signup title={'Tixme'} /> </WebsiteLayout>} />
        <Route path={app_url+'auth/organizer/login'} element={<WebsiteLayout> <OrganizerSignup title={'Tixme'} /> </WebsiteLayout>} />
        <Route path={app_url+'auth/admin/login'} element={<WebsiteLayout> <AdminLogin title={'Tixme'} /> </WebsiteLayout>} />
        {/* website */}
        <Route path={app_url} element={<WebsiteLayout> <Home title={'Tixme'} /> </WebsiteLayout>} />
        <Route path={app_url+'event'} element={<WebsiteLayout> <Event title={'Tixme'} /> </WebsiteLayout>} />
        {/* Organizer Admin */}
        <Route path={organizer_url+'dashboard'} element={<OrganizerLayout> <Dashboard title={'dashboard'} /> </OrganizerLayout>} />
        <Route path={organizer_url+'event/add-event'} element={<OrganizerLayout> <EventType title={'Create new event'} /> </OrganizerLayout>} />
        <Route path={organizer_url+'event/add-event-basic-info'} element={<OrganizerLayout> <EventBasicInfo title={'Basic Info'} /> </OrganizerLayout>} />
        <Route path={organizer_url+'event/add-event-details'} element={<OrganizerLayout> <EventDetails title={'Event Details'} /> </OrganizerLayout>} />        
        <Route path={organizer_url+'event/add-event-photos'} element={<OrganizerLayout> <EventPhotos title={'Photos'} /> </OrganizerLayout>} />        
        {/* Admin */}
        <Route path={admin_url+'dashboard'} element={<AdminLayout> <AdminDashboard title={'dashboard'} /> </AdminLayout>} />
        <Route path={admin_url+'add-category'} element={<AdminLayout> <AddCategory title={'Add Category'} /> </AdminLayout>} />
        <Route path={admin_url+'all-category'} element={<AdminLayout> <AllCategory title={'All Category'} /> </AdminLayout>} />
        <Route path={admin_url+'all-customers'} element={<AdminLayout> <AllCustomers title={'All Customers'} /> </AdminLayout>} />
        <Route path={admin_url+'active-organizer'} element={<AdminLayout> <ActiveOrganizer title={'Active Organizer'} /> </AdminLayout>} />
        <Route path={admin_url+'pending-organizer'} element={<AdminLayout> <PendingOrganizer title={'Pending Organizer'} /> </AdminLayout>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
