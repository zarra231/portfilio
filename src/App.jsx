import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { GradientWaves } from "./components/reactbits/GradientWaves";
import { CustomCursor } from "./components/reactbits/CustomCursor";

export function App() {
  return (
    <BrowserRouter>
      {/* Subtle Kodacademy Background Ambient Glows */}
      <GradientWaves
        colors={["#0284c7", "#7c3aed", "#be185d", "#09090b"]}
        speed={0.0015}
        blur="blur-3xl"
        opacity={0.25}
      />

      {/* Subtle ReactBits Custom Cursor enhancement */}
      <CustomCursor />

      {/* Application Routes with Framer Motion transitions */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
