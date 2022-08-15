/* eslint-disable @next/next/no-img-element */

import Hero from "./hero/hero";
import Games from "./games/games";
import Socials from "./socials/socials";
import LatestNews from "./latestNews/latestNews";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

const Home = () => {
  return (
    <>
      <Hero />

      <Socials />

      <LatestNews />

      <Games />

      <Contact />

      <Footer />
    </>
  );
};

export default Home;
