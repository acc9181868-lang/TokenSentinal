const alerts = [
  { icon: "🐋", title: "Whale Transfer Detected", desc: "2,450 ETH moved from wallet 0x8f…92c1 to Binance", score: "91" },
  { icon: "🏦", title: "Exchange Outflow", desc: "Large LINK outflow from Coinbase custody wallet", score: "84" },
  { icon: "🔥", title: "Burn Event", desc: "Token burn detected on Base ERC-20 contract", score: "78" },
  { icon: "🧠", title: "Smart Wallet Accumulation", desc: "Wallet with profitable history bought AAVE across 3 transactions", score: "88" },
  { icon: "⚡", title: "Unusual Volume Spike", desc: "Transfer volume is 4.7x higher than the 7-day average", score: "82" },
];

export default function AlertFeed() {
  return (
    <div className="card dashboard">
      <div className="section-title">
        <h2>Live Token Intelligence</h2>
        <span className="live">● LIVE DEMO</span>
      </div>
      {alerts.map((alert) => (
        <div className="alert" key={alert.title}>
          <div className="icon">{alert.icon}</div>
          <div>
            <b>{alert.title}</b>
            <p>{alert.desc}</p>
          </div>
          <div className="score">{alert.score}</div>
        </div>
      ))}
    </div>
  );
}
