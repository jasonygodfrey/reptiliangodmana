import Link from "next/link";
import { Fragment, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  return (
    <Fragment>
      {/* Right Navigation */}
      <div
        className={`nav_overlay ${toggle ? "go" : ""}`}
        onClick={() => setToggle(false)}
      />
      <div className={`neoh_fn_nav ${toggle ? "go" : ""}`}>
        <div className="trigger is-active">
          <div className="trigger_in" onClick={() => setToggle(false)}>
            <span className="text">Close</span>
            <span className="hamb">
              <span className="hamb_a" />
              <span className="hamb_b" />
              <span className="hamb_c" />
            </span>
          </div>
        </div>
        <div className="nav_content">
          <div className="nav_menu">
            <ul>
              <li className="menu-item menu-item-has-children">
                <a
                  href="#"
                 
                >
                  Home
                </a>
               {/* } <ul
                  className="sub-menu"
                  style={{ display: homeToggle ? "block" : "none" }}
                >
                  <li>
                    <Link legacyBehavior href="/">
                      Home Static
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/kenburns">
                      Full Kenburns
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/half-kenburns">
                      Half Kenburns
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/half-slider">
                      Half Slider
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li className="menu-item">
                <Link legacyBehavior href="/about">
                  About
                </Link>
              </li>
              <li className="menu-item">
                <Link legacyBehavior href="/blog">
                  Blog
                </Link>
              </li>
              <li className="menu-item">
                <Link legacyBehavior href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav_buttons">
            <a
              href="https://opensea.io/"
              className="neoh_fn_button"
              target="_blank"
            >
              <span className="icon">
                <img src="svg/opensea.svg" alt="" className="fn__svg" />
              </span>
              <span className="text">OpenSea</span>
            </a>
            <a
              href="https://discord.com/"
              className="neoh_fn_button"
              target="_blank"
            >
              <span className="icon">
                <img src="svg/discord.svg" alt="" className="fn__svg" />
              </span>
              <span className="text">Discord</span>
            </a>
          </div>
        </div>
        {/* Nav Footer */}
        <div className={`nav_footer ${toggle ? "ready" : ""}`}>
          <div className="nf_left">
            <p>
              Copyright {new Date().getFullYear()}- Designed &amp; Developed by{" "}
              <a
                href="https://themeforest.net/user/codeefly/portfolio"
                target="_blank"
              >
                Codeefly
              </a>
            </p>
          </div>
          <div className="nf_right">
            <div className="neoh_fn_social_list">
              <ul>
                <li>
                  <a href="#">
                    <i className="fn-icon-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fn-icon-behance" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* !Nav Footer */}
      </div>
      {/* !Right Navigation */}
      {/* Header */}
{/* Header */}
<header className="neoh_fn_header">
  <div className="container">
    <div className="header_in">
     {/* <div className="logo">
        <Link legacyBehavior href="/" style={{ pointerEvents: 'none' }}>
        <a href="https://jasongodfrey.dev" target="_blank" rel="noopener noreferrer">
          <img src="img/logo.png" alt="logo" style={{ width: '254px', height: '64px' }} />
        </a> 
</Link> 

            
            </div> */}
            {/* <div className="trigger">
              <div className="trigger_in" onClick={() => setToggle(!toggle)}>
                <span className="text"></span>
                <span className="hamb">
                  <span className="hamb_a" />
                  <span className="hamb_b" />
                  <span className="hamb_c" />
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </header>
      {/* !Header */}
    </Fragment>
  );
};
export default Header;
