let menuVisible = false;
function mostrarOcultarMenu() {
    const nav = document.getElementById("navegacion");
    if (menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'public/RAMIREZ RAMIREZ JAIR ALEXANDREE CV.pdf'; 
    link.download = 'Curriculum Jair.pdf'; 
    link.click();
}

