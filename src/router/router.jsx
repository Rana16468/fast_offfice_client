import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import OfficeSection from "../components/pages/OfficeSection/OfficeSection";
import Dashboard from "../components/OfficeProductDashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Profile from "../components/pages/Profile/Profile";
import ChangePassword from "../components/pages/ChangePassword/Chnagepassword";
import DeleteAccount from "../components/pages/DeleteAccount/DeleteAccount";
import Contact from "../components/pages/Contact/Contact";
import HomeProduct from "../components/OfficeProductDashboard/UserDashboard/HomeProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/register", element: <Register /> },
      {
        path: "/office_section",
        element: (
          <PrivateRoute>
            <OfficeSection />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/chnage_password",
        element: (
          <PrivateRoute>
            <ChangePassword />
          </PrivateRoute>
        ),
      },
      {
        path: "/delete_account",
        element: (
          <PrivateRoute>
            <DeleteAccount />
          </PrivateRoute>
        ),
      },
      {
        path:"/contact",
        element: <PrivateRoute>
        <Contact/>
      </PrivateRoute>
      }
    ],
  },

  {
    path: "/fast_office_product",
    element: <PrivateRoute>
      <Dashboard />
    </PrivateRoute>,
    children: [
      {
        path:"/fast_office_product",
        element:<PrivateRoute>
         <HomeProduct/>
        </PrivateRoute>
      }

    ],
  },
]);

export default router;
