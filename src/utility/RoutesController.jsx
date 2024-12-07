import { TiHomeOutline } from "react-icons/ti";

const RoutesController = () => {

  const UserRoleRoute = [
    
    {
      icon: <TiHomeOutline className="text-2xl" />,
      name: "Basic office",
      path: "/basic_office",
    },
    {
      icon: <TiHomeOutline className="text-2xl" />,
      name: "Minimalist office",
      path: "/minimalist_office",
    },
    {
      icon: <TiHomeOutline className="text-2xl" />,
      name: "Luxury office",
      path: "/luxary_office",
    },
    {
      categorie: [
        {
          categorie_name: "Office Categories",
          categorie_routes: [
            {
              icon: <TiHomeOutline className="text-2xl" />,
              name: "Bootstrapped",
              path: "/bootstrapped_office",
            },
            {
              icon: <TiHomeOutline className="text-2xl" />,
              name: "DIY Workspace",
              path: "/diy_workspace",
            },
            {
              icon: <TiHomeOutline className="text-2xl" />,
              name: "Bare Bones ",
              path: "/bare_bones_office",
            },
            {
              icon: <TiHomeOutline className="text-2xl" />,
              name: "Frugal ",
              path: "/frugal_office",
            },
          ],
        },
        {
          categorie_name: "Features",

          categorie_routes: [
            {
              icon: "",
              name: "My Collection",
              path: "/my_collection",
            },
            {
              icon: "",
              name: "Payment Details",
              path: "/payment_details",
            },
            {
              icon: "",
              name: "Metting Schedule",
              path: "/schedule",
            },
          ],
        },
      ],
    },
    {
      icon: <TiHomeOutline className="text-2xl" />,
      name: "Dashboard",
      path: "/",
    },
    
   
    
  ];
  return {
    UserRoleRoute,
  };
};

export default RoutesController;
