import { doctorDashboardRoutes, adminDashboardRoutes } from 'routes';

const useRouteName = () => {
  doctorDashboardRoutes.forEach((route) =>
    window.location.href.indexOf(route.layout + route.path) !== -1 &&
    doctorDashboardRoutes.rtlActive
      ? route.rtlName
      : route.name,
  );
  adminDashboardRoutes.forEach((route) =>
    window.location.href.indexOf(route.layout + route.path) !== -1 &&
    doctorDashboardRoutes.rtlActive
      ? route.rtlName
      : route.name,
  );

  return '';
};

export default useRouteName;
