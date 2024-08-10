var audio=new Audio('Co3.mp3'); 


var heart = document.querySelectorAll(".heart");

for (var i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function() {
        var k = this.innerHTML;
        console.log(k);
        Something(k);
    });
}

function Something(z) {
    switch (z) {
        case "K":
            audio.play();
            break;
            
 
    case "E":
        popupContainer.style.display = "flex";
        break;

     case "Z":
            popuptwoContainer.style.display="flex"
    
        break;

  case "I":
    popupthreeContainer.style.display="flex"
    break;

    case"A":
    popupfourContainer.style.display="flex"
    break;

    case "H":
        popupfiveContainer.style.display="flex"
        break;

}
}

closeBtn.addEventListener("click", function() {
    popupContainer.style.display = "none";
});


popupContainer.addEventListener("click", function(event) {
    if (event.target === popupContainer) {
        popupContainer.style.display = "none";
    }
});
closetwoBtn.addEventListener("click", function() {
    popuptwoContainer.style.display = "none";
});


popuptwoContainer.addEventListener("click", function(event) {
    if (event.target === popuptwoContainer) {
        popuptwoContainer.style.display = "none";
    }
});
closethreeBtn.addEventListener("click", function() {
    popupthreeContainer.style.display = "none";
});


popupthreeContainer.addEventListener("click", function(event) {
    if (event.target === popupthreeContainer) {
        popupthreeContainer.style.display = "none";
    }
});


closefourBtn.addEventListener("click", function() {
    popupfourContainer.style.display = "none";
});


popupfourContainer.addEventListener("click", function(event) {
    if (event.target === popupfourContainer) {
        popupfourContainer.style.display = "none";
    }
});

closefiveBtn.addEventListener("click", function() {
    popupfiveContainer.style.display = "none";
});


popupfiveContainer.addEventListener("click", function(event) {
    if (event.target === popupfiveContainer) {
        popupfiveContainer.style.display = "none";
    }
});

