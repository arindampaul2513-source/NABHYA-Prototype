import "./UploadPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const UploadPage = () => {
  const navigate = useNavigate();

  const { setUploadedImage } = useAppContext();

  const [preview, setPreview] = useState(null);

  // Image Select
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setUploadedImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Start Analysis
  const handleUpload = () => {
    if (!preview) {
      alert("Please select a satellite image first.");
      return;
    }

    navigate("/processing");
  };

  return (
    <div className="upload-container">
      <div className="upload-card">

        <h1>Upload Satellite Image</h1>

        <p>
          Upload cloud contaminated satellite imagery for
          AI-powered reconstruction and geospatial analysis.
        </p>

        {/* Upload Box */}
        <label className="upload-box">
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="preview-image"
            />
          ) : (
            <div>
              <h2>📤 Click to Upload</h2>
              <p>PNG, JPG, JPEG, TIFF</p>
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            hidden
          />
        </label>

        {/* Analyze Button */}
        <button
          className="analyze-btn"
          onClick={handleUpload}
        >
          Analyze Image 
        </button>

      </div>
    </div>
  );
};

export default UploadPage;