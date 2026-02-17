import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const BASE = `${import.meta.env.VITE_MAIN_HOST_URL}`;
  const CRAW = `${import.meta.env.VITE_HOST_URL}`;
  const AUTH = `${import.meta.env.VITE_AUTH_HOST_URL}`;
  const DICE = `${import.meta.env.VITE_DICE_HOST_URL}`;
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_HOST_URL,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/user");
        if ("userId" in response.data) setLoggedIn(true);
      } catch (err) {}
    };
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/user/logout");
    } catch (e) {
      // ignore
    } finally {
      window.location.href = BASE;
    }
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(/images/simaptics_bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top bar */}
      <div style={styles.topBar}>
        <div style={{ fontWeight: "bold" }}>Simaptics</div>
        <div style={{ position: "relative" }}>
          {!loggedIn ? (
            <button
              style={styles.iconButton}
              title="Login"
              onClick={() => (window.location.href = AUTH)}
            >
              🔐
            </button>
          ) : (
            <>
              <button
                style={styles.iconButton}
                title="Account"
                onClick={() => setMenuOpen((v) => !v)}
              >
                ⚙️
              </button>
              {menuOpen && (
                <div style={styles.dropdown}>
                  <div
                    style={styles.dropdownItem}
                    onClick={() => (window.location.href = `${AUTH}/settings`)}
                  >
                    Settings
                  </div>
                  <div style={styles.dropdownItem} onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Main buttons */}
      <div style={styles.centerBlock}>
      <h1>Simaptics</h1>

      <button
        style={styles.button}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.40)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
        onClick={() => (window.location.href = `${CRAW}`)}
      >
        Crawler
      </button>

      <button
        style={styles.button}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.40)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
        onClick={() => (window.location.href = `${DICE}/`)}
      >
        Dice
      </button>

      <button
        style={styles.button}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.40)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.20)")}
        onClick={() => navigate("/about")}
      >
        About
      </button>
      </div>
    </div>
  );
};



// Styles
const styles: { [key: string]: React.CSSProperties } = {
  centerBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    // remove height and justifyContent so it doesn't center internally
  },
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // align content to top
    paddingTop: "10vh",           // push it down 10% from top
    gap: "12px",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    width: "220px",
    padding: "12px",
    fontSize: "16px",
    cursor: "pointer",
    background: "rgba(255, 255, 255, 0.20)",
    color: "black",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    borderRadius: "10px",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    transition: "all 0.2s ease",
  },
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    background: "rgba(0,0,0,0.3)",
    color: "white",
    backdropFilter: "blur(6px)",
  },
  iconButton: {
    fontSize: "22px",
    background: "rgba(255,255,255,0.2)",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: "8px",
    cursor: "pointer",
    padding: "8px 10px",
    color: "black",
  },
  dropdown: {
    position: "absolute",
    right: 0,
    top: "45px",
    background: "rgba(255,255,255,0.95)",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    minWidth: "140px",
  },
  dropdownItem: {
    padding: "10px 14px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    color: "black",
  },
};

export default Home;
