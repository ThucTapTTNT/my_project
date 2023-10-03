import '../styles/App.scss';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Dcb from './body/danh_cho_ban';
import Dtd from './body/dang_theo_doi';
import Yt from './body/yeu_thich';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Header/>
        <Sidebar/>
        <Routes>
          <Route exact path = "/" element={<Dcb />}/>
          <Route exact path = "/dtd" element={<Dtd />}/>
          <Route exact path = "/yt" element={<Yt />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
