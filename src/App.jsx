import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './const';

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
        <Route path={AppRoutes.characters} element={<CharactersPage />} />
        <Route path={AppRoutes.charactersItem} element={<CharactersItemPage />} />
        <Route path={AppRoutes.films} element={<FilmsPage />} />
        <Route path={AppRoutes.filmsItem} element={<FilmsItemPage />} />
        <Route path={AppRoutes.planets} element={<PlanetsPage />} />
        <Route path={AppRoutes.planetsItem} element={<PlanetsItemPage />} />
        <Route path={AppRoutes.starships} element={<StarshipsPage />} />
        <Route path={AppRoutes.starshipsItem} element={<StarshipsItemPage />} />
        <Route path={AppRoutes.notFound} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
