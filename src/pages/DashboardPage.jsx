import "./DashboardPage.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import AnnotationLayer from "../components/AnnotationLayer/AnnotationLayer";

const DashboardPage = () => {
  const navigate = useNavigate();

  const {
    uploadedImage,
    processedImage,
    stats,
    annotations = [],
  } = useAppContext();

  return (
    <div className="dashboard-container">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>NABHYA Intelligence Dashboard</h1>

          <p>
            AI-Powered Cloud Removal, Surface Reconstruction
            & Geospatial Intelligence
          </p>
        </div>

        <button
          className="download-btn"
          onClick={() => navigate("/report")}
        >
          Generate Report
        </button>
      </div>

      {/* Image Section */}
      <div className="comparison-grid">

        {/* Original Image */}
        <div className="glass-card">

          <h2>Original Satellite Image</h2>

          {uploadedImage ? (
            <img
              src={URL.createObjectURL(uploadedImage)}
              alt="Original"
              className="dashboard-image"
            />
          ) : (
            <div className="placeholder">
              No image uploaded.
            </div>
          )}

        </div>

        {/* AI Image */}
        <div className="glass-card">

          <h2>AI Reconstructed Image</h2>

          {processedImage ? (

            <AnnotationLayer
              image={processedImage}
              annotations={annotations}
            />

          ) : (

            <div className="placeholder">
              Waiting for AI reconstruction...
            </div>

          )}

        </div>

      </div>

      {/* Statistics */}
      <div className="stats-grid">

        {stats ? (
          <>
            <div className="stat-card">
              <h3>Cloud Cover</h3>
              <span>{stats.cloud_cover}%</span>
            </div>

            <div className="stat-card">
              <h3>AI Confidence</h3>
              <span>{stats.confidence}%</span>
            </div>

            <div className="stat-card">
              <h3>Vegetation</h3>
              <span>{stats.vegetation}%</span>
            </div>

            <div className="stat-card">
              <h3>Water Bodies</h3>
              <span>{stats.water}%</span>
            </div>

            <div className="stat-card">
              <h3>Urban Area</h3>
              <span>{stats.urban}%</span>
            </div>
          </>
        ) : (

          <div className="waiting-box">
            <h3>Waiting for AI Statistics...</h3>

            <p>
              Statistics will appear after
              AI processing is completed.
            </p>
          </div>

        )}

      </div>

      {/* Major AI Features */}
      <div className="glass-card detection-panel">

        <h2>Major Features Detected by AI</h2>

        {annotations.length > 0 ? (

          <div className="feature-list">

            {annotations.map((feature) => (

              <div
                key={feature.id}
                className="feature-card"
              >

                <div>
                  <h4>{feature.name}</h4>

                  <p>{feature.type}</p>
                </div>

                <div className="pulse-dot"></div>

              </div>

            ))}

          </div>

        ) : (

          <div className="waiting-box">

            <h3>No Major Features Detected</h3>

            <p>
              Major landmarks detected by AI
              will automatically appear here.
            </p>

          </div>

        )}

      </div>

    </div>
  );
};

export default DashboardPage;