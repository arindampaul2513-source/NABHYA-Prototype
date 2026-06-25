import "./ProcessingPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProcessingPage = () => {
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          // Backend ready হলে এখানে API call result check হবে
          setTimeout(() => {
            navigate("/dashboard");
          }, 1000);

          return 100;
        }

        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="processing-container">

      <div className="scanner-box">

        <h1>AI Analysis in Progress</h1>

        <p>
          Reconstructing cloud-free surface imagery using
          Generative AI, Temporal Fusion & Geospatial Intelligence...
        </p>

        <div className="satellite-animation">
          <img src="/earth.gif" alt="earth" />
          <div className="scan-line"></div>
        </div>

        <div className="progress-wrapper">

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <span>{progress}% Completed</span>

        </div>

      </div>

    </div>
  );
};

export default ProcessingPage;