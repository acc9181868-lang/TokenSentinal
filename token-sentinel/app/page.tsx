import AlertFeed from "../components/AlertFeed";

export default function Home() {
  return (
    <main className="container">
      <nav className="nav">
        <div className="logo"><span className="logo-dot" /> Token Sentinel</div>
        <div className="badge">Any token. Any wallet. Real-time alerts.</div>
      </nav>

      <section className="hero">
        <div className="card hero-card">
          <div className="badge">MVP v1 • Ethereum + Base first</div>
          <h1>Whale alerts for any token.</h1>
          <p className="lead">
            Track large transfers, exchange flows, burn events, holder changes, and smart-wallet activity by entering any token contract address.
          </p>
          <div className="search">
            <input placeholder="Paste token contract address: 0x..." />
            <button className="btn">Scan Token</button>
          </div>
        </div>
        <AlertFeed />
      </section>

      <section className="grid">
        <div className="card stat"><small>Chains planned</small><strong>5+</strong></div>
        <div className="card stat"><small>Alert types</small><strong>12</strong></div>
        <div className="card stat"><small>AI confidence</small><strong>Live</strong></div>
        <div className="card stat"><small>Status</small><strong>Beta</strong></div>
      </section>

      <section className="features">
        <div className="card feature"><h3>🐋 Whale Tracker</h3><p>Detect large wallet moves, whale buys, sells, and transfers across supported chains.</p></div>
        <div className="card feature"><h3>🏦 Exchange Flows</h3><p>Watch inflows and outflows from known exchange wallets to spot possible accumulation or sell pressure.</p></div>
        <div className="card feature"><h3>🧠 AI Explanations</h3><p>Every alert gets a simple explanation so users understand why the event may matter.</p></div>
      </section>

      <p className="footer">Token Sentinel is an analytics and alerting tool. It is not financial advice.</p>
    </main>
  );
}
