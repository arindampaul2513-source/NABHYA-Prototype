import "./ReportPage.css";
import { useAppContext } from "../context/AppContext";

const ReportPage = () => {
  const {
    processedImage,
    stats,
    annotations
  } = useAppContext();

  return (
    <div className="report-container">

      <div className="report-card">

        <div className="report-header">
          <h1>NABHYA Intelligence Report</h1>
          <button className="pdf-btn">
            Download PDF
          </button>
        </div>

        {/* Page 1 */}

        <div className="report-section">

          <h2>Annotated Satellite Reconstruction</h2>

          <img
            src={processedImage || "/earth.gif"}
            alt="report"
            className="report-image"
          />

        </div>

        {/* Page 2 */}

        <div className="report-section">

          <h2>Geospatial Analysis Summary</h2>

          <div className="summary-grid">

            <div className="summary-card">
              <h3>Cloud Cover</h3>
              <span>{stats.cloud_cover}%</span>
            </div>

            <div className="summary-card">
              <h3>AI Confidence</h3>
              <span>{stats.confidence}%</span>
            </div>

            <div className="summary-card">
              <h3>Vegetation</h3>
              <span>{stats.vegetation}%</span>
            </div>

            <div className="summary-card">
              <h3>Water Bodies</h3>
              <span>{stats.water}%</span>
            </div>

            <div className="summary-card">
              <h3>Urban Area</h3>
              <span>{stats.urban}%</span>
            </div>

          </div>

        </div>

        {/* Detected Features */}

        <div className="report-section">

          <h2>AI Detected Features</h2>

          <div className="feature-report">

            {annotations.length > 0 ? (

              annotations.map((item) => (

                <div
                  className="feature-item"
                  key={item.id}
                >
                  <h3>{item.name}</h3>
                  <p>{item.type}</p>
                </div>

              ))

            ) : (

              <p>No detections available.</p>

            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default ReportPage;