import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Daily from "./pages/Daily";
import Weekly from "./pages/Weekly";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="daily" element={<Daily />} />
            <Route path="weekly" element={<Weekly />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
