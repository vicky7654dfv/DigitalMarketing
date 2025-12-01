import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.errorContent}>
        <div className={styles.gradientBackground}></div>
        
        <div className={styles.errorVisual}>
          <div className={styles.brokenLinkIcon}>
            <div className={styles.linkLine}></div>
            <div className={styles.linkCircle}></div>
            <div className={styles.linkEnd}></div>
          </div>
          <div className={styles.errorCode}>
            <span className={styles.codeDigit}>4</span>
            <span className={styles.codeDigit}>0</span>
            <span className={styles.codeDigit}>4</span>
          </div>
        </div>

        <div className={styles.messageSection}>
          <h1 className={styles.title}>Digital Path Disconnected</h1>
          
          <p className={styles.description}>
            The campaign module you're searching for has been archived or moved to a different protocol.
          </p>

          <div className={styles.actionButtons}>
            <button 
              className={styles.homeButton}
              onClick={handleGoHome}
            >
              Return to Home
            </button>
            <button 
              className={styles.backButton}
              onClick={handleGoBack}
            >
              ← Reconnect
            </button>
          </div>

          <div className={styles.techNote}>
            <span className={styles.noteLabel}>Note:</span>
            If this persists, contact our digital support team for immediate assistance.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;