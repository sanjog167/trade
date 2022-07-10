import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import Popularcategories from './Popularcategories';
import Fourbox from './Fourbox';
import Ads from './Ads';
import Ads2 from './Ads2';
import Deals from './Deals';
import Quotes from './Quotes';
import Trending from './Trending';
import './style.css'
import './custom-style.css'
import './bootstrap.min.css'
import './custom.css'
import Homecategoryone from './Homecategoryone';
import Homecategorytwo from './Homecategorytwo';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Popularcategories />
      <Fourbox />
      <Trending />
      <Ads />
      <Homecategoryone />
      <Homecategorytwo />
      <Ads2 />
      <Deals />
      <Quotes />
    </div>
  );
}

export default App;
