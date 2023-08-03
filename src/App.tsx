import React from "react";

import { ThemeProvider, createTheme } from "@mui/material";
import { ComponentDashbaord } from "./components/components-dashboard/components-dashboard";
import { ComponentAppHeader } from "./components/component-app-header/component-app-header";

const customTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <React.Fragment>
        <ComponentAppHeader />
        <ComponentDashbaord />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
