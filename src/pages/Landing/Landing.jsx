import React from "react";
import "./Landing.css";

import lady from "../../Assets/images/lady.png";
import solaytic from "../../Assets/images/solaytic.png";
import kanba from "../../Assets/images/kanba.png";
import lighting from "../../Assets/images/lighting.png";
import ztos from "../../Assets/images/ztos.png";
import goldline from "../../Assets/images/goldline.png";
import ideaa from "../../Assets/images/ideaa.png";
import liva from "../../Assets/images/liva.png";
import velocity from "../../Assets/images/velocity-9.png";

import { Link } from "react-router-dom";

import { Navbar, WhyCard } from "../../components";

function Landing() {
  const whyData = [
    {
      title: "Get More Visibility",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      title: "Organize Your Candidates  ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Verify Their Abilities",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  const companyImages = [solaytic, kanba, lighting, ztos, kanba, goldline, ideaa, liva, velocity];

  return (
    <div className="App">
      <div className="dark_section dark_landing">
        <Navbar type="index" />
        <div className="container">
          <section className="welcome_section">
            <div className="welcome_box">
              <div className="welcome_txt">
                Welcome to{" "}
                <b>
                  My<span className="blue_">Jobs</span>
                </b>
              </div>
              <Link to="/login">
                <button className="blue_btn">Get Started</button>
              </Link>
            </div>
            <img src={lady} alt="" />
          </section>
        </div>
      </div>
      <div className="light_section light_landing">
        <div className="container">
          <section className="why">
            <div className="section_title">Why Us</div>
            <div className="why_cards">
              {whyData.map((data) => (
                <WhyCard key={data.title} title={data.title} txt={data.text} />
              ))}
            </div>
          </section>
          <section className="companies">
            <div className="section_title">Companies Who Trust Us</div>
            <div className="company_images">
              {companyImages.map((img, i) => (
                <div key={i + img} className="image_container">
                  <img key={img} src={img} alt="" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Landing;
