import { useState, useEffect, useRef } from "react";
import { useThemeContext } from "../context/ThemeContext";
import styles from "./Settings.module.css";

const Settings = () => {
  const { theme, toggleTheme } = useThemeContext();
  const [showVideo, setShowVideo] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (theme === "dark") {
      setShowVideo(true);
    }
  }, [theme]);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

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

      {showVideo && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <video autoPlay onEnded={handleVideoEnd} className={styles.video}>
              <source src="../../public/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
