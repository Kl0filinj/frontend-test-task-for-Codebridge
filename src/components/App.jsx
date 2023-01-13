import { Suspense } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Article = lazy(() => import('pages/Article'));

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="article/:articleId" element={<Article />} />
      </Routes>
    </Suspense>
  );
};
