import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
//import $ from "jquery";
import { SafeHydrate } from "../components/SafeHydrate";

const isSSR = typeof window === "undefined";

declare global {
  var $: any;
}

const Home = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      $(".js-example-basic-multiple").select2();
      $("#owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: true,
        items: 2,
      });
    };

    window.addEventListener("load", handleDOMContentLoaded);

    return () => {
      window.removeEventListener("load", handleDOMContentLoaded);
    };
  }, []);

  return (
    <>
      <Head>
        <title>My page title!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        />
      </Head>
      {/* <Script
        id="jquery"
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy={"beforeInteractive"}
      />
      <Script
        id="select"
        strategy={"beforeInteractive"}
        src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"
      />
      <Script
        id="owl"
        strategy={"beforeInteractive"}
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
      /> */}
      <div>
        <h1>Hello world !!</h1>
        <div>
          {!isSSR && (
            <SafeHydrate>
              <select className="js-example-basic-multiple" multiple>
                <option value="AL">Alabama</option>
                <option value="WY">Wyoming</option>
                <option value="SH">San hoje</option>
              </select>

              <div className="contain">
                <div id="owl-carousel" className="owl-carousel owl-theme">
                  <div className="item">1</div>
                  <div className="item">2</div>
                  <div className="item">3</div>
                  <div className="item">4</div>
                  <div className="item">5</div>
                  <div className="item">6</div>
                </div>
              </div>
            </SafeHydrate>
          )}
        </div>
      </div>

      <style jsx>{`
        body {
          margin: 100px 0;
          padding: 30px;
        }

        .contain {
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
        }

        .item {
          align-items: center;
          background-color: tomato;
          color: white;
          display: flex;
          height: 300px;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Home;
