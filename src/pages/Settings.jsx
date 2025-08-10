// pages/Settings.jsx
import { useThemeContext } from "../context/ThemeContext";
import styles from "./Settings.module.css";

const Settings = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className={styles.settings}>
      <h1 className={styles.title}>Settings</h1>

      <div className={styles.section}>
        <label htmlFor="theme-toggle" className={styles.label}>
          Theme:
        </label>
        <button
          id="theme-toggle"
          onClick={toggleTheme}
          className={styles.button}
        >
          {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Settings;
