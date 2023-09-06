import NavigationBar from './component/NavigationBar';
import Intro from './component/Intro';
import Trending from "./component/Trending";
import "./style/landingPage.css"
import SuperHero from './component/Superhero';

function App() {
  return (
    <div>
      {/* intro sectioan */}
      <div className='mybg'>
        <NavigationBar />
        <Intro />
      </div>
      {/* inro end of section */}
      {/* Trending section*/}
      <div className='trending'>
        <Trending />
      </div>
      {/* Trending end of section*/}
      <div className='superhero'>
        <SuperHero/>
      </div>
      
      </div>
  );
}

export default App;
