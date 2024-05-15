function colorchange() {
    var button = document.getElementById("web-color");
    var ball = document.getElementById("ball");
    var currentColor = window.getComputedStyle(button).getPropertyValue("background-color");
    

    window.addEventListener('scroll', function() {
        const nav = document.getElementById('web-color-section');
        if (window.scrollY > 70) {
            nav.classList.style.backgroundColor = "rgb(30, 36, 51)";
        } else {
            nav.classList.remove('scrolled');
        }
    });

    if (currentColor === "rgb(30, 36, 51)") {
        // light
        document.getElementById("web-color").style.backgroundColor = "rgb(57,100,255)";
        document.getElementById("web-color").style.border = "solid black 1px";
            
            var buttons = document.getElementsByClassName("nav-button");
            for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.color = "black";}

        document.body.style.backgroundColor = "rgb(255,251,252)";
        ball.style.left = "0";

            var elements = document.querySelectorAll(".intro, .description, .about");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.color = "black";
            }

            var section1Items = document.querySelectorAll('#section1 li, #section1 h2');
            for (var i = 0; i < section1Items.length; i++) {
                section1Items[i].style.color = 'black'; 
            }
            
            var section2Items = document.querySelectorAll('#section2 a, #section2 h2');
            for (var i = 0; i < section2Items.length; i++) {
                section2Items[i].style.color = 'black';
            }

            var imageButtons = document.querySelectorAll('#image-button img');
            for (var i = 0; i < imageButtons.length; i++) {
            imageButtons[i].style.filter = 'invert(0)';
            }
            
            var section3Items = document.querySelectorAll('#section3 p, #section3 h2');
            for (var i = 0; i < imageButtons.length; i++) {
            section3Items[i].style.color = 'black';
            section3Items[1].style.border = 'dashed 1px black';
            }

    } 
    else {
        // dark
        document.getElementById("web-color").style.backgroundColor = "rgb(30, 36, 51)";
        document.getElementById("web-color").style.border = "solid white 1px";
        
            var buttons = document.getElementsByClassName("nav-button");
            for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.color = "white";}
        
        document.body.style.backgroundColor = "rgb(18,24,40)"; 
        ball.style.left = "50%";

            var elements = document.querySelectorAll(".intro, .description, .about");
            for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = "white";
        }

        var section1Items = document.querySelectorAll('#section1 li, #section1 h2');
        for (var i = 0; i < section1Items.length; i++) {
            section1Items[i].style.color = 'white';
        }
        
        var section2Items = document.querySelectorAll('#section2 a, #section2 h2');
        for (var i = 0; i < section2Items.length; i++) {
            section2Items[i].style.color = 'white';
        }
        
        var imageButtons = document.querySelectorAll('#image-button img');
        for (var i = 0; i < imageButtons.length; i++) {
        imageButtons[i].style.filter = 'invert(1)';
        }
        
        var section3Items = document.querySelectorAll('#section3 p, #section3 h2');
            for (var i = 0; i < imageButtons.length; i++) {
            section3Items[i].style.color = 'white';
            section3Items[1].style.border = 'dashed 1px white';
            }
    }
}

