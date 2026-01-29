document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const heading = document.querySelector('h1');
    
    let noClickCount = 0;
    const prompts = [
        "Will you be my Valentine?",
        "Are you sure?",
        "Really? Try again!",
        "Think about it...",
        "Please? 🥺",
        "The yes button is getting bigger...",
        "You know you want to click yes!",
        "Come on, just say yes!",
        "One more chance!",
        "Fine, I'll make it even BIGGER!"
    ];
    
    // No button shakes and spawns evil faces when hovered
    noButton.addEventListener('mouseenter', function () {
        noButton.classList.add('shake');
        generateEvilFaces();
    });
    
    // No button stops shaking when the mouse leaves
    noButton.addEventListener('mouseleave', function () {
        noButton.classList.remove('shake');
    });

    // No button click - makes yes button bigger and changes prompt
    noButton.addEventListener('click', function () {
        noClickCount++;
        
        // Change the prompt
        if (noClickCount < prompts.length) {
            heading.textContent = prompts[noClickCount];
        } else {
            heading.textContent = "JUST CLICK YES ALREADY! 💕";
        }
        
        // Make yes button bigger
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        const newSize = currentSize * 1.3;
        yesButton.style.fontSize = `${newSize}px`;
        yesButton.style.padding = `${newSize * 0.5}px ${newSize * 1}px`;
        
        // Add shake animation to yes button to draw attention
        yesButton.style.animation = 'none';
        setTimeout(() => {
            yesButton.style.animation = 'pulse 0.5s ease-in-out';
        }, 10);
    });

    // Yes button triggers confetti and music
    yesButton.addEventListener('click', function () {
        alert('Yay! Can’t wait for our date! ❤️');
        confetti();
        document.getElementById("background-music").play();
    });

    // Function to generate multiple evil face emojis
    function generateEvilFaces() {
        for (let i = 0; i < 5; i++) {
            let evilFace = document.createElement('div');
            evilFace.innerHTML = '😈';
            evilFace.classList.add('evil-face');
            document.body.appendChild(evilFace);
            
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            
            evilFace.style.left = `${x}px`;
            evilFace.style.top = `${y}px`;
            
            // Remove the emoji after 1 second
            setTimeout(() => {
                evilFace.remove();
            }, 1000);
        }
    }
});
