import "./Stats.css";

const Stats = () => {
  const stats = [
    {
      number: "99.2%",
      title: "Cloud Removal Accuracy",
    },
    {
      number: "10x",
      title: "Faster Analysis",
    },
    {
      number: "15+",
      title: "Geospatial Layers",
    },
    {
      number: "24/7",
      title: "Automated Intelligence",
    },
  ];

  return (
    <section className="stats-section">

      <h2 className="stats-heading">
        NABHYA Intelligence Metrics
      </h2>

      <div className="stats-grid">

        {stats.map((item, index) => (
          <div className="stat-box" key={index}>

            <h1>{item.number}</h1>

            <p>{item.title}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Stats;