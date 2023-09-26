import { Layout } from './components';
import { Authorization, Home } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} /> Outlet if path === '/'
      </Route>
      <Route path='/auth' element={<Authorization />} />
    </Routes>
  );
}

export default App;
