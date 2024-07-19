document.addEventListener("DOMContentLoaded", function() {

    const MARGIN = 50;
    const divs = []; 

    function createDiv() {
        const div = document.createElement("div");
        div.className = "mira";
        document.getElementById("container").appendChild(div);
        divs.push(div);  
        div.addEventListener("click", function() {
            setRandomPosition(div); 
        });
        setRandomPosition(div); 
    }
    
    function setRandomPosition(div) {
        const randomX = Math.random() * (window.innerWidth - 2 * MARGIN) + MARGIN;
        const randomY = Math.random() * (window.innerHeight - 2 * MARGIN) + MARGIN;
        div.style.left = `${randomX}px`;
        div.style.top = `${randomY}px`;
        
    }

    createDiv();
    createDiv();
    createDiv();

    function resetPositions() {
        divs.forEach(function(div) {
            setRandomPosition(div); 
        });
    }

    let countdown = 10;
    const timerDisplay = document.getElementById("timer");
    
    function updateTimer() {
        timerDisplay.textContent = `Temporizador: ${countdown}s`;
        countdown--;
        if (countdown < 0) {
            countdown = 10;
            resetPositions(); 
        }
    }
    
    setInterval(updateTimer, 1000); 

    window.addEventListener("resize", function() {
        resetPositions(); 
    });

});
