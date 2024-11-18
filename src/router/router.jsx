import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:"/",element:<Home/>,

      },
      {
        path:"/login",element:<Login/>
      },
      {path:"/register",element:<Register/>}
    ]
    
  },
]);

export default router;
