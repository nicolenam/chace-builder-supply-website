import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularProducts from './components/PopularProducts';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <PopularProducts />
      </main>
    </div>
  );
}

export default App;
