import Image from "next/image"
import { SocialsContainer } from "./socialsStyles"
import { Facebook, Twitter, Youtube, Twitch, Instagram } from "../../ui/socials";

const Socials = () => {
  return (
    <SocialsContainer>
        <div className="socials-container--left">
          <Image
            src="/imgs/gamer-girl.jpg"
            alt="girls can't game"
            layout="fill"
          ></Image>
        </div>

        <div className="socials-container--right">
          <div className="socials-header">
            <p className="socials-heading">Highnoon Gaming Esports</p>
          </div>

          <div className="socials-text">
            <p className="socials-text-margin">
              Bringing competetive gaming in Barbados to life. Connecting gamers
              all across the island.
            </p>
          </div>

          <div className="socials-icons">
            <div className="socials-align">
              <Facebook className="icon" />
              <Twitch className="icon" />
              <Twitter className="icon" />
              <Instagram className="icon" />
              <Youtube className="icon" />
            </div>
          </div>
        </div>
      </SocialsContainer>
  )
}

export default Socials