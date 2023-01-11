import Article from 'pages/Article';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="article/:articleId" element={<Article />} />
    </Routes>
  );
};
