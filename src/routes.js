/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import GroupIcon from '@material-ui/icons/Group';
import MedicalRecord from "views/TableList/MedicalRecord";
import MedicalExam from "views/TableList/MedicalExam";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Patients from "views/TableList/patients";
import testSelect from "views/TableList/testSelect";
import FetchMedicalRecord from "views/TableList/FetchMedicalRecord";
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import PanToolIcon from '@material-ui/icons/PanTool';
import patientInfo from "components/patientInfo";
import CreateMedicalRecord from "views/TableList/CreateMedicalRecord";
import CreateMedicalExam from "views/TableList/CreateMedicalExam";
const dashboardRoutes = [
  {
    path: "/MedicalRecord",
    name: "Create medical record",
    rtlName: "قائمة الجدول",
    icon:  CreateNewFolderIcon,
    component: CreateMedicalRecord,
    layout: "/admin",
  },
  {
    path: "/FetchMedicalRecord",
    name: "Display medical record",
    rtlName: "قائمة الجدول",
    icon:  RemoveRedEyeIcon,
    component: FetchMedicalRecord,
    layout: "/admin",
  },
  
  {
    path: "/CreateMedicalExam",
    name: "Create medical exam",
    rtlName: "قائمة الجدول",
    icon: PanToolIcon,
    component: CreateMedicalExam,
    layout: "/admin",
  },
  {
    path: "/MecicalExam",
    name: "Medical exam",
    rtlName: "قائمة الجدول",
    icon: PanToolIcon,
    component: MedicalExam,
    layout: "/admin",
  },
  
  // {
  //   path: "/table",
  //   name: "Appointments",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user",
  //   name: "My profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/patients",
  //   name: "test fetching patients",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: Person,
  //   component: Patients,
  //   layout: "/admin",
  // },
  // {
  //   path: "/testSelect",
  //   name: "test",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: Person,
  //   component: testSelect,
  //   layout: "/admin",
  // },
  
  
  /*
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  */
];

export default dashboardRoutes;
