// @material-ui/icons
import Person from '@material-ui/icons/Person';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import PanToolIcon from '@material-ui/icons/PanTool';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ArchiveIcon from '@material-ui/icons/Archive';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

// core components/views for Admin layout
import UserProfile from 'views/UserProfile/UserProfile';
import ListePatient from 'views/AdminList/ListePatient';
import ArchivedPatients from 'views/AdminList/ArchivedPatients';
import PatientRequests from 'views/AdminList/PatientRequests';

// core components/views for Doctor layout
import CreateMedicalRecord from 'views/DoctorList/CreateMedicalRecord';
import CreateMedicalExam from 'views/DoctorList/CreateMedicalExam';
import FetchMedicalRecord from 'views/DoctorList/FetchMedicalRecord';
import Statistics from 'views/DoctorList/Statistics';
import Appointment from 'views/DoctorList/Appointment';

export const adminDashboardRoutes = [
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
export const doctorDashboardRoutes = [
  {
    path: '/MedicalRecord',
    name: 'Create medical record',
    rtlName: 'قائمة الجدول',
    icon: CreateNewFolderIcon,
    component: CreateMedicalRecord,
    layout: '/doctor',
  },
  {
    path: '/FetchMedicalRecord',
    name: 'Display medical record',
    rtlName: 'قائمة الجدول',
    icon: RemoveRedEyeIcon,
    component: FetchMedicalRecord,
    layout: '/doctor',
  },

  {
    path: '/CreateMedicalExam',
    name: 'Create medical exam',
    rtlName: 'قائمة الجدول',
    icon: PanToolIcon,
    component: CreateMedicalExam,
    layout: '/doctor',
  },
  {
    path: '/Appointments',
    name: 'Appointments',
    rtlName: 'قائمة الجدول',
    icon: AccessTimeIcon,
    component: Appointment,
    layout: '/doctor',
  },
  {
    path: '/Statistics',
    name: 'Statistics',
    rtlName: 'قائمة الجدول',
    icon: EqualizerIcon,
    component: Statistics,
    layout: '/doctor',
  },
];
