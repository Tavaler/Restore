import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
<<<<<<< HEAD
 
//โค้ดที่นำมาเว็ปปรับแล้ว
export function PrivateRoute() {
  const { user } = useAppSelector((state) => state.account);
 
  let location = useLocation(); //บันทึกพาทปัจจุบัน
  var obj = JSON.parse(JSON.stringify(location));
  var path = obj.pathname;
 
  localStorage.setItem("savepath", path);
 
=======
//โค้ดที่น ามาเว็ปปรับแล้ว
export function PrivateRoute() {
  const { user } = useAppSelector((state) => state.account);
  let location = useLocation(); //บันทึกพาทปัจจุบัน
  var obj = JSON.parse(JSON.stringify(location));
  var path = obj.pathname;
  localStorage.setItem("savepath", path);
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
<<<<<<< HEAD
 
  return <Outlet />;
}
 
//โค้ดที่นำมาเว็ปยังไม่ได้ปรับ
=======
  return <Outlet />;
}

>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
export function PrivateLogin({ children }: { children: JSX.Element }) {
  const { user } = useAppSelector((state) => state.account);
  let location = useLocation();
  let path = localStorage.getItem("savepath");
<<<<<<< HEAD
 
  if (path == null) path = "/";
 
=======
  if (path == null) path = "/";
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
  if (user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={`${path}`} state={{ from: location }} replace />;
  }
<<<<<<< HEAD
 
  return children;
}
=======
  return children;
}
>>>>>>> 23fd86af05bdbcdb733d0f9b29d1795a3d1d5d67
