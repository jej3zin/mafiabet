let wallet = 1000000;

// loader fake
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  }, 1500);
};

// troca de menu
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

// aposta fake
function bet(amount) {
  if (wallet >= amount) {
    wallet -= amount;

    // resultado aleatório
    if (Math.random() > 0.5) {
      wallet += amount * 2;
      alert("Você ganhou 😎");
    } else {
      alert("Perdeu 😭");
    }

    updateWallet();
  } else {
    alert("Saldo insuficiente");
  }
}

function updateWallet() {
  document.getElementById("wallet").innerText =
    "R$ " + wallet.toLocaleString();
}