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
import AllUsers from "../components/OfficeProductDashboard/AdminDashboard/Users/AllUsers";
import PaymentStatus from "../components/OfficeProductDashboard/UserDashboard/SpecificCategorie/Payment/PaymentStatus";
import SellingSpecificCategorie from "../components/OfficeProductDashboard/AdminDashboard/SellingOfficeProduct/SellingSpecificCategorie";
import SellingProductDetailsParents from "../components/OfficeProductDashboard/AdminDashboard/SellingOfficeProduct/Sellling_Product_Details/SellingProductDetailsParents";
import PaymentDisplay from "../components/OfficeProductDashboard/AdminDashboard/Payment/PaymentDisplay";
import SpecificProductCategorie from "../components/OfficeProductDashboard/AdminDashboard/Payment/SpecificProductCategorie";
import PaymentLaser from "../components/OfficeProductDashboard/UserDashboard/PaymentLaser/PaymentLaser";
import UserDashboard from "../components/OfficeProductDashboard/UserDashboard/UserDashboard";
import AdminDashboard from "../components/OfficeProductDashboard/AdminDashboard/AdminDashboard";
import MeetingSchedule from "../components/OfficeProductDashboard/UserDashboard/MeetingSchedule/MeetingSchedule";
import AttenedVideoCall from "../components/Room/AttenedVideoCall";
import EmpPaymentLaser from "../components/OfficeProductDashboard/EmployeeDashboard/EmpPaymentLaser";
import ComplainSection from "../components/OfficeProductDashboard/EmployeeDashboard/ComplainSection";
import Company from "../components/pages/CompanyInfo/Company";
import HowWeWork from "../components/pages/CompanyInfo/HowWeWork";
import RunningCompany from "../components/pages/CompanyInfo/RunningCompany";
import Terms_conditions from "../components/pages/CompanyInfo/Terms_conditions";
import TheTeam from "../components/pages/CompanyInfo/TheTeam";

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
        path:"/company",
        element:<Company/>

      },
      {
        path:"/work",
        element:<HowWeWork/>

      },
      {
        path:"/licence",
        element:<RunningCompany/>

      },
      {
        path:"/terms_and_condition",
        element:<Terms_conditions/>

      },
      {
        path:"/team",
        element:<TheTeam/>

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
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <PaymentStatus />
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
        path: "/fast_office_product/office_gallery/:productdetailsId",
        element: (
          <PrivateRoute>
            <OfficeGallery />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/all_users",
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/selling_specific_categorie",
        element: (
          <PrivateRoute>
            <SellingSpecificCategorie />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/selling_product_details_parents/:categorieId",
        element: (
          <PrivateRoute>
            <SellingProductDetailsParents />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/all_payment_list",
        element: (
          <PrivateRoute>
            <PaymentDisplay />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/specific_office_categorie/:categorieId",
        element: (
          <PrivateRoute>
            <SpecificProductCategorie />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/my_payment_laser",
        element: (
          <PrivateRoute>
            <PaymentLaser />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/user_dashboard",
        element: (
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/admin_dashboard",
        element: (
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/schedule",
        element: (
          <PrivateRoute>
            <MeetingSchedule />
          </PrivateRoute>
        ),
      },
      {
        path: "/fast_office_product/attend_videocall",
        element: (
          <PrivateRoute>
            <AttenedVideoCall />
          </PrivateRoute>
        ),
      },
      {
        path:"/fast_office_product/employee_payment_laser",
        element:<PrivateRoute>
          <EmpPaymentLaser/>
        </PrivateRoute>
      },
      {
        path:"/fast_office_product/complain_section",
        element:<PrivateRoute>
          <ComplainSection/>
        </PrivateRoute>
      }
    ],
  },
]);

export default router;
