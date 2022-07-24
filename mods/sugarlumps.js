Game.Notify("sugar lump mod - [todo: drink a lot of mtn dew and finish this dialogue]")
function earnSugarLumps() {
 Game.gainLumps(5) 
}
window.setInterval(function { earnSugarLumps() }, 1000)
