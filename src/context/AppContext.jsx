import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [uploadedImage, setUploadedImage] = useState(null);

  const [processedImage, setProcessedImage] = useState(null);

  const [stats, setStats] = useState({
    cloud_cover: 32,
    confidence: 94,
    vegetation: 41,
    water: 15,
    urban: 28
  });

  const [annotations, setAnnotations] = useState([
    {
      id: 1,
      name: "Major River Corridor",
      type: "Water Body",
      x: 20,
      y: 30
    },
    {
      id: 2,
      name: "Urban Settlement",
      type: "Urban Area",
      x: 60,
      y: 50
    },
    {
      id: 3,
      name: "Transport Corridor",
      type: "Road",
      x: 40,
      y: 70
    }
  ]);

  return (
    <AppContext.Provider
      value={{
        uploadedImage,
        setUploadedImage,

        processedImage,
        setProcessedImage,

        stats,
        setStats,

        annotations,
        setAnnotations
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};