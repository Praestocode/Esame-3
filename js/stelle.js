document.addEventListener("DOMContentLoaded", function() {
  const numStars = 80;
  const stars = document.getElementById("stars");

  for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`; //Delay dell'animazione (messo in maniera casuale)

      stars.appendChild(star);

      setTimeout(() => {
          star.style.opacity = 1;
      }, 100 * i);
  }
});