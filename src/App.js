import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularProducts from './components/PopularProducts';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      {/* sections */}
        <Hero />
        <PopularProducts />
        <Welcome />
      </main>
    </div>
  );
}

export default App;
