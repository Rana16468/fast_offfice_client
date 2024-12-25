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
import ProductDetailsParents from "../components/OfficeProductDashboard/UserDashboard/ProductDetailsParents";
import SpecificCategorie from "../components/OfficeProductDashboard/UserDashboard/SpecificCategorie/SpecificCategorie";
import AddOfficeCategorie from "../components/OfficeProductDashboard/AdminDashboard/AddOfficeCategorie/AddOfficeCategorie";
import AddProductDetails from "../components/OfficeProductDashboard/AdminDashboard/AddProductDetails/AddProductDetails";
import OfficeGallery from "../components/OfficeProductDashboard/UserDashboard/SpecificCategorie/Officegallery/OfficeGallery";

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
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/fast_office_product",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/fast_office_product",
        element: (
          <PrivateRoute>
            <HomeProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/product_details/:categorieId",
        element: (
          <PrivateRoute>
            <ProductDetailsParents />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/basic_office",
        element: (
          <PrivateRoute>
            <SpecificCategorie />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/minimalist_office",
        element: (
          <PrivateRoute>
            <SpecificCategorie />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/luxary_office",
        element: (
          <PrivateRoute>
            <SpecificCategorie />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/bootstrapped_office",
        element: (
          <PrivateRoute>
            <SpecificCategorie />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/diy_workspace",
        element: (
          <PrivateRoute>
            <SpecificCategorie />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/bare_bones_office",
        element: (
          <PrivateRoute>
            <SpecificCategorie />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/frugal_office",
        element: (
          <PrivateRoute>
            <SpecificCategorie />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/add_office_categorie",
        element: (
          <PrivateRoute>
            <AddOfficeCategorie />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/add_product_details",
        element: (
          <PrivateRoute>
            <AddProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path:"/fast_office_product/office_gallery/:productdetailsId",
        element:<PrivateRoute>
          <OfficeGallery/>
        </PrivateRoute>
      }
      
    ],
  },
]);

export default router;
