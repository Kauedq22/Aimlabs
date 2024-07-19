document.addEventListener("DOMContentLoaded", function() {

    const containerModal = document.querySelector(".container-modal");
    const MARGIN = 50;
    const divs = []; 
    let points = 0;

    const openModal = (p) => {
        let rating;

        if (p < 40) {
            rating = "Trash";
        } else if (p >= 40 && p <= 70) {
            rating = "Ok";
        } else if (p > 70) {
            rating = "addicted";
        }


        const htmlModal = `<div id="modal">
                                <h2>Your results:</h2>
                                <p>Your points: ${p}</p>
                                <p>Your rating: ${rating}</p>
                            </div>
                            <button id="close">Close</button>`;

        containerModal.innerHTML = htmlModal;
        containerModal.style.display = "flex";


        document.getElementById("close").addEventListener("click", () => {
            containerModal.style.animation = "1s Disappear forwards";
            setTimeout(() => {
                location.reload();
            }, 1000);
        });
    }

    function createDiv() {
        const div = document.createElement("div");
        div.className = "mira bi bi-bullseye";
        document.getElementById("container").appendChild(div);
        divs.push(div);  

        div.addEventListener("click", () => {
            points++;
            document.getElementById("points").textContent = `Points: ${points}`;
            setRandomPosition(div); 
        });

        setRandomPosition(div); 
    }
    
    function setRandomPosition(div) {
        const randomX = Math.random() * (window.innerWidth - 2 * MARGIN) + MARGIN;
        const randomY = Math.random() * (window.innerHeight - 2 * MARGIN) + MARGIN;
        div.style.left = `${randomX}px`;
        div.style.top = `${randomY}px`;
        div.style.color = "black"

        setTimeout(() => {
            div.style.color = "red"
        }, 800)
    }


    function resetPositions() {
        divs.forEach(function(div) {
            setRandomPosition(div); 
        });
    }

    let countdown = 30;
    const timerDisplay = document.getElementById("timer");
    
    function updateTimer() {  
        timerDisplay.textContent = `Temporizador: ${countdown}s`;
        countdown--;
        if (countdown < 0) {
            openModal(points);
            countdown = 30;
            points = 0;
            resetPositions(); 
            document.getElementById("points").textContent = `Points: ${points}`;
            
            
        }
    }

    setInterval(updateTimer, 1000); 

    window.addEventListener("resize", resetPositions()); 

    createDiv();
    createDiv();

});
