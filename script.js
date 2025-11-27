async function fetchNATData() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=nat&vs_currencies=usd&include_market_cap=true"
    );
    const data = await res.json();
    const nat = data.nat;

    document.getElementById("price").textContent =
      "Harga (USD): $" + nat.usd.toLocaleString(undefined, { minimumFractionDigits: 6 });
    document.getElementById("marketcap").textContent =
      "Market Cap: $" + nat.usd_market_cap.toLocaleString();
  } catch (err) {
    console.error("Gagal ambil data:", err);
  }
}

fetchNATData();
setInterval(fetchNATData, 10000); // update tiap 10 detik
