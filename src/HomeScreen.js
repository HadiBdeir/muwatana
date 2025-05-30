import Card, { PinkCard, MiniCard, TopBar, BottomBar } from "./Components.js";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import ResourcesCyberSecurityAndPrivacy from "./Resources_CybersecurityAndPrivacy.js";

function HomeScreen() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <TopBar />
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          minHeight: isMobile ? "60vh" : "100vh",
          textAlign: "center",
          gap: isMobile ? "20px" : "40px",
          padding: isMobile ? "20px" : "0",
        }}
      >
        <div>
          <h1
            className={isMobile ? "muwatana-header-styling" : ""}
            style={{ fontSize: isMobile ? "30px" : "45px" }}
          >
            Welcome to <br /> muwatana
          </h1>
          <p style={{ fontSize: isMobile ? "14px" : "inherit" }}>
            Learn how to stay safe online, spot <br /> fake news, balance screen
            time, <br /> guide children in the digital world
          </p>
        </div>
        <div>
          <img
            src="/twopeoplestarringateachother.png"
            alt="Apple"
            className="image-styling"
            style={{
              maxWidth: isMobile ? "80%" : "400px",
              height: "auto",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
      <div className="background-color-verylightpink resources-part-styling">
        <h1>Resources</h1>
        <div
          className="four-card-grid-display-styling"
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "20px",
            justifyItems: "center",
          }}
        >
          <div onClick={() => navigate("/resources-cybersecurity")}>
            <Card
              title="Cybersecurity & Privacy"
              content={
                <>
                  Stay safe online by learning practical
                  <br />
                  tips to protect your personal
                  <br />
                  information and avoid digital
                  <br />
                  threats.
                </>
              }
              picture={"cybersecurityandprivacyimage.png"}
              backgroundColor="white"
            />
          </div>
          <div onClick={() => navigate("")}>
            <Card
              title="Parenting in the Digital Age"
              content={
                <>
                  Discover how to identify fake news,
                  <br />
                  navigate online content responsibly,
                  <br />
                  and develop critical thinking skills for
                  <br />
                  the digital age.
                </>
              }
              picture={
                "Escalator-Warning--Streamline-Outlined-Material-Symbols.png"
              }
              backgroundColor="white"
            />
          </div>
          <div onClick={() => navigate("")}>
            <Card
              title="Digital Health"
              content={
                <>
                Promote well-being in the digital world by managing screen time, maintaining healthy online habits, and balancing technology use.
                </>
              }
              picture={"Wishlist-Love-Add-Favorite--Streamline-Sharp.png"}
              backgroundColor="white"
            />
          </div>
          <div onClick={() => navigate("")}>
            <Card
              title="Media Literacy"
              content={
                <>
                  Discover how to identify fake news,
                  <br />
                  navigate online content responsibly,
                  <br />
                  and develop critical thinking skills for
                  <br />
                  the digital age.
                </>
              }
              picture={"Newspaper--Streamline-Outlined-Material-Symbols.png"}
              backgroundColor="white"
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "300px",
        }}
      >
        <h2>Case Studies</h2>
        <p>
          Discuss and reflect on case studies with your spouse, children, and
          students.
        </p>
        <MiniCard
          title="Discover Case Studies"
          link={"https://www.wikipedia.org/"}
        />
      </div>

      <div
        className="background-color-verylightpink"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "300px",
        }}
      >
        <h2>Discover Digital Citizenship</h2>
        <p>
          In today's world, we all need the skill of a good digital citizenship
          to be safe and productive online.
          <br />
          There are 9 digital citizenship principles.
        </p>
        <MiniCard
          title="Digital Citizenship Guide"
          link={"https://www.wikipedia.org/"}
        />
      </div>

      <div
        className="resources-part-styling"
        style={{
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "60px",
        }}
      >
        <h2>Popular Topics</h2>
        <div className="pinkcard-row-styling">
          <PinkCard
            title={
              <>
                Setting up 2-Factor <br /> Authentication
              </>
            }
            content={
              <>
                Keep your account safe with
                <br />
                an extra security step
              </>
            }
          />
          <PinkCard
            title={
              <>
                Setting up parental
                <br />
                Controls
              </>
            }
            content={
              <>
                Take control of what your
                <br />
                child can do on their device
              </>
            }
          />
          <PinkCard
            title={<>Cyberattacks</>}
            content={
              <>
                <br /> What is a cyberattack and
                <br />
                how can you avoid them?
              </>
            }
          />
        </div>
      </div>
      <BottomBar />
    </>
  );
}

export default HomeScreen;
