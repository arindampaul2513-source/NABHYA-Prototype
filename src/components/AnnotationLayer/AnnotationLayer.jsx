import "./AnnotationLayer.css";

function AnnotationLayer({ image, annotations = [] }) {
  return (
    <div className="annotation-container">
      <img
        src={image}
        alt="Annotated"
        className="annotated-image"
      />

      {annotations.map((item) => (
        <div
          key={item.id}
          className="annotation"
          style={{
            position: "absolute",
            top: `${item.y}%`,
            left: `${item.x}%`,
          }}
        >
          <div className="dot"></div>
          <div className="label">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default AnnotationLayer;