import { ToastContainer } from 'react-toastify';
import { Layout } from './components';
import { Authorization, Home, Profile, Settings } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=':profileId' element={<Profile />} />
          <Route path='settings' element={<Settings />} />
        </Route>
        <Route path='/auth' element={<Authorization />} />
      </Routes>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}

export default App;
