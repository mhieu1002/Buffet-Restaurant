import React from "react";
import { BrowserRouter } from "react-router-dom";

import RoutesBuffet from "./routes/Routes";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="hidden">
      <BrowserRouter>
        <BackToTop />
        <RoutesBuffet />
      </BrowserRouter>
    </div>
  );
}

export default App;
