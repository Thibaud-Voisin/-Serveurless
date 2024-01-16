import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Suivi from './suivi';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Suivi-commande" element={<Suivi />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;