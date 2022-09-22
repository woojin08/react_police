import './App.css';
import Header from './component/Header';
import MainContent from './component/MainContent';
import MainVisual from './component/MainVisual';
import Portfolio from './component/Portfolio';



function App() {

  return (

    <div className="Wrap">

      <Header />
      <MainVisual />
      <MainContent />
      <Portfolio />

    </div>

  )

}
export default App;
