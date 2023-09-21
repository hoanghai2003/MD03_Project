import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const UserLocal = JSON.parse(localStorage.getItem("user"));
  console.log(UserLocal.data);
  if (UserLocal) {
    if (UserLocal.data.users_roles === 0) {
      return <Outlet />;
    } else if (UserLocal.data.users_roles === null) {
      return <Navigate to="/login" />;
    }
  }

  return <Navigate to="/login" />;
};

export default PrivateRouter;
