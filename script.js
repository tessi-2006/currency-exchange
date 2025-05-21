const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    if (!player.classList.contains("jump")) {
      player.classList.add("jump");
      setTimeout(() => {
        player.classList.remove("jump");
      }, 500);
    }
  }
});

setInterval(() => {
  const playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));

  if (obstacleLeft > 550 && obstacleLeft < 600 && playerBottom <= 50) {
    alert("Game Over!");
    window.location.reload();
  }
}, 10);
