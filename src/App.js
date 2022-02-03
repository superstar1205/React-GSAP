import { AppThemeProvider } from "./ui/theme/AppThemeProvider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./conts/routes";

function App() {
  return (
    <AppThemeProvider>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </Router>
    </AppThemeProvider>
  );
}

export default App;
