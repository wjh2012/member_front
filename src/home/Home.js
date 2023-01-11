import './Home.css'
import Top from './top/Top'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'

function Home() {
  return (
    <div className="Home">
      <Top />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
