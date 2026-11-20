
import Navbar from "./components/navbar";
import CustomCursor from "./components/customCursor";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar />

      <main>
        {/* ACCUEIL */}
        <Hero />

        {/* À PROPOS */}
        <section className="about-section" id="apropos">
          <div className="about-container">

            <p className="about-label">
              UN PEU DE MOI — MON PARCOURS
            </p>

            <h2 className="about-title">
              Un parcours,<br />
              <span>mille possibilités.</span>
            </h2>

            <div className="about-content">
              <p>
                J'ai toujours été attirée par les univers créatifs, le visuel et
                tout ce qui touche au digital. Curieuse de nature, j'ai commencé
                par une licence en langues, avant de poursuivre avec un master
                en communication digitale en alternance. Un parcours qui m'a
                permis de découvrir différents horizons et de nourrir mon envie
                de créer.
              </p>

              <p>
                De mes premières expériences en entreprise à mes aventures en
                freelance, j'ai eu l'occasion de toucher à beaucoup de choses :
                stratégie de communication, création de contenu, identité
                visuelle, accompagnement client… J'aime cette polyvalence,
                passer d'une idée à un projet concret et ne pas rester enfermée
                dans une seule case. En résumé : je suis plutôt du genre
                couteau suisse !
              </p>

              <p>
                Et parce que je ne tiens pas vraiment en place, j'ai aussi décidé
                d'explorer le développement web pour ajouter une nouvelle corde
                à mon arc. Je m'intéresse à plein d'univers — mode, food, beauté,
                tech — et j'adore apprendre, tester et découvrir. Aujourd'hui,
                j'ai surtout envie de continuer à évoluer, relever de nouveaux
                défis et vivre de belles expériences, en France comme à
                l'international.
              </p>
            </div>

<a href="#experiences" className="about-button">
  Découvrir mes expériences
  <span aria-hidden="true">↗</span>
</a>


            <p className="about-signature">
              CURIEUSE PAR NATURE. CRÉATIVE PAR PASSION.
              COUTEAU SUISSE PAR EXPÉRIENCE.
            </p>

          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
}

export default App;
