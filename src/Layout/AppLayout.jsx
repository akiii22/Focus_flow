import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
const AppLayout = () => {
  return (
    <div className={styles.appLayout}>
      <Sidebar />
      <main className={styles.mainContent}>
        <div className={styles.layoutContainer}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default AppLayout;
