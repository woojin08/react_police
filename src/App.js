import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import MainContent from './component/MainContent';
import MainVisual from './component/MainVisual';
import Portfolio from './component/Portfolio';
import Promotion from './component/Promotion';



function App() {

  return (

    <div className="Wrap">

      <Header />
      <MainVisual />
      <MainContent />
      <Portfolio />
      <Promotion />
      <Footer />
    </div>

  )

}
export default App;
