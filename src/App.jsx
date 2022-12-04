import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharactersItemPage from './pages/CharactersItemPage/CharactersItemPage';
import FilmsPage from './pages/FilmsPage/FilmsPage';
import FilmsItemPage from './pages/FilmsItemPage/FilmsItemPage';
import PlanetsPage from './pages/PlanetsPage/PlanetsPage';
import PlanetsItemPage from './pages/PlanetsItemPage/PlanetsItemPage';
import StarshipsPage from './pages/StarshipsPage/StarshipsPage';
import StarshipsItemPage from './pages/StarshipsItemPage/StarshipsItemPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="characters" element={<CharactersPage />} />
        <Route path="characters/:id" element={<CharactersItemPage />} />
        <Route path="films" element={<FilmsPage />} />
        <Route path="films/:id" element={<FilmsItemPage />} />
        <Route path="planets" element={<PlanetsPage />} />
        <Route path="planets/:id" element={<PlanetsItemPage />} />
        <Route path="starships" element={<StarshipsPage />} />
        <Route path="starships/:id" element={<StarshipsItemPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
