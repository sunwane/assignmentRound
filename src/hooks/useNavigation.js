import { useLocation } from 'react-router-dom';

export const useNavigation = () => {
  const location = useLocation();

  const isActive = (path, isExact = false) => {
    if (isExact) {
      return location.pathname === path;
    }
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const getLinkClass = (path, isExact = false) => {
    const baseClass = "pb-1 transition-all";
    const activeClass = "font-bold text-blue-600 border-b-2 border-blue-600";
    const inactiveClass = "text-gray-700 hover:text-gray-900";
    
    return isActive(path, isExact) ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
  };

  return { isActive, getLinkClass, currentPath: location.pathname };
};
