import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";

const PageLoader = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
};

export default PageLoader;