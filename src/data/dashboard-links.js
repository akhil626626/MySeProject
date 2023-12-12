
import { ACCOUNT_TYPE } from "../utils/Constants";

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 5,
    name: "My Buyings",
    path: "/dashboard/buyings",
    type: ACCOUNT_TYPE.Buyer,
    icon: "VscMortarBoard",
  },
  {
    id: 6,
    name: "Cart",
    path: "/dashboard/cart",
    type: ACCOUNT_TYPE.Buyer,
    icon: "FiShoppingCart",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.Buyer,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Listings",
    path: "/dashboard/my-listings",
    type: ACCOUNT_TYPE.Buyer,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "List Item",
    path: "/dashboard/list-item",
    type: ACCOUNT_TYPE.Buyer,
    icon: "VscAdd",
  },
  {
    id: 7,
    name: "Listing Approvals",
    path: "/dashboard/admin/instructorApprovals",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "FcApproval",
  },
  {
    id: 8,
    name: "Category Approvals",
    path: "/dashboard/admin/categoryApprovals",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "FcApproval",
  },
  {
    id: 9,
    name: "Add Category",
    path: "/dashboard/admin/addCategory",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAdd"
  },
  {
    id: 10,
    name: "Request Category",
    path: "/dashboard/request-category",
    type: ACCOUNT_TYPE.Buyer,
    icon: "VscAdd",
  },
  
];
