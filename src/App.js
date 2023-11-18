import './App.css';
import './common/css/Common.css';
// Admin
import AdminDashboard from './pages/admin/Dashboard';
import AddCategory from './pages/admin/category/AddCategory';
import AllCategory from './pages/admin/category/AllCategory';
import AllCustomers from './pages/admin/customers/AllCustomers';
import AddEventtype from './pages/admin/eventtype/Add';
import AllEventtype from './pages/admin/eventtype/List';
import ActiveOrganizer from './pages/admin/organizer/ActiveOrganizer';
import PendingOrganizer from './pages/admin/organizer/PendingOrganizer';
import Supportlist from './pages/admin/support/Supportlist';
import AdminLayout from './layout/admin/Layout'
// Organizer Admin
import Dashboard from './pages/organizer/Dashboard';
import EventType from './pages/organizer/Event/EventCreateForm';
import OrganizerLayout from './layout/organizer/Layout'
// website auth
import Signup from './pages/website/auth/Signup';
import OrganizerLogin from './pages/website/auth/OrganizerLogin';
import AdminLogin from './pages/website/auth/AdminLogin';
// website
import WebsiteLayout from './layout/website/Layout'
import Home from './pages/website/Home';
import Event from './pages/website/Event';
import Aboutus from './pages/website/aboutus';
import Terms from './pages/website/Terms';
import Privacy from './pages/website/Privacy';
import Faq from './pages/website/Faq';
import Contact from './pages/website/Contact';
import Organizers from './pages/website/Organizers';
import OrganizerDetails from './pages/website/OrganizerDetails';
import Raiseticket from './pages/website/Raiseticket';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { app_url, organizer_url, admin_url } from './common/Helpers';
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          {/* auth */}
          <Route path={app_url + 'auth/customer/signup'} element={<WebsiteLayout> <Signup title={'Tixme'} /> </WebsiteLayout>} />
          <Route path={app_url + 'auth/organizer/login'} element={<WebsiteLayout> <OrganizerLogin title={'Tixme'} /> </WebsiteLayout>} />
          <Route path={app_url + 'auth/admin/login'} element={<WebsiteLayout> <AdminLogin title={'Tixme'} /> </WebsiteLayout>} />
          {/* website */}
          <Route path={app_url} element={<WebsiteLayout> <Home title={'Tixme'} /> </WebsiteLayout>} />
          <Route path={app_url + 'event'} element={<WebsiteLayout> <Event title={'Tixme'} /> </WebsiteLayout>} />
          <Route path={app_url + 'aboutus'} element={<WebsiteLayout> <Aboutus title={'About Us'} /> </WebsiteLayout>} />
          <Route path={app_url + 'terms-and-conditions'} element={<WebsiteLayout> <Terms title={'Terms & conditions'} /> </WebsiteLayout>} />
          <Route path={app_url + 'privacy-policy'} element={<WebsiteLayout> <Privacy title={'Privacy policy'} /> </WebsiteLayout>} />
          <Route path={app_url + 'faq'} element={<WebsiteLayout> <Faq title={'FAQ'} /> </WebsiteLayout>} />
          <Route path={app_url + 'contact'} element={<WebsiteLayout> <Contact title={'Contact Us'} /> </WebsiteLayout>} />
          <Route path={app_url + 'organizers'} element={<WebsiteLayout> <Organizers title={'Organizers'} /> </WebsiteLayout>} />
          <Route path={app_url + 'raise-ticket'} element={<WebsiteLayout> <Raiseticket title={'Raise Ticket'} /> </WebsiteLayout>} />
          <Route path={`${app_url}organizer-profile/:id/:name`} element={<WebsiteLayout> <OrganizerDetails title={'Organizer Profile'} /> </WebsiteLayout>} />
          {/* Organizer Admin */}
          <Route path={organizer_url + 'dashboard'} element={<OrganizerLayout> <Dashboard title={'dashboard'} /> </OrganizerLayout>} />
          <Route path={organizer_url + 'event/add-event'} element={<OrganizerLayout> <EventType title={'Create new event'} /> </OrganizerLayout>} />
          {/* Admin */}
          <Route path={admin_url + 'dashboard'} element={<AdminLayout> <AdminDashboard title={'dashboard'} /> </AdminLayout>} />
          <Route path={admin_url + 'add-category'} element={<AdminLayout> <AddCategory title={'Add Category'} /> </AdminLayout>} />
          <Route path={admin_url + 'all-category'} element={<AdminLayout> <AllCategory title={'All Category'} /> </AdminLayout>} />
          <Route path={admin_url + 'add-event-type'} element={<AdminLayout> <AddEventtype title={'Add Event Type'} /> </AdminLayout>} />
          <Route path={admin_url + 'all-event-type'} element={<AdminLayout> <AllEventtype title={'All Event Type'} /> </AdminLayout>} />
          <Route path={admin_url + 'all-customers'} element={<AdminLayout> <AllCustomers title={'All Customers'} /> </AdminLayout>} />
          <Route path={admin_url + 'active-organizer'} element={<AdminLayout> <ActiveOrganizer title={'Active Organizer'} /> </AdminLayout>} />
          <Route path={admin_url + 'pending-organizer'} element={<AdminLayout> <PendingOrganizer title={'Pending Organizer'} /> </AdminLayout>} />
          <Route path={admin_url + 'support-tickets'} element={<AdminLayout> <Supportlist title={'Support Tickets'} /> </AdminLayout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
