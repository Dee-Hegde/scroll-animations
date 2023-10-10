import { Route, Routes } from 'react-router-dom';
import './assets/css/App.css';
import Dashboard from './pages/dashboard';
import Earthlanding from './pages/earthlanding';
import Doraemon from './pages/doraemon';
import PageChangeOnScroll from './pages/pagechange';
import OnScrollProgress from './pages/onscrollprogress';
import BringToSame from './pages/bringToSame';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Dashboard />}
        />
        <Route
          path='/earthlanding'
          element={<Earthlanding />}
        />
        <Route
          path='/doraemon-jump'
          element={<Doraemon />}
        />
        <Route
          path='/page-scroll'
          element={<PageChangeOnScroll />}
        />
        <Route
          path='/scroll-progressbar'
          element={<OnScrollProgress />}
        />
        <Route
          path='/bring-to-same'
          element={<BringToSame />}
        />
      </Routes>
    </div>
  );
}

export default App;
