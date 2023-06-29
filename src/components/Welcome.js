import "../styles/Welcome.scss";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="content-container">
        <h1>Welcome to Chace Building Supply!</h1>
        <p>
        Over five generations ago in 1885, Peleg Durfree Humphrey first opened the doors of his lumber company on the riverfront wharf in Tiverton, Rhode Island. As the main suppliers for local business and residential construction, the company grew with the area and became the largest employer in Tiverton. Several generations later, P.D. Humphrey was instrumental in rebuilding the coastline areas of Southern Rhode Island and Eastern Connecticut after the devastating hurricane of 1938. A subsequent hurricane in 1954 finally resulted in a move to higher ground after company employees watched most of their inventory float away down the Sakonnet River.
        </p>
        <img src="/ezgif.com-webp-to-png.png" alt="deck"/>
      </div>
    </section>
  );
};

export default Welcome;
