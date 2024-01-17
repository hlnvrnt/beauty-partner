function Home() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src="public/images/imageHome.webp" alt="home" />
      </div>
      <div className="images-logo-container">
        <div className="bp-image-container">
          <img src="public/images/home_logo.png" alt="logo-beautypartner" />
        </div>
        <div className="beautypartner-image-container">
          <img src="public/images/beautypartner_logo.webp" alt="" />
        </div>

        <p className="description">
          Adhérez à notre programme exclusif afin d’accéder à des offres
          personnalisées destinées à nos membres. Profitez de coffrets-cadeaux,
          promotions, soirées VIP et séminaires exclusifs. Offrez à vos clients
          un référencement sur leurs produits favoris grâce à notre borne AI
          intégrée à votre profil professionnel.
        </p>

        <p className="second-description">
          Optimisez l'efficacité de votre salon dès maintenant en devenant
          Beauty Partner.
        </p>
      </div>
    </div>
  );
}
export default Home;
