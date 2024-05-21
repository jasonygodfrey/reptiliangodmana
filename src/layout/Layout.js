import Head from "next/head";
import { Fragment, useEffect } from "react";
import VideoPopup from "../components/popup/VideoPopup";
import {
  animationText,
  dataBgImg,
  imgToSVG,
  neoh_fn_moving_blog,
  progressTotop,
  stickyNav,
} from "../utilits";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, pageName }) => {
  useEffect(() => {
    animationText();
    neoh_fn_moving_blog();
    dataBgImg();
    imgToSVG();
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", progressTotop);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>🧙‍♂️JasonG Game & Web Dev🐉</title>
      </Head>
      <VideoPopup />
      <div className="neoh_fn_main" data-footer-sticky="">
        <Header />
        <div className="neoh_fn_content">{children}</div>
        {/* <Footer /> */}
      </div>

      <div className="neoh_fn_moving_box"></div>
    </Fragment>
  );
};
export default Layout;
