
import './App.css';
import RouterURL from '../RouterURL/RouterURL';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
// import {Router} from "react-router-dom";



function App() {
  return (
        <div className='all' >
          <Header></Header>
          <Menu></Menu>
           <RouterURL></RouterURL>
           <Footer></Footer>
        </div>
  );
}

export default App;
