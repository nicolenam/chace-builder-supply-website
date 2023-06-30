import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularProducts from './components/Gallery';
import Welcome from './components/Welcome';
import Support from './components/Support';
import Text from './components/Text';
import Payment from './components/Payment';
import Footer from './components/Footer';
import './styles/Resets.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <PopularProducts />
        <Welcome />
        <Support />
        <Payment />
        <Text />
      </main>
      <Footer />
    </div>
  );
}

export default App;
