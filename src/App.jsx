import LandingPage from "./layouts/LandingPage/LandingPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import CoursesPage from "./pages/CoursesPage/CoursesPage.jsx";
import InstructorsPage from "./pages/InstructorsPage/InstructorsPage.jsx";
import BlogPage from "./pages/BlogPage/BlogPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import Authentication from "./auth/Authentication/Authentication.jsx";
import Signup from "./auth/Authentication/Signup.jsx";
import Login from "./auth/Authentication/Login.jsx";
import DashboardLayout from "./pages/Dashboard/DashboardLayout.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Certificate from "./pages/Dashboard/Certificate.jsx";
import FAQS from "./pages/Dashboard/FAQS.jsx";
import AccountSettings from "./pages/Dashboard/AccountSettings.jsx";
import HelpCenter from "./pages/Dashboard/HelpCenter.jsx";
import Community from "./pages/Dashboard/Community.jsx";
import Logout from "./pages/Dashboard/Logout.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";



const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage/>,
      },
      {
        path: 'courses',
        element: <CoursesPage/>,
      },
      {
        path: 'instructors',
        element: <InstructorsPage/>,
      },
      {
        path: 'blog',
        element: <BlogPage/>,
      },
      {
        path: 'contact',
        element: <ContactPage/>,
      },
    ],
  },
  {
    path: '/auth',
    element: <Authentication />,
    children: [
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'certificate',
        element: <Certificate />, 
      },
      {
        path: 'faqs',
        element: <FAQS />,
      },
      {
        path: 'account-settings',
        element: <AccountSettings />,
      },
      {
        path: 'help-center',
        element: <HelpCenter />,
      },
      {
        path: 'community',
        element: <Community />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
    ],
  },
  {
    path: '*', 
    element: <NotFound />, 
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
