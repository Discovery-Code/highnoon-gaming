import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderContainer } from "./headerStyles";
import { Button } from "../ui/navbuttons";

const Header = () => {
  const router = useRouter();

  return (
    <div>
      <HeaderContainer>
        <div className="header-logo">
          <span>HG</span>
        </div>

        <div className="header-nav--links">
          <ul>
            <li>
              <Link href="/">Home</Link>
              <div className={router.pathname == "/" ? "active" : ""}></div>
            </li>

            <li>
              <Link href="/events">Events</Link>
              <div
                className={router.pathname == "/events" ? "active" : ""}
              ></div>
            </li>

            <li>
              <Link href="/standings">Standings</Link>
              <div
                className={router.pathname == "/standings" ? "active" : ""}
              ></div>
            </li>

            <li>
              <Link href="/news">News</Link>
              <div className={router.pathname == "/news" ? "active" : ""}></div>
            </li>
          </ul>
        </div>

        <div className="header-login-register">
          <Button className="login-button">Login</Button>
          <Button className="register-button">Register</Button>
        </div>
      </HeaderContainer>
    </div>
  );
};

export default Header;
