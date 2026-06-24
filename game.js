let score = 0;
let timeLeft = 60;
let gameRunning = false;

const coin = document.getElementById("coin");

async function connectWallet() {

    if (!window.ethereum) {
        alert("Please install MetaMask");
        return;
    }

    const accounts = await ethereum.request({
        method: "eth_requestAccounts"
    });

    document.getElementById("wallet").innerText =
        "Wallet: " +
        accounts[0].substring(0,6) +
        "..." +
        accounts[0].substring(38);
}

document
.getElementById("connectBtn")
.addEventListener("click", connectWallet);
