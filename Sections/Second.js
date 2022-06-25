import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";



const Second = () => {
  const [clicked, setClicked] = React.useState(1);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="nucoin_second-container">
      <span className="nucoin_second-progress">PROGESS</span>
      <span className="nucoin_second-roadmap">Nucoin Roadmap</span>
      <div className="nucoin_second-status">
        {" "}
        <a className={clicked == 1 ? "hp-fp-102" : "nucoin_hp-fb-notselected"}>
          My Wallet
        </a>{" "}
        <a className={clicked == 2 ? "hp-fp-102" : "nucoin_hp-fb-notselected"}>
          My Wallet
        </a>{" "}
        <a className={clicked == 3 ? "hp-fp-102" : "nucoin_hp-fb-notselected"}>
          My Wallet
        </a>
      </div>

      <img
        src="https://nucoin.com.au/assets/images/timelinered.png"
        className="nucoin_second-timeline-img"
      />

      <div className="nucoin_second_events_container">
        <FlyingCard mt="-100px" />
        <FlyingCard mt="-55px" />
        <FlyingCard mt="-100px" />
        <FlyingCard mt="-85px" />
        <FlyingCard mt="-25px" />{" "}
      </div>
 
  
            <a className="hp-fp-102 " data-aos="fade-up" data-aos-duration="2500">RoadMap Board</a>
            
    </div>
  );
};

export default Second;

const FlyingCard = (props) => {
  return (
    <span
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "justify",
        gap: "20px",
        marginTop: props.mt,
      }}

      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <svg
        class="MuiSvgIcon-root"
        style={{ fill: "#3AF8F3", height: "25px", width: "25px" }}
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
      </svg>

      <div>23-45-6746</div>

      <div style={{ width: "160px" }}>
        sdfa sdkjf sjkd lksjd lkjd jdklfjs dkdkllj kldjfks fjkldsjklsd{" "}
      </div>
    </span>
  );
};
