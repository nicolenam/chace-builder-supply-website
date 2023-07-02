import Hero from './Hero';
import PopularProducts from './PopularProducts';
import Welcome from './Welcome';
import Support from './Support';
import Payment from './Payment';
import Text from './Text';
import ProductGrid from './ProductGrid';

const Home = () => {
    return (
        <main>
            <Hero />
            <PopularProducts />
            <Welcome />
            <ProductGrid />
            <Support />
            <Payment />
            <Text />
        </main> 
    );
};

export default Home;
