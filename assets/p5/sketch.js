var cnv;
var airplanesMenu;
var bellsMenu;
var ghostbeesMenu;
var sapphireMenu;
var spaceinvasionMenu;
function preload() {
    airplanes = loadSound('assets/sounds/airplanes.mp3');
    bells = loadSound('assets/sounds/bells and crackle.mp3');
    ghostbees = loadSound('assets/sounds/ghost bees.m4a');
    sapphire = loadSound('assets/sounds/Sapphire Clouds.mp3');
    spaceinvasion = loadSound('assets/sounds/space invasion.mp3');
}

function setup() {
    var cnv = createCanvas(500, 400);
    background(75, 255, 150);
    cnv.parent('container');
    fill(0);
    text('Airplanes', 30, 10);
    text('Bells and Crackle', 30, 80);
    text('Ghost Bees', 30, 150);
    text('Sapphire Clouds', 30, 230);
    text('Space Invasion', 30, 310);
    airplanesMenu = new soundMenu(airplanes, 30, 40);
    bellsMenu = new soundMenu(bells, 30, 110);
    ghostbeesMenu = new soundMenu(ghostbees, 30, 180);
    sapphireMenu = new soundMenu(sapphire, 30, 260);
    spaceinvasionMenu = new soundMenu(spaceinvasion, 30, 340);
}

function draw() {
    render();
}