import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import PricingPage from './pages/PricingPage';
import Contact from './pages/Contact';
import ActiveMembers from './pages/ActiveMembers';
import LoginPage from './pages/LoginPage';
import MyProfile from './pages/MyProfile';
import Interests from './pages/Interests';
import Shortlist from './pages/Shortlist';
import Messaging from './pages/Messaging';
import Ignored from './pages/Ignored';

// Context
import { MemberProvider } from './context/MemberContext';

function App() {
  return (
    <MemberProvider>
      <BrowserRouter>
        <div className="font-sans text-gray-900 overflow-x-hidden bg-canvas min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/active-members" element={<ActiveMembers />} />
              <Route path="/login" element={<LoginPage />} />

              {/* Member Dashboard Routes */}
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/interests" element={<Interests />} />
              <Route path="/shortlist" element={<Shortlist />} />
              <Route path="/messaging" element={<Messaging />} />
              <Route path="/ignored" element={<Ignored />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </MemberProvider>
  );
}

export default App;
