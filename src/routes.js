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
import Person from '@material-ui/icons/Person';

// core components/views for Admin layout
import UserProfile from 'views/UserProfile/UserProfile';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ArchiveIcon from '@material-ui/icons/Archive';

import ListePatient from 'views/AdminList/ListePatient';
import ArchivedPatients from 'views/AdminList/ArchivedPatients';
import PatientRequests from 'views/AdminList/PatientRequests';

const dashboardRoutes = [
  {
    path: '/ListePatient',
    name: 'Liste des patients',
    rtlName: 'قائمة الجدول',
    icon: GroupIcon,
    component: ListePatient,
    layout: '/admin',
  },
  {
    path: '/archived_patients',
    name: 'Les Patients Archivés',
    rtlName: 'قائمة الجدول',
    icon: ArchiveIcon,
    component: ArchivedPatients,
    layout: '/admin',
  },
  {
    path: '/requests',
    name: "Demande d'acceptation",
    rtlName: 'قائمة الجدول',
    icon: GroupAddIcon,
    component: PatientRequests,
    layout: '/admin',
  },
  {
    path: '/user',
    name: "Profile d'utilisateur",
    rtlName: 'ملف تعريفي للمستخدم',
    icon: Person,
    component: UserProfile,
    layout: '/admin',
  },
];

export default dashboardRoutes;
