import React from "react";
import ReactM from "./reactM";

import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactM />
    </BrowserRouter>
  );
};


export default App;