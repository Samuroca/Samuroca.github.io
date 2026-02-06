const noBtn = document.getElementById("no");
    const container = document.querySelector(".buttons");

    noBtn.addEventListener("mouseenter", () => {
      const maxX = container.clientWidth - noBtn.offsetWidth;
      const maxY = container.clientHeight - noBtn.offsetHeight;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      noBtn.style.left = x + "px";
      noBtn.style.top = y + "px";
    });

    noBtn.addEventListener("click", () => {
      const maxX = container.clientWidth - noBtn.offsetWidth;
      const maxY = container.clientHeight - noBtn.offsetHeight;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      noBtn.style.left = x + "px";
      noBtn.style.top = y + "px";
    });

    document.getElementById("yes").addEventListener("click", () => {
      document.body.innerHTML = "<h1>💘 Te amooo Sofi 💘</h1>";
    });
