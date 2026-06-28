// Database of professional signals provided by Monty_FX
const montySignals = [
    { asset: "🟡 XAUUSD (Gold)", type: "BUY", strategy: "⚡ Scalping", entry: "4088.20", status: "Active Target" },
    { asset: "📊 NAS100 (Nasdaq)", type: "SELL", strategy: "🕒 Interday", entry: "19620.00", status: "Active Target" },
    { asset: "🇺🇸 SPX500 (S&P 500)", type: "BUY", strategy: "🌊 Swing Trade", entry: "5430.50", status: "Active Target" },
    { asset: "🛢️ USOIL (US Oil)", type: "SELL", strategy: "⚡ Scalping", entry: "78.40", status: "Active Target" }
];

// Function to print trading rows down into our HTML view
function loadSignals() {
    const tableBody = document.querySelector("#signal-table tbody");
    tableBody.innerHTML = ""; // Clear existing placeholder info

    montySignals.forEach(signal => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td style="font-weight: 600;">${signal.asset}</td>
            <td style="color: ${signal.type === 'BUY' ? '#00e676' : '#ff1744'}; font-weight: bold;">${signal.type}</td>
            <td>${signal.strategy}</td>
            <td style="font-family: monospace;">${signal.entry}</td>
            <td><span class="badge-active">${signal.status}</span></td>
        `;

        tableBody.appendChild(row);
    });
}

// Fire data transmission as soon as the screen initializes
document.addEventListener("DOMContentLoaded", loadSignals);
