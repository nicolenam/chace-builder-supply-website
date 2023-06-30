import "../styles/Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="heroImage">
        <div className="heroContainer">
          <div className="heroContext">
            <h2 className="heroTitle">Looking for a quote?</h2>
            <p className="heroP">Easily submit a quote request for materials online, 24/7!</p>
            <div className="quotesDiv"></div>
            <a className="quotesBtn" href="/quotes">
              <div className="quotesBtnDiv">
                <p className="btnText">Get a Quote</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
