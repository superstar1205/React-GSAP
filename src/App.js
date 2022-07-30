import { AppThemeProvider } from "./ui/theme/AppThemeProvider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./conts/routes";
import { createContext, useState } from 'react';

export const ScrollContext = createContext();

function App() {
  const [ position, setPosition ] = useState(0);

  return (
    <ScrollContext.Provider value={{ position, setPosition }}>
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
    </ScrollContext.Provider>
  );
}

export default App;
