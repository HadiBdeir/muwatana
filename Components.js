import "./App.css";
import React, { useState, useEffect, Children } from "react";

function Card({ title, content, picture, backgroundColor, style = {} }) {
  return (
    <div
      style={{
        width: "275px",
        border: "1px solid lightgray",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        textAlign: "center",
        maxWidth: "500px",
        backgroundColor: "white",
        backgroundColor: backgroundColor,
        ...style,
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {picture ? (
        <img
          src={picture}
          alt={title}
          width="500"
          height="333"
          style={{
            borderRadius: "10px",
            maxHeight: "100px",
            maxWidth: "100px",
          }}
        />
      ) : (
        <div style={{ fontSize: "100px", textAlign: "center" }}>😺</div>
      )}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function MiniCard({ title, link }) {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#008b8b",
          borderRadius: "8px",
          fontWeight: "lighter",
          color: "whitesmoke",
          padding: "15px 30px",
          border: "2px solid lightgray",
          border: "none",
        }}
      >
        <a href={link} style={{ color: "#FFFFF0", fontWeight: "lighter" }}>
          {title}
        </a>
      </button>
    </div>
  );
}

function PinkCard({ title, content, link }) {
  return (
    <a
      href={link}
      style={{ textDecoration: "none" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        style={{
          minWidth: "200px",
          maxHeight: "150px",
          border: "none",
          padding: "20px",
          margin: "10px",
          borderRadius: "0px 15px 15px 0px",
          backgroundColor: "rgb(247, 234, 236)",
          borderLeft: "3px solid #FF5E00",
          boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
          minHeight: "150px",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h3 style={{ color: "#FF5E00" }}>{title}</h3>
        <p style={{ fontWeight: "normal", color: "black" }}>{content}</p>
      </div>
    </a>
  );
}

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div>
        <div
          className="background-color-darkcyan main-header"
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "50px",
            position: "relative",
          }}
        >
          <div className="header-top-row">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginRight: "auto",
              }}
            >
              <h2
                className="muwatana-title-styling"
                style={{ marginTop: "5px" }}
              >
                muwatana
              </h2>
              <small style={{ marginBottom: "20px" }}>
                learn to navigate the digital world safely
              </small>
            </div>

            {/* Mobile burger menu button */}
            <div className="mobile-menu-button" onClick={toggleMenu}>
              <span>☰</span>
            </div>

            {/* Desktop navigation */}
            <div className="navigation-tab-links desktop-nav">
              <p>
                <a
                  href="https://en.wikipedia.org/wiki/Main_Page"
                  className="nav-link"
                  style={{ margin: "10px", fontWeight: "bold" }}
                >
                  About
                </a>
              </p>
              <p>
                <a
                  href="https://en.wikipedia.org/wiki/Main_Page"
                  className="nav-link"
                  style={{ margin: "10px", fontWeight: "bold" }}
                >
                  Resources
                </a>
              </p>
              <p>
                <a
                  href="https://en.wikipedia.org/wiki/Main_Page"
                  className="nav-link"
                  style={{
                    margin: "10px",
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                  }}
                >
                  Digital Citizenship
                  <br />
                  Principles
                </a>
              </p>
              <p>
                <a
                  href="https://en.wikipedia.org/wiki/Main_Page"
                  className="nav-link"
                >
                  <button
                    style={{
                      color: "white",
                      backgroundColor: "darkOrange",
                      borderRadius: "20px",
                      padding: "1px 20px",
                      height: "30px",
                      fontWeight: "lighter",
                      margin: "10px",
                      whiteSpace: "nowrap",
                      border: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Contact ISF
                  </button>
                </a>
              </p>
              <p>
                <input
                  placeholder="search this site...      🔍"
                  style={{
                    marginRight: "20px",
                    height: "40px",
                    borderRadius: "5px",
                    border: "1px solid gray",
                    padding: "5px",
                  }}
                />
              </p>
              <span
                style={{
                  margin: "20px",
                  fontWeight: "bold",
                  paddingRight: "50px",
                }}
              >
                العربية
              </span>
            </div>
          </div>

          {/* Mobile navigation menu (shows when menu is open) */}
          {menuOpen && (
            <div className="mobile-nav">
              <ul className="mobile-nav-links">
                <li className="mobile-nav-item">
                  <a
                    href="https://en.wikipedia.org/wiki/Main_Page"
                    style={{ fontWeight: "bold" }}
                  >
                    About
                  </a>
                </li>
                <li className="mobile-nav-item">
                  <a
                    href="https://en.wikipedia.org/wiki/Main_Page"
                    style={{ fontWeight: "bold" }}
                  >
                    Resources
                  </a>
                </li>
                <li className="mobile-nav-item">
                  <a
                    href="https://en.wikipedia.org/wiki/Main_Page"
                    style={{ fontWeight: "bold" }}
                  >
                    Digital Citizenship Principles
                  </a>
                </li>
                <li
                  className="mobile-nav-item"
                  style={{ padding: "10px", fontWeight: "bold" }}
                >
                  <span>العربية</span>
                </li>
                <li className="mobile-nav-item contact-item">
                  <a href="https://en.wikipedia.org/wiki/Main_Page">
                    <button
                      className="contact-button"
                      style={{ padding: "17px" }}
                    >
                      Contact ISF
                    </button>
                  </a>
                </li>
              </ul>

              {/* Mobile search bar - now placed inside and at the bottom of the mobile nav menu */}
              <div className="mobile-search-container">
                <input
                  placeholder="search this site...      🔍"
                  className="mobile-search-input"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function BottomBar() {
  return (
    <div
      className="background-color-darkcyan"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          width: "80px",
        }}
      >
        <a
          href="https://en.wikipedia.org/wiki/Main_Page"
          style={{ color: "white", textDecoration: "none" }}
        >
          <small>Contact us</small>
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Main_Page"
          style={{ color: "white", textDecoration: "none" }}
        >
          <small>Help</small>
        </a>
      </div>
      <a href="https://en.wikipedia.org/wiki/Main_Page" className="nav-link">
        <button
          style={{
            color: "white",
            backgroundColor: "#FF5E00",
            borderRadius: "5px",
            height: "50px",
            fontWeight: "normal",
            margin: "10px",
            whiteSpace: "nowrap",
            border: "none",
            padding: "0px 30px",
          }}
        >
          Report incidents to ISF
        </button>
      </a>
    </div>
  );
}

const InfoPackWithButton = ({ picture, alt, title, description }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        textAlign: "left",
        width: "100%",
        position: "relative",
        maxWidth: "600px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "darkcyan",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={picture}
          alt={alt || "Image"}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            height: "60%",
            objectFit: "contain",
          }}
        />
      </div>

      <div style={{ flex: 1, maxWidth: "calc(100%) - 90px" }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const InfoPack = ({ title, description }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        position: "relative",
        textAlign: "left",
        width: "100%",
      }}
      className="info-pack-description"
    >
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

function SmallButton({ text }) {
  return (
    <button
      style={{
        backgroundColor: "darkorange",
        borderRadius: "30px",
        border: "none",
        padding: "10px",
        color: "white",
      }}
    >
      {text}
    </button>
  );
}

const ExploreCard = ({ title, text, examples }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div
        className="explore-card-styling-mobile"
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div className="mobile-title">{title}</div>
        <div className="mobile-example-grid">
          {examples.slice(0, 4).map((example, index) => (
            <div key={index} className="mobile-example-box">
              <h3 className="mobile-example-title">{example}</h3>
            </div>
          ))}
        </div>
        <div className="mobile-card-text">{text}</div>
        <div className="mobile-orange-button-container">
          <a
            href="https://en.wikipedia.org/wiki/Main_Page"
            className="nav-link"
          >
            <button className="mobile-orange-button">Explore</button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="explore-card-styling"
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div className="title">{title}</div>
      <div className="example-grid">
        {examples.map((example, index) => (
          <div key={index} className="example-box">
            <h3 className="example-title">{example}</h3>
          </div>
        ))}
      </div>
      <div className="card-text">{text}</div>
      <div className="orange-button-container">
        <a href="https://en.wikipedia.org/wiki/Main_Page" className="nav-link">
          <button className="orange-button">Explore</button>
        </a>
      </div>
    </div>
  );
};

const PhishingExamples = ({ title, children, style = {}, hrStyle = {} }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    width: isMobile ? "90%" : "1150px",
    maxWidth: "90%",
    height: "auto",
    borderRadius: isMobile ? "15px" : "20px",
    boxShadow: "0px 1px 5px 2px rgba(0, 0, 0, 0.3)",
    backgroundColor: "white",
    paddingBottom: isMobile ? "20px" : "40px",
    margin: isMobile ? "20px auto" : "50px auto",
    overflow: "hidden",
    ...style,
  };

  if (style.width === "860px" && isMobile) {
    containerStyle.width = "90%";
  }

  return (
    <div style={containerStyle}>
      <h1
        style={{
          fontSize: isMobile ? "22px" : "28px",
          paddingTop: isMobile ? "30px" : "60px",
          paddingLeft: isMobile ? "15px" : "0",
          paddingRight: isMobile ? "15px" : "0",
          color: "#008B8B",
          fontWeight: "bold",
          textAlign: isMobile ? "center" : "inherit",
        }}
      >
        {title}
      </h1>
      <hr
        style={{
          height: "5px",
          width: isMobile ? "85%" : "92%",
          backgroundColor: "#40E0D0",
          border: "none",
          margin: "15px auto 20px auto",
          ...hrStyle,
        }}
      />
      <div style={{ padding: isMobile ? "0 15px" : "0" }}>{children}</div>
    </div>
  );
};

function WhyWouldSomeoneHackYou() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const highlightStyle = {
    backgroundColor: "#E0A500",
    color: "white",
    padding: "2px 5px",
    borderRadius: "3px",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        width: isMobile ? "90%" : "860px",
        borderRadius: "20px",
        boxShadow: "0px 1px 5px 2px rgba(0, 0, 0, 0.3)",
        backgroundColor: "white",
        paddingBottom: "7px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: isMobile ? "26px" : "32px",
          paddingTop: isMobile ? "30px" : "60px",
          color: "#008B8B",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Why would someone hack you?
      </h1>

      <hr
        style={{
          height: "5px",
          width: isMobile ? "80%" : "581px",
          backgroundColor: "#40E0D0",
          border: "none",
          margin: "0 auto",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
        }}
      >
        <ul
          style={{
            fontSize: isMobile ? "16px" : "20px",
            textAlign: "left",
            listStylePosition: "outside",
            width: isMobile ? "90%" : "auto",
            paddingLeft: isMobile ? "26%" : "40px", // padding for bullets
            margin: 0,
          }}
        >
          <li style={{ margin: "20px 0" }}>
            To <span style={highlightStyle}>sell your data</span> to third
            parties.
          </li>
          <li style={{ margin: "20px 0" }}>
            To <span style={highlightStyle}>steal your money</span> through
            unauthorized transactions.
          </li>
          <li style={{ margin: "20px 0" }}>
            To <span style={highlightStyle}>blackmail you</span> with the
            private information they find.
          </li>
        </ul>
      </div>
    </div>
  );
}

function Facts({ title, content, source, style = {} }) {
  return (
    <div
      style={{
        minHeight: "185px",
        margin: "50px auto",
        width: "80%",
        maxWidth: "950px",
        border: "none",
        padding: "20px",
        paddingBottom: "40px",
        borderRadius: "5px",
        backgroundColor: "#b2f2e8",
        borderLeft: "10px solid rgb(32, 129, 146)",
        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
        position: "relative",
        ...style,
      }}
    >
      <h3 style={{ color: "rgb(32, 129, 146)" }}>{title}</h3>
      <hr
        style={{
          border: "none",
          height: "2px",
          backgroundColor: "rgb(32, 129, 146)",
          marginBottom: "15px",
          width: "99%",
          marginLeft: "0",
        }}
      />
      <p style={{ fontWeight: "normal", color: "black" }}>{content}</p>
      <p style={{ position: "absolute", right: "20px" }}>
        Source:{" "}
        <i
          href={source}
          className="text-blue-600 hover:underline"
          style={{ fontStyle: "italic", textDecorationLine: "underline" }}
        >
          Phishing for Dummies (2023)
        </i>
      </p>
    </div>
  );
}

function Remember({ title, content, source, style = {} }) {
  return (
    <div
      style={{
        minHeight: "185px",
        margin: "30px auto",
        width: "80%",
        maxWidth: "950px",
        border: "none",
        padding: "20px",
        paddingBottom: "0px",
        borderRadius: "5px",
        backgroundColor: "#FFDAB9",
        borderLeft: "10px solid #FF6933",
        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
        position: "relative",
        ...style,
      }}
    >
      <h3 style={{ color: "#FF6933" }}>{title}</h3>
      <hr
        style={{
          border: "none",
          height: "2px",
          backgroundColor: "#FF6933",
          marginBottom: "15px",
          width: "99%",
          marginLeft: "0",
        }}
      />
      <p style={{ fontWeight: "normal", color: "black" }}>{content}</p>
    </div>
  );
}

function Image({ src }) {
  return <img src={src} alt={src} />;
}

// Blackmail help begins

const tips = [
  "If you are a child, teenager, or young adult, reach out to an adult you trust such as your parents or teachers.",
  "Do not give the blackmailer what they are asking for.",
  "Do not delete any messages sent to you by the attacker: they will be used for evidence.",
  "Do not tell or hint to the attacker that you will be informing the authorities.",
  "Report any accounts or posts that share your private information.",
  "Reach out to the Internal Security Forces of Lebanon.",
];

const BlackmailHelp = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    background: "#FAEFF1",
    borderRadius: "10px",
    width: isMobile ? "90%" : "1173px",
    height: "auto",
    margin: "60px auto",
    boxShadow: "0px 4px 4px rgba(0,0,0,0.3)",
    paddingBottom: "40px",
  };

  const headerStyle = {
    fontSize: isMobile ? "32px" : "64px",
    fontWeight: "700",
    color: "#000000",
    marginBottom: isMobile ? "40px" : "95px",
    paddingTop: isMobile ? "20px" : "43px",
    paddingLeft: isMobile ? "20px" : "30px",
    paddingRight: isMobile ? "20px" : "30px",
    textAlign: isMobile ? "center" : "left",
  };

  const tipStyle = {
    fontWeight: "700",
    fontSize: isMobile ? "15px" : "32px",
    color: "#000000",
    padding: isMobile ? "0px 20px 20px" : "0px 70px 59px",
  };

  const border = (
    <div
      style={{
        height: "2px",
        width: "100%",
        backgroundColor: "#F8C0CA",
        marginTop: isMobile ? "20px" : "59px",
      }}
    />
  );

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>If you are a Victim of Blackmail</h1>
      {tips.map((tip, index) => (
        <div key={index} style={tipStyle}>
          {tip}
          {index < tips.length - 1 && border}
        </div>
      ))}
    </div>
  );
};

const ReportButton = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonStyle = {
    color: "white",
    backgroundColor: "#FF5E00",
    borderRadius: "8px",
    height: "auto",
    padding: isMobile ? "15px 20px" : "20px 30px",
    fontSize: isMobile ? "16px" : "20px",
    fontWeight: "bold",
    margin: "10px",
    whiteSpace: "normal",
    border: "none",
    cursor: "pointer",
    lineHeight: "1.6",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    width: isMobile ? "90vw" : "auto",
    maxWidth: "100%",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <a href="https://en.wikipedia.org/wiki/Main_Page" className="nav-link">
        <button style={buttonStyle}>
          Report incidents to the Lebanese Internal Security Forces
          <br />
          <span style={{ fontFamily: "'Amiri', serif" }}>
            بلغ عن الحوادث الى القوى الأمن الداخلي اللبناني
          </span>
          <br />
          Signaler les incidents aux Forces de sécurité intérieure libanaises
        </button>
      </a>
    </div>
  );
};

const InformationCard = ({ title, words = [], style = {}, hrStyle = {} }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    width: isMobile ? "90%" : "600px",
    maxWidth: "90%",
    borderRadius: isMobile ? "15px" : "20px",
    boxShadow: "0px 1px 5px 2px rgba(0, 0, 0, 0.3)",
    backgroundColor: "white",
    paddingBottom: isMobile ? "20px" : "40px",
    margin: isMobile ? "10px auto" : "20px auto",
    marginBottom: isMobile ? "40px" : "80px",
    overflow: "hidden",
    marginTop: "40px",
    ...style,
  };

  if (style.width === "860px" && isMobile) {
    containerStyle.width = "90%";
  }

  const wordStyle = isMobile
    ? {
        backgroundColor: "#40E0D0CC",
        color: "#005050",
        borderRadius: "18px",
        width: "90%",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "24px",
        margin: "20px 0",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }
    : {
        backgroundColor: "#40E0D0CC",
        color: "#005050",
        borderRadius: "18px",
        width: "350px",
        height: "83px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "24px",
        margin: "20px 0",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      };

  return (
    <div style={containerStyle}>
      <h1
        style={{
          fontSize: isMobile ? "36px" : "50px",
          paddingTop: isMobile ? "20px" : "40px", // reduced top padding
          paddingLeft: isMobile ? "15px" : "0",
          paddingRight: isMobile ? "15px" : "0",
          color: "#008B8B",
          fontWeight: "bold",
          textAlign: isMobile ? "center" : "inherit",
        }}
      >
        {title}
      </h1>
      <hr
        style={{
          color: "#40E0D0CC",
          height: "5px",
          width: isMobile ? "80%" : "92%",
          backgroundColor: "#40E0D0",
          border: "none",
          margin: "15px auto 20px auto",
          ...hrStyle,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: isMobile ? "15px" : "0",
          paddingRight: isMobile ? "15px" : "0",
        }}
      >
        {words.map((word, index) => (
          <div key={index} style={wordStyle}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

const PropertiesOfAStrongPassword = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const properties = [
    {
      title: "Long",
      description: "At least 12 characters long.",
    },
    {
      title: "Complicated",
      description:
        "Contains lower-case and upper-case letters, numbers, and symbols.",
    },
    {
      title: "Impersonal",
      description:
        "Does not contain your name, your children's names, your birthday, nicknames, etc.",
    },
    {
      title: "Secret",
      description:
        "Only you should know your password. Do not tell it to anyone, even your best friend.",
    },
    {
      title: "Unique",
      description: "Is not used on any other account.",
    },
  ];

  // DESKTOP SCREEN

  if (!isMobile) {
    return (
      <div
        style={{
          backgroundColor: "#FAEFF1",
          borderRadius: "20px",
          width: "1054px",
          height: "777px",
          margin: "40px auto",
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
          fontFamily: "Segoe UI",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: "64px",
            fontWeight: "700",
            textAlign: "center",
            paddingTop: "30px",
          }}
        >
          Properties of a Strong Password
        </div>
        <div
          style={{
            paddingTop: "45px",
            display: "flex",
            justifyContent: "center",
            marginLeft: "-40px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "125px",
              rowGap: "25px",
            }}
          >
            {properties.map((prop, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    width: "98px",
                    height: "98px",
                    borderRadius: "50%",
                    backgroundColor: "#008B8B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={"LockIcon.png"}
                    alt="lock icon"
                    style={{ width: "52.5px", height: "67.5px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h2 style={{ fontSize: "32px", margin: 0 }}>{prop.title}</h2>
                  <p
                    style={{
                      fontSize: "20px",
                      maxWidth: "280px",
                      marginTop: "5px",
                      fontWeight: "400",
                    }}
                  >
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#FFDAB9",
            height: "220px",
            width: "345px",
            borderRadius: "20px",
            bottom: "40px",
            left: "50%",
            transform: "translateX(33%)",
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              backgroundColor: "#FF6933",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "25px",
              position: "absolute",
              top: "-10px",
              left: "-10px",
            }}
          >
            !
          </div>
          <p
            style={{
              textAlign: "left",
              fontSize: "20px",
              width: "330px",
              alignItems: "center",
              fontWeight: "500",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            The strongest passwords also do not contain consecutive letters or
            numbers (123, abc), or letters that are consecutive on the keyboard
            (qwe, jkl).
          </p>
        </div>
      </div>
    );
  }

  // MOBILE SCREEN

  return (
    <div
      style={{
        backgroundColor: "#FAEFF1",
        borderRadius: "20px",
        width: "90%",
        margin: "20px auto",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
        fontFamily: "Segoe UI",
        position: "relative",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontSize: "32px",
          fontWeight: "700",
          textAlign: "center",
          paddingTop: "15px",
        }}
      >
        Properties of a Strong Password
      </div>

      <div
        style={{
          paddingTop: "25px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {properties
          .slice(0, Math.ceil(properties.length / 2))
          .map((prop, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  minWidth: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#008B8B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={"LockIcon.png"}
                  alt="lock icon"
                  style={{ width: "32px", height: "40px" }}
                />
              </div>
              <div>
                <h2 style={{ fontSize: "24px", margin: 0 }}>{prop.title}</h2>
                <p
                  style={{
                    fontSize: "16px",
                    marginTop: "5px",
                    fontWeight: "400",
                  }}
                >
                  {prop.description}
                </p>
              </div>
            </div>
          ))}

        <div style={{ position: "relative" }}>
          {properties.slice(Math.ceil(properties.length / 2)).map((prop, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  minWidth: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#008B8B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={"LockIcon.png"}
                  alt="lock icon"
                  style={{ width: "32px", height: "40px" }}
                />
              </div>
              <div>
                <h2 style={{ fontSize: "24px", margin: 0 }}>{prop.title}</h2>
                <p
                  style={{
                    fontSize: "16px",
                    marginTop: "5px",
                    fontWeight: "400",
                  }}
                >
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
          <div
            style={{
              backgroundColor: "#FFDAB9",
              borderRadius: "20px",
              padding: "20px 15px",
              marginTop: "10px",
              marginBottom: "10px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                backgroundColor: "#FF6933",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "20px",
                position: "absolute",
                top: "-10px",
                left: "-10px",
                zIndex: 2,
              }}
            >
              !
            </div>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                margin: 0,
              }}
            >
              The strongest passwords also do not contain consecutive letters or
              numbers (123, abc), or letters that are consecutive on the
              keyboard (qwe, jkl).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PasswordManager = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: isMobile ? "10px" : "0",
  };

  const containerStyle = {
    width: isMobile ? "100%" : "970px",
    fontSize: isMobile ? "16px" : "20px",
    lineHeight: "1.2",
  };

  const passwordManagersBanner = {
    margin: "auto",
    width: isMobile ? "90%" : "700px",
    height: isMobile ? "80px" : "117px",
    backgroundColor: "#008B8B",
    borderRadius: "20px",
    marginBottom: isMobile ? "40px" : "100px",
    alignContent: "center",
    textAlign: "center",
    color: "white",
    fontSize: isMobile ? "36px" : "64px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const mainTextStyle = {
    paddingLeft: isMobile ? "10px" : "0px",
  };

  const listContainerStyle = {
    paddingLeft: isMobile ? "30px" : "115px",
    marginTop: isMobile ? "20px" : "30px",
    width: isMobile ? "90%" : "540px",
    lineHeight: "1.2",
  };

  const iconColumnStyle = {
    width: "23px",
    flexShrink: 0,
  };

  const textColumnStyle = {
    fontSize: isMobile ? "16px" : "20px",
    fontWeight: "500",
  };

  const listItemWrapperStyle = {
    display: "flex",
    alignItems: "flex-start",
  };

  const iconStyle = {
    width: "15px",
  };

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <div style={passwordManagersBanner}>Password Managers</div>
        <p style={mainTextStyle}>
          It's important to use a different password for each of your accounts
          to keep your information safe. But remembering multiple complex
          passwords can be difficult! To help you, you can use a password
          manager.
        </p>
        <div style={listContainerStyle}>
          <div style={listItemWrapperStyle}>
            <div style={iconColumnStyle}>
              <img src={"CheckPhoto.png"} alt="check" style={iconStyle} />
            </div>
            <div style={textColumnStyle}>Generates complex passwords.</div>
          </div>
          <div style={listItemWrapperStyle}>
            <div style={iconColumnStyle}>
              <img src={"CheckPhoto.png"} alt="check" style={iconStyle} />
            </div>
            <div style={textColumnStyle}>Safely stores your passwords.</div>
          </div>
          <div style={listItemWrapperStyle}>
            <div style={iconColumnStyle}>
              <img src={"CheckPhoto.png"} alt="check" style={iconStyle} />
            </div>
            <div style={textColumnStyle}>
              Automatically fills in your username and password into websites
              and apps.
            </div>
          </div>
          <div style={listItemWrapperStyle}>
            <div style={iconColumnStyle}>
              <img src={"CheckPhoto.png"} alt="check" style={iconStyle} />
            </div>
            <div style={textColumnStyle}>
              Safely stores sensitive information such as credit card numbers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {
  MiniCard,
  PinkCard,
  TopBar,
  BottomBar,
  InfoPackWithButton,
  InfoPack,
  SmallButton,
  ExploreCard,
  PhishingExamples,
  Facts,
  Image,
  Remember,
  BlackmailHelp,
  ReportButton,
  InformationCard,
  PropertiesOfAStrongPassword,
  PasswordManager,
  WhyWouldSomeoneHackYou,
};
export default Card;
