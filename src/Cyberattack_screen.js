import Card, { PinkCard, TopBar, BottomBar } from "./Components.js";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

function Cyberattack() {
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
        className="background-color-verylightorange"
      >
        <div>
          <h1
            className={isMobile ? "muwatana-header-styling" : ""}
            style={{
              fontSize: isMobile ? "30px" : "45px",
              color: "#ff6933",
            }}
          >
            Cyberattacks
          </h1>
          {isMobile ? (
            <p>
              A cyberattack is a harmful attempt to gain unauthorized access to
              someone else's devices or information, whether it's an individual
              or an institution. The goal may be to delete important data,
              commit blackmail, steal money, or gain any other advantage from
              the stolen information.
            </p>
          ) : (
            <p style={{ fontSize: isMobile ? "14px" : "inherit" }}>
              A cyberattack is a harmful attempt to gain unauthorized access to
              someone
              <br />
              else's devices or information, whether it's an individual or an
              institution. The
              <br />
              goal may be to delete important data, commit blackmail, steal
              money, or gain
              <br />
              any other advantage from the stolen information.
            </p>
          )}
        </div>
        <div>
          <img
            src="082157c332f85bee1e8ddaa4af8c5727a71a26d0.png"
            alt="security"
            className="image-styling"
            style={{
              maxWidth: isMobile ? "80%" : "400px",
              height: "auto",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
      <div
        className="resources-part-styling"
        style={{
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "60px",
        }}
      >
        <h1>Resources</h1>
        <div className="card-row-styling">
          <div className={isMobile ? "bottom-cards-mobile" : "bottom-cards"}>
            <div onClick={() => navigate("/blackmail-screen")}>
              <Card
                style={{ backgroundColor: "#faeff1" }}
                title="Viruses"
                content={
                  <>
                    Protect your online accounts such as
                    <br />
                    social media and email.
                  </>
                }
                backgroundColor="#eec043"
                picture={"mdi_account-cog-outline (1).png"}
              />
            </div>
            <div onClick={() => navigate("/cyberattacks-screen")}>
              <div>
                <Card
                  style={{ backgroundColor: "#faeff1" }}
                  title="Phishing"
                  content={
                    <>
                      Protect your devices from remote and
                      <br />
                      in-person vulnerabilities.
                    </>
                  }
                  backgroundColor="#eec043"
                  picture={"Security--Streamline-Sharp-Material-Symbols.png"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="resources-part-styling"
        style={{
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "60px",
        }}
      >
        <h1>Related Topics</h1>
        <div className="pinkcard-row-styling">
          <PinkCard
            title={
              <>
                Setting up 2-Factor
                <br />
                Authentication
              </>
            }
            content={
              <>
                Keep your account safe with
                <br />
                an extra security step.
              </>
            }
          />
          <PinkCard
            title={<>Cyber-Blackmail</>}
            content={
              <>
                Learn what to do if you are
                <br />
                being blackmailed through
                <br />
                technology.
              </>
            }
          />
          <div onClick={() => navigate("/phishing-screen")}>
            <PinkCard
              title={<>Phishing</>}
              content={
                <>
                  A popular type of
                  <br />
                  cyberattacks is phishing.
                  <br />
                  Learn how to yourself.
                </>
              }
            />
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
}

export default Cyberattack;
