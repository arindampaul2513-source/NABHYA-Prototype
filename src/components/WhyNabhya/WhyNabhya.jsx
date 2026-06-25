import "./WhyNabhya.css";

const WhyNabhya = () => {
  return (
    <section className="why-section">
      <h2>Why NABHYA?</h2>

      <div className="why-grid">
        <div className="why-card">
          <h3>Persistent Cloud Problem</h3>
          <p>
            Satellite images are often obscured by clouds.
          </p>
        </div>

        <div className="why-card">
          <h3>AI Surface Reconstruction</h3>
          <p>
            NABHYA reconstructs hidden surfaces using AI.
          </p>
        </div>

        <div className="why-card">
          <h3>Autonomous Intelligence</h3>
          <p>
            Automatically detects critical landmarks.
          </p>
        </div>

        <div className="why-card">
          <h3>Disaster Monitoring</h3>
          <p>
            Supports disaster response and border monitoring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNabhya;