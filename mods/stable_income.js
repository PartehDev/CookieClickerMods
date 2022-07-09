let Curincome = 0
if(localStorage.getItem("income")) {
  Curincome = localStorage.getItem("income"));
} else {
  Curincome = 1;
  localStorage.setItem("income",Curincome);
}
game.Notify("Stable Income Mod loaded, and counter all ready.")
window.setInterval(function () { Game.Earn(Curincome) window.setInterval(function () { Curincome += 1;localStorage.setItem("income",Curincome); }, 500)}, 500)
