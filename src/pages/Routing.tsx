import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { SearchingPage } from './SearchingPage/SearchingPage';

export const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searching" element={<SearchingPage />} />
      </Routes>
    </Router>
  );
};
