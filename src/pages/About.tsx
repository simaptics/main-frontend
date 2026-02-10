import React from "react";

const About: React.FC = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={{ marginBottom: 12 }}>
            <span style={styles.badge}>WIP</span>
            <span style={styles.badge}>Personal Project</span>
          </div>
          <h1 style={styles.title}>Simaptics</h1>
          <p style={styles.subtitle}>
            <strong>Simple Map Tactics</strong> — a playground for ideas that
            combines video games, coding, DevOps, creating new things, and TTRPGs.
          </p>
        </div>
      </header>

      <main style={styles.container}>
        {/* About */}
        <section>
          <h2 style={styles.sectionTitle}>About</h2>
          <p>
            Simaptics is a personal project where I mix strategy, maps, tooling,
            and infrastructure into one evolving platform. It’s a space to
            experiment, build useful tools, and explore ideas that live somewhere
            between game development and real-world systems engineering.
          </p>

          <ul>
            <li>🎮 Video games</li>
            <li>💻 Coding</li>
            <li>☁️ DevOps</li>
            <li>🛠️ Creating new things</li>
            <li>🎲 TTRPGs</li>
          </ul>

          <div style={styles.warning}>
            <strong>Work in progress:</strong>
            <ul>
              <li>It’s rough in places</li>
              <li>I’ll be adding more over time</li>
              <li>Optimization is ongoing</li>
              <li>Expect downtime occasionally</li>
            </ul>
          </div>
        </section>

        {/* Codebase */}
       <section>
        <h2 style={styles.sectionTitle}>Codebase</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Main Page</h3>
            <div style={styles.techRow}>
              <span>TypeScript</span>
              <img src="/images/icons8-typescript-50.png" alt="TypeScript" title="TypeScript" style={styles.techLogoInvert} />
            </div>
            <div style={styles.linksRow}>
              <a href="https://github.com/simaptics/main-frontend" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span>•</span>
              <a href="https://simaptics.com" target="_blank" rel="noreferrer">
                simaptics.com
              </a>
            </div>
          </div>
      
          <div style={styles.card}>
            <h3>Dice</h3>
            <div style={styles.techRow}>TypeScript <img src="/images/icons8-typescript-50.png" alt="TypeScript" title="TypeScript" style={styles.techLogoInvert} /></div>
            <div style={styles.techRow}>Python <a href="http://www.djangoproject.com/"><img src="https://www.djangoproject.com/m/img/badges/djangomade124x25.gif" alt="Made with Django." title="Made with Django." style={styles.techLogo} /></a></div>
            <div style={styles.linksRow}>
              <a href="https://github.com/simaptics/dice-frontend" target="_blank" rel="noreferrer">
                GitHub - Frontend
              </a>
            </div>
            <div style={styles.linksRow}>
              <a href="https://github.com/simaptics/dice-backend" target="_blank" rel="noreferrer">
                GitHub - Backend
              </a>
            </div>
            <div style={styles.linksRow}>
              <a href="https://dice.simaptics.com" target="_blank" rel="noreferrer">
                dice.simaptics.com
              </a>
            </div>
          </div>
      
          <div style={styles.card}>
            <h3>Auth</h3>
            <div style={styles.techRow}>TypeScript <img src="/images/icons8-typescript-50.png" alt="TypeScript" title="TypeScript" style={styles.techLogoInvert} /></div>
            <div style={styles.techRow}>Python (Quart) <img src="/images/quart-name.svg" alt="Quart" style={styles.techLogo} /></div>
            <div style={styles.linksRow}>
              <span>AWS</span>
              <span>•</span>
              <a href="https://auth.simaptics.com" target="_blank" rel="noreferrer">
                auth.simaptics.com
              </a>
            </div>
          </div>
      
          <div style={styles.card}>
            <h3>Crawler</h3>
            <div style={styles.techRow}>TypeScript <img src="/images/icons8-typescript-50.png" alt="TypeScript" title="TypeScript" style={styles.techLogoInvert} /></div>
            <div style={styles.techRow}>Python (flask) <img src="/images/icons8-flask-64.png" alt="Flask" style={styles.techLogoInvert} /></div>
            <ul>
              <li>Crawler <img src="/images/icons8-flask-64.png" alt="Flask" style={styles.techLogoInvert} /></li>
              <li>Cartographer <img src="/images/icons8-flask-64.png" alt="Flask" style={styles.techLogoInvert} /></li>
              <li>Keeper <img src="/images/icons8-flask-64.png" alt="Flask" style={styles.techLogoInvert} /></li>
            </ul>
            <div style={styles.linksRow}>
              <span>AWS</span>
              <span>•</span>
              <a href="https://crawler.simaptics.com" target="_blank" rel="noreferrer">
                crawler.simaptics.com
              </a>
            </div>
          </div>
        </div>
      </section>


        {/* Stack */}
        <section>
          <h2 style={styles.sectionTitle}>Stack</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3>Kubernetes (kops) <img src="/images/icons8-kubernetes-48.png" alt="Flask" style={styles.techLogo} /></h3>
              <ul>
                <li>Python microservices <img src="/images/icons8-python-48.png" alt="Flask" style={styles.techLogo} /></li>
                <li>Nginx Ingress <img src="/images/icons8-nginx-24.png" alt="Flask" style={styles.techLogo} /></li>
                <li>Redis <img src="/images/icons8-redis-48.png" alt="Flask" style={styles.techLogo} /></li>
              </ul>
            </div>

            <div style={styles.card}>
              <h3>Frontend</h3>
              <ul>
                <li>S3 <img src="/images/icons8-s3-48.png" alt="Flask" style={styles.techLogo} /></li>
              </ul>
            </div>

            <div style={styles.card}>
              <h3>Data</h3>
              <ul>
                <li>RDS Postgres <img src="/images/icons8-postgres-48.png" alt="Flask" style={styles.techLogo} /></li>
                <li>DynamoDB</li>
              </ul>
            </div>
          </div>
        </section>

        <button style={styles.backButton} onClick={() => window.history.back()}>
          ← Back
        </button>
      </main>
      <div style={styles.footerLink}>
        <a
          href="https://icons8.com"
          target="_blank"
          rel="noreferrer"
          style={styles.footerLinkAnchor}
        >
          Icons by  Icon8
        </a>
      </div>
      
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(1200px 600px at 20% -10%, #0b2a3a 0%, #0f172a 60%)",
    color: "#e5e7eb",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  },
  header: {
    padding: "3rem 1.5rem 2rem",
    borderBottom: "1px solid #1f2933",
    background: "linear-gradient(180deg, rgba(56,189,248,0.08), transparent 70%)",
  },
  container: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 1.5rem",
  },
  title: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    margin: "0 0 0.5rem 0",
  },
  subtitle: {
    color: "#9ca3af",
    maxWidth: 700,
  },
  sectionTitle: {
    marginTop: "2.5rem",
    marginBottom: "1rem",
    fontSize: "1.6rem",
    borderLeft: "4px solid #38bdf8",
    paddingLeft: "0.75rem",
  },
  badge: {
    display: "inline-block",
    padding: "0.25rem 0.6rem",
    borderRadius: 999,
    fontSize: "0.75rem",
    fontWeight: 600,
    background: "rgba(56,189,248,0.15)",
    color: "#38bdf8",
    border: "1px solid rgba(56,189,248,0.3)",
    marginRight: 8,
  },
  warning: {
    background: "rgba(245,158,11,0.1)",
    border: "1px solid rgba(245,158,11,0.4)",
    color: "#fde68a",
    padding: "1rem",
    borderRadius: 12,
    margin: "1.5rem 0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1rem",
  },
  card: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
    border: "1px solid #1f2933",
    borderRadius: 12,
    padding: "1rem 1.1rem",
  },
  backButton: {
    marginTop: "3rem",
    padding: "0.6rem 1rem",
    borderRadius: 8,
    border: "1px solid #38bdf8",
    background: "transparent",
    color: "#38bdf8",
    cursor: "pointer",
    fontSize: "1rem",
  },
  techRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  
  techLogo: {
    height: 28,
    maxWidth: 120,
    objectFit: "contain",
  },
  
  techLogoInvert: {
    height: 28,
    maxWidth: 120,
    objectFit: "contain",
    filter: "brightness(0) invert(1)",
  },
  
  linksRow: {
    display: "flex",
    gap: 8,
    alignItems: "center",
    marginTop: 8,
  },
  
  // optional: make links look nicer
  link: {
    color: "#38bdf8",
    textDecoration: "none",
  },
  
  footerLink: {
    marginTop: "4rem",
    textAlign: "center",
    opacity: 0.7,
  },
  
  footerLinkAnchor: {
    fontSize: "0.7rem",
    color: "#9ca3af",
    textDecoration: "none",
  },

};

export default About;
