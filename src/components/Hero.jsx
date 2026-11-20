
import "./Hero.css";
import animoji from "../assets/images/animoji.png";

function Hero() {
  return (
    <section className="hero" id="accueil">

      <div className="hero-content">

        <div className="hero-text">
<h1 className="hero-title">
  <span className="title-line-one">Hello,</span>

  <span className="title-line-two">moi c'est</span>

  <span className="name">Abissétou !</span>
</h1>
          
        </div>

        <div className="hero-image">
          <div className="hero-bubble">
            Bienvenue, faisons connaissance ! 👋
          </div>

          <img src={animoji} alt="Mon Animoji" />
        </div>

      </div>

    </section>
  );
}

export default Hero;
