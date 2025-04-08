// Piešķir canvas elementam identifikātoru "snow"
const canvas = document.getElementById("snow");

// Nosaka 2D dimensiju
const ctx = canvas.getContext("2d");

// Nosaka mājaslapas izmēru, atkarīgi no ekrāna lieluma
canvas.width = window.innerWidth; // Mājaslapas platums (atkarībā no ekrāna lieluma)
canvas.height = window.innerHeight; // Mājaslapas augstums (atkarībā no ekrāna lielumu)


//Izveido sniegpāŗšliņas
const snowflakes = [];
// Sniegpārsliņas krīt 200 reizē, un atkārtojas 200 reizes
for (let i = 0; i < 200; i++) {
    //Nosaka sniegpārsliņu pozīcijas, lielumu pikseļos un krišanas ātrumu
    snowflakes.push({
        x: Math.random() * canvas.width, // Horizontālā pozīcija
        y: Math.random() * canvas.height, // Vertikālā pozīcija
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5, // Sniegpārsliņu krišanas ātrums
    });
}


function drawSnowflakes() {
    //Notīra laukumu lai sniegpārslas nepārklājas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach((flake) => {
        //Iedod sniegpārslā spīdošu effektu
        const gradient = ctx.createRadialGradient(
            flake.x,
            flake.y,
            0,
            flake.x,
            flake.y,
            flake.radius
        );
        // Sniegpārslu spožums izgaist no centra uz āru
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        // Nosaka sniegpārslu krišanas ceļu (Path), izveiudo sniegpāŗslas formu(Flake) un iedod spīdumu (Fill)
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}




function updateSnowflakes() {
    snowflakes.forEach((flake) => {
        flake.y += flake.speed; // Kustēšanās atkarībā no ātruma.
        if (flake.y > canvas.height) { // Atjauno sniegpārslu krišanu no lapas augšpuses pēc tam, kad tā nokrīt līdz lejai.
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
        }
    });
}

//Animāicijas atkārtošanās 
function animate() {
    drawSnowflakes(); // Uzzīmē sniegpārsliņu pašreizējo izskatu
    updateSnowflakes(); // Atjauno pozīciju nākamajam kritienam
    requestAnimationFrame(animate); // Nodrošina gludu un vienmērīgu animāciju
}

animate();
