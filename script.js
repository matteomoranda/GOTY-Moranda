document.addEventListener("DOMContentLoaded", () => {

  const output = document.getElementById('output');
  if (output) {
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get("nome") || "N/A";
    const email = urlParams.get("email") || "N/A";
    const anno = urlParams.get("anno") || "N/A";
    const valutazione = urlParams.get("valutazione");
    let commento = urlParams.get("commento") || "N/A";

    let iconaValutazione = '';
    if (valutazione === "like") {
      iconaValutazione = '<i class="fa-solid fa-thumbs-up" style="color:#4CAF50;"></i>';
    } else if (valutazione === "dislike") {
      iconaValutazione = '<i class="fa-solid fa-thumbs-down" style="color:#f44336;"></i>';
    }
    
    const giochiPerAnno = {
      "2020": "The Last of Us Part II",
      "2021": "It Takes Two",
      "2022": "Elden Ring",
      "2023": "Baldur's Gate 3",
      "2024": "Astro Bot",
      "2025": "Clair Obscur: Expedition 33"
    };
    let gioco = giochiPerAnno[anno];

    output.innerHTML =
      "<p><b>Nome:</b> " + nome + "</p>" +
      "<p><b>Email:</b> " + email + "</p>" +
      "<p><b>Anno:</b> " + anno + "</p>" +
      "<p><b>Gioco:</b> " + gioco + "</p>" +
      "<p><b>Valutazione:</b> " + iconaValutazione + "</p>" +
      "<p><b>Commento:</b> " + commento + "</p>";
  }

  // === Footer popup recensione ===
  const reviewBtn = document.getElementById("reviewBtn");
  const reviewPopup = document.getElementById("reviewPopup");
  const closePopup = document.getElementById("closePopup");
  const stars = document.querySelectorAll(".star");

  if (reviewBtn && reviewPopup && closePopup && stars.length > 0) {

    reviewBtn.addEventListener("click", () => {
      reviewPopup.style.display = "block";
    });

    closePopup.addEventListener("click", () => {
      reviewPopup.style.display = "none";
    });

    stars.forEach((star, index) => {
      star.addEventListener("mouseover", () => {
        stars.forEach(s => s.classList.remove("hovered"));
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add("hovered");
        }
      });

      star.addEventListener("mouseout", () => {
        stars.forEach(s => s.classList.remove("hovered"));
      });

      star.addEventListener("click", () => {
        stars.forEach(s => s.classList.remove("selected"));
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add("selected");
        }
        alert(`Hai valutato il sito con ${index + 1} stelle! Grazie per il tuo feedback!`);
      });
    });
  }

});