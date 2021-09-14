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
import AccessibilityIcon from '@material-ui/icons/Accessibility';

// core components/views for Admin layout
import UserProfile from 'views/UserProfile/UserProfile';
import ListePatient from 'views/AdminList/ListePatient';
import ArchivedPatients from 'views/AdminList/ArchivedPatients';
import PatientRequests from 'views/AdminList/PatientRequests';

// core components/views for Doctor layout
import CreateMedicalRecord from 'views/DoctorList/CreateMedicalRecord';
import CreateMedicalExam from 'views/DoctorList/CreateMedicalExam';
import Statistics from 'views/DoctorList/Statistics';
import Appointment from 'views/DoctorList/Appointment';
import DisplayMedicalRecord from 'views/DoctorList/DisplayMedRec';
import DisplayMedExam from 'views/DoctorList/DisplayMedExam';
// import DisplayPatientMedExam from 'views/DoctorList/DisplayPatientMedExm';

// core components/views for Patient layout
import DisplayPatientMedicalRecord from 'views/PatientList/DisplayMedRec';
import PatientAppointment from 'views/PatientList/Appointment';

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
    path: '/DisplayMedRec',
    name: 'Display medical record',
    rtlName: 'قائمة الجدول',
    icon: RemoveRedEyeIcon,
    component: DisplayMedicalRecord,
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
    path: '/DisplayMedExam',
    name: 'Display medical exam',
    rtlName: 'قائمة الجدول',
    icon: RemoveRedEyeIcon,
    component: DisplayMedExam,
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
  // {
  //   path: '/DisplayPatientMedRec',
  //   name: 'Patient medical record',
  //   rtlName: 'قائمة الجدول',
  //   icon: AccessibilityIcon,
  //   component: DisplayPatientMedicalRecord,
  //   layout: '/doctor',
  // },
  // {
  //   path: '/DisplayPatientMedExm',
  //   name: 'Patient medical exam',
  //   rtlName: 'قائمة الجدول',
  //   icon: AccessibilityIcon,
  //   component: DisplayPatientMedExam,
  //   layout: '/doctor',
  // },
];

export const patientDashboardRoutes = [
  {
    path: '/DisplayPatientMedRec',
    name: 'Patient Medical Record',
    rtlName: 'قائمة الجدول',
    icon: AccessibilityIcon,
    component: DisplayPatientMedicalRecord,
    layout: '/patient',
  },
  {
    path: '/Appointments',
    name: 'Appointments',
    rtlName: 'قائمة الجدول',
    icon: AccessTimeIcon,
    component: PatientAppointment,
    layout: '/patient',
  },
];
