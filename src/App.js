import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home/Home';
import LoginPage from './auth/LoginPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/login"} element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
