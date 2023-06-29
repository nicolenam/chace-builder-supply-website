import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularProducts from './components/PopularProducts';
import Welcome from './components/Welcome';
import Text from './components/Text';
import './styles/Resets.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      {/* sections */}
        <Hero />
        <PopularProducts />
        <Welcome />
        <Text />
      </main>
    </div>
  );
}

export default App;
