import { TiHomeOutline } from "react-icons/ti";
import { OfficeCategorie } from "./Userrole";
import { BiCategoryAlt } from "react-icons/bi";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { TbBrandOffice } from "react-icons/tb";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
const RoutesController = () => {
  const UserRoleRoute = [
    {
      icon: <BiCategoryAlt className="text-2xl" />,
      name: "All Office Categorie",
      path: `/fast_office_product`,
    },

    {
      icon: <PiBuildingOfficeLight className="text-2xl" />,
      name: "Basic Office",
      path: `/fast_office_product/basic_office?v=${OfficeCategorie.basic_categorie}`,
    },
    {
      icon: <TbBrandOffice className="text-2xl" />,
      name: "Minimalist Office",
      path: `/fast_office_product/minimalist_office?v=${OfficeCategorie.minimalist_categorie}`,
    },
    {
      icon: <HiOutlineBuildingOffice className="text-2xl" />,
      name: "Luxury Office",
      path: `/fast_office_product/luxary_office?v=${OfficeCategorie.luxury_categorie}`,
    },
    {
      categorie: [
        {
          categorie_name: "Premium Office ",
          categorie_routes: [
            {
              icon: <TiHomeOutline className="text-2xl" />,
              name: "Bootstrapped",
              path: `/fast_office_product/bootstrapped_office?v=${OfficeCategorie.bootstrapped_categorie}`,
            },
            {
              icon: <TiHomeOutline className="text-2xl" />,
              name: "DIY Workspace",
              path: `/fast_office_product/diy_workspace?v=${OfficeCategorie.diy_categorie}`,
            },
            {
              icon: <TiHomeOutline className="text-2xl" />,
              name: "Bare Bones ",
              path: `/fast_office_product/bare_bones_office?v=${OfficeCategorie.barebones_categorie}`,
            },
            {
              icon: <TiHomeOutline className="text-2xl" />,
              name: "Frugal ",
              path: `/fast_office_product/frugal_office?v=${OfficeCategorie.frugal_categorie}`,
            },
          ],
        },
        {
          categorie_name: "Features",

          categorie_routes: [
            {
              icon: "",
              name: "My Payment Laser",
              path: "/fast_office_product/my_payment_laser",
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
      path: "/fast_office_product/user_dashboard",
    },
  ];

  const AdminRoleRoute = [
    {
      icon: <TiHomeOutline className="text-2xl" />,
      name: "Dashboard",
      path: "/fast_office_product/admin_dashboard",
    },
    {
      icon: <BiCategoryAlt className="text-2xl" />,
      name: "All Office Categorie",
      path: `/fast_office_product`,
    },

    {
      icon: <PiBuildingOfficeLight className="text-2xl" />,
      name: "Basic Office",
      path: `/fast_office_product/basic_office?v=${OfficeCategorie.basic_categorie}`,
    },
    {
      icon: <TbBrandOffice className="text-2xl" />,
      name: "Minimalist Office",
      path: `/fast_office_product/minimalist_office?v=${OfficeCategorie.minimalist_categorie}`,
    },
    {
      icon: <HiOutlineBuildingOffice className="text-2xl" />,
      name: "Luxury Office",
      path: `/fast_office_product/luxary_office?v=${OfficeCategorie.luxury_categorie}`,
    },
    {
      categorie: [
        {
          categorie_name: "Premium Office ",
          categorie_routes: [
            {
              icon: <TiHomeOutline className="text-2xl" />,
              name: "Bootstrapped",
              path: `/fast_office_product/bootstrapped_office?v=${OfficeCategorie.bootstrapped_categorie}`,
            },
            {
              icon: <TiHomeOutline className="text-2xl" />,
              name: "DIY Workspace",
              path: `/fast_office_product/diy_workspace?v=${OfficeCategorie.diy_categorie}`,
            },
            {
              icon: <TiHomeOutline className="text-2xl" />,
              name: "Bare Bones ",
              path: `/fast_office_product/bare_bones_office?v=${OfficeCategorie.barebones_categorie}`,
            },
            {
              icon: <TiHomeOutline className="text-2xl" />,
              name: "Frugal ",
              path: `/fast_office_product/frugal_office?v=${OfficeCategorie.frugal_categorie}`,
            },
          ],
        },
        {
          categorie_name: "Features",

          categorie_routes: [
            {
              icon:'',
              name:"Users",
              path:"/fast_office_product/all_users"
            },
            {
              icon: <BiCategoryAlt className="text-2xl" />,
              name: "Add Categorie",
              path: `/fast_office_product/add_office_categorie`,
            },
            {
              icon:"",
              name:"Buy Product",
              path:"/fast_office_product/selling_specific_categorie"

            },
            {
              icon: "",
              name: "Payment Details",
              path: "/fast_office_product/all_payment_list",
            },
            {
              icon: "",
              name: "Metting Schedule",
              path: "/schedule",
            },
            {
              icon: <BiCategoryAlt className="text-2xl" />,
              name: "Add Categorie",
              path: `/fast_office_product`,
            },
          ],
        },
      ],
    },
  ];
  return {
    UserRoleRoute,
    AdminRoleRoute,
  };
};

export default RoutesController;
