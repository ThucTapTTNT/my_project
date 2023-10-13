import '../styles/App.scss';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Dcb from './body/danh_cho_ban';
import Dtd from './body/dang_theo_doi';
import Yt from './body/yeu_thich';
import Hashtag1 from './body/hashtag1';
import Kenh from './body/kenh';
import Livestream from './body/livestream';
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
          <Route exact path = "/tt" element={<Livestream />}/>
          <Route exact path = "/hashtag1" element={<Hashtag1 />}/>
          <Route exact path = "/kenh" element={<Kenh />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
