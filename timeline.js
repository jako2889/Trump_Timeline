"use strict";

//GLOBALE VARIABLER -------------------------------

let allTruths;

// EMPTY array som man kan manipulere med uden at påvirke json
const arrayOfTruths = [];

// PROTOTYPE OBJECT til det tomme array, hvor vi kan tilføje elementer uden at påvirke json
const Truth = {
  id: "-full name-",
  title: "-house type-",
  text: "-text-",
  source: "-source-",

  setDATA(truth) {
       // sæt prototype lig med json elementer    
  this.id = truth.id;     
  this.title = truth.title;
  this.text = truth.text;
  this.source = truth.source;
  }
}

window.addEventListener("DOMContentLoaded", loadSVG);


// LOAD SVG TIMELINE AND CALL OTHER FUNCTIONS
function loadSVG() {
    console.log("LOAD THE SVG");

    fetch("DonalTrumpLies_Timeline-01.svg")
    .then(response => response.text())
    .then(svgdata => {

        document.querySelector("#svg_timeline").insertAdjacentHTML("afterbegin", svgdata);

        const svgElement = document.querySelector('#svg_timeline > svg');

        
        animateSVG(svgElement);
        getAllInfoboxes(svgElement);
        getJson();
    });

}

// HENTER JSON OG KALDER CREATEPROTOTYPE
function getJson() {
    fetch("sources.json")
    .then(response => response.json())
    .then(jsonDATA => {

        allTruths = jsonDATA;

        console.log("Non manipulation Json DATA: ",allTruths);
        
        createPrototype(allTruths);

    });
}

// CREATE PROTOTYPE FOR ARRAY OF JSON
function createPrototype(allTruths) {

    // FOR EACH LOOP til hver student, der skal printes til eget array - PROTOTYPE
    
    allTruths.forEach(truth => {

  // CREATE Prototype object og lav til variable - Uppercase er prototype og lowercase student object
     let truthProto = Object.create(Truth);
 
 // Tager funktionen/method fra min prototype array, der sætter data
 truthProto.setDATA(truth);
 
 
  // PUSH TIL eget array med prototype   
  arrayOfTruths.push(truthProto);

     
 });

 console.log("Manipulation array: ",arrayOfTruths);

}

// GET INFOBOXES AND ADD EVENTLISTNER FOR MODAL
function getAllInfoboxes(svgElement) {

    let infoboxes = svgElement.querySelectorAll('[id^="infobox"]');
    let infoxbox1 = svgElement.querySelector("#point1");

    // For EACH LOOP FOR "2-9 INFOBOXES AND SEPERATE FOR THE FIRST ONE / ADD STYLING
    infoxbox1.classList.add("infoboxStyles");
    infoxbox1.addEventListener("click",(event) => {
            
        event.preventDefault();
        ModalClicked(infoxbox1); 
    }); 

    infoboxes.forEach(infobox => {
        console.log("Box",infobox);

        infobox.classList.add("infoboxStyles");

        infobox.addEventListener("click",(event) => {
            
            event.preventDefault();
            ModalClicked(infobox); 
        }); 
    });

    document.querySelector(".description_box").addEventListener("click",(event) => {

        event.preventDefault();
        document.querySelector(".description_box").style.left = "-225px";

    });

}

function animateSVG(svgElement) {
    console.log("This is the timeline svg", svgElement);

    console.log("This is an element inside the svg ",svgElement.getElementById("point1"));

    
    setTimeout(function(){ document.querySelector(".description_box").style.left = "0"; }, 3000);

    let point1Text = svgElement.getElementById("point1").querySelector(".cls-83");
    let point1Ellipse = svgElement.getElementById("point1").querySelector("ellipse:nth-of-type(1)");
    let point1Circle = svgElement.querySelector('#trump > circle:nth-child(3)');
    let point1Line = svgElement.querySelector('#point1 > line');
    let Trump = svgElement.querySelector('#trump > g');

    console.log(point1Circle);
    console.log(point1Ellipse);

    setTimeout(function(){ point1Circle.style.opacity = "1"; }, 1000);

    setTimeout(function(){ Trump.style.transform = "translateY(0)"; }, 1000);

    setTimeout(function(){ point1Ellipse.style.opacity = "1"; }, 1500);
    
    setTimeout(function(){ point1Text.style.opacity = "1"; }, 2000);

    setTimeout(function(){ point1Line.style.opacity = "1";     point1Line.style.transform = "translateX(0)"; }, 2500);

    // Init ScrollMagic
    let controller = new ScrollMagic.Controller();

    // build scene for point 1 ------------------------------
    let point1 = new ScrollMagic.Scene({

        triggerElement: "#point1"

    })
    .setClassToggle("#point1", "dateAnimation") // Adds class to point1
    .addTo(controller);

    let point1_line = new ScrollMagic.Scene({

        triggerElement: "#point1_line"

    })
    .setClassToggle("#point1_line", "lineAnimation") // Adds class to point1_line
    .addTo(controller);

    // build scene for point 2 ------------------------------
    let point2 = new ScrollMagic.Scene({

        triggerElement: "#point2"

    })
    .setClassToggle("#point2", "dateAnimation") // Adds class to point2
    .addTo(controller);

    let point2_info = new ScrollMagic.Scene({

        triggerElement: "#point2"

    })
    .setClassToggle("#infobox2", "skewLeft") // Adds class to infobox2
    .addTo(controller);


    let point2_line = new ScrollMagic.Scene({

        triggerElement: "#point2_line"

    })
    .setClassToggle("#point2_line", "lineAnimation") // Adds class to point2_line
    .addTo(controller);


    // build scene for point 3 ------------------------------
    let point3 = new ScrollMagic.Scene({

        triggerElement: "#point3"

    })
    .setClassToggle("#point3", "dateAnimation") // Adds class to point3
    .addTo(controller);

    let point3_info = new ScrollMagic.Scene({

        triggerElement: "#point3"

    })
    .setClassToggle("#infobox3", "skewRight") // Adds class to infobox3
    .addTo(controller);


    let point3_line = new ScrollMagic.Scene({

        triggerElement: "#point3_line"

    })
    .setClassToggle("#point3_line", "lineAnimation") // Adds class to point3_line
    .addTo(controller);

    // build scene for point 4 ------------------------------
    let point4 = new ScrollMagic.Scene({

        triggerElement: "#point4"

    })
    .setClassToggle("#point4", "dateAnimation") // Adds class to point4
    .addTo(controller);

    let point4_info = new ScrollMagic.Scene({

        triggerElement: "#point4"

    })
    .setClassToggle("#infobox4", "skewLeft") // Adds class to infobox4
    .addTo(controller);

    let point4_line = new ScrollMagic.Scene({

        triggerElement: "#point4_line"

    })
    .setClassToggle("#point4_line", "lineAnimation") // Adds class to point4_line
    .addTo(controller); 
    
    // build scene for point 5 ------------------------------
    let point5 = new ScrollMagic.Scene({

        triggerElement: "#point5"
    
    })
    .setClassToggle("#point5", "dateAnimation") // Adds class to point5
    .addTo(controller);

    let point5_info = new ScrollMagic.Scene({

        triggerElement: "#point5"

    })
    .setClassToggle("#infobox5", "skewRight") // Adds class to infobox5
    .addTo(controller);
    
    let point5_line = new ScrollMagic.Scene({
    
        triggerElement: "#point5_line"
    
    })
    .setClassToggle("#point5_line", "lineAnimation") // Adds class to point5_line
    .addTo(controller);  

    // build scene for point 6 ------------------------------
    let point6 = new ScrollMagic.Scene({

        triggerElement: "#point6"
    
    })
    .setClassToggle("#point6", "dateAnimation") // Adds class to point6
    .addTo(controller);

    let point6_info = new ScrollMagic.Scene({

        triggerElement: "#point6"

    })
    .setClassToggle("#infobox6", "skewLeft") // Adds class to infobox6
    .addTo(controller);
    
    let point6_line = new ScrollMagic.Scene({
    
        triggerElement: "#point6_line"
    
    })
    .setClassToggle("#point6_line", "lineAnimation") // Adds class to point6_line
    .addTo(controller); 
    
    // build scene for point 7 ------------------------------
    let point7 = new ScrollMagic.Scene({

        triggerElement: "#point7"
    
    })
    .setClassToggle("#point7", "dateAnimation") // Adds class to point7
    .addTo(controller);

    let point7_info = new ScrollMagic.Scene({

        triggerElement: "#point7"

    })
    .setClassToggle("#infobox7", "skewRight") // Adds class to infobox7
    .addTo(controller);
    
    let point7_line = new ScrollMagic.Scene({
    
        triggerElement: "#point7_line"
    
    })
    .setClassToggle("#point7_line", "lineAnimation") // Adds class to point7_line
    .addTo(controller); 
    
    // build scene for point 8 ------------------------------
    let point8 = new ScrollMagic.Scene({

        triggerElement: "#point8"
    
    })
    .setClassToggle("#point8", "dateAnimation") // Adds class to point8
    .addTo(controller);
    
    let point8_info = new ScrollMagic.Scene({

        triggerElement: "#point8"

    })
    .setClassToggle("#infobox8", "skewLeft") // Adds class to infobox8
    .addTo(controller);
    
    let point8_line = new ScrollMagic.Scene({
    
        triggerElement: "#point8_line"
    
    })
    .setClassToggle("#point8_line", "lineAnimation") // Adds class to point8_line
    .addTo(controller);  

    // build scene for point 9 ------------------------------
    let point9 = new ScrollMagic.Scene({

        triggerElement: "#point9"
    
    })
    .setClassToggle("#point9", "dateAnimation") // Adds class to point9
    .addTo(controller);

    let point9_info = new ScrollMagic.Scene({

        triggerElement: "#point9"

    })
    .setClassToggle("#infobox9", "skewRight") // Adds class to infobox9
    .addTo(controller);
    
    let point9_line = new ScrollMagic.Scene({
    
        triggerElement: "#point9_line"
    
    })
    .setClassToggle("#point9_line", "lineAnimation") // Adds class to point9_line
    .addTo(controller);  

    // build scene for point 10 ------------------------------
    let point10 = new ScrollMagic.Scene({

        triggerElement: "#point10"
    
    })
    .setClassToggle("#point10", "dateAnimation") // Adds class to point10
    .addTo(controller);

}

// IF CLOSE BUTTON CLICKED
document.querySelector(".close").addEventListener("click", function(){

    document.querySelector(".modal").style.bottom = "-1150px";
    document.querySelector(".modal").style.background = "none";
    
  
  });   

function ModalClicked(infobox) {

    console.log("clicked infobox", infobox);
    document.querySelector(".modal").style.bottom = "0";
    setTimeout(function(){document.querySelector(".modal").style.background = "rgba(0, 0, 0, 0.2)";}, 1000);

    //IF STATEMENT - HAD TO GET STRING OF THE ID NUMBER FROM 2-9 AND MAKE ONE FOR POINT 1 BECAUSE OF BAD PLANNING IN DESIGN PHASE
    let infoboxNumber = infobox.id.toString().substring(7, 8);
    let point1Number = infobox.id.toString().substring(5, 6);

    arrayOfTruths.forEach(truth => {

        if(infoboxNumber === truth.id) {
            console.log("Number",infoboxNumber);
            document.querySelector(".description_box").style.left = "-225px";

            document.querySelector(".title").textContent = truth.title;
            document.querySelector(".text").textContent = truth.text;
            document.querySelector(".source_link").href = truth.source;
            document.querySelector(".image").src = "imgs/Trump" + infoboxNumber + ".jpg";
        }else if(point1Number === truth.id) {
            document.querySelector(".description_box").style.left = "-225px";

            document.querySelector(".title").textContent = truth.title;
            document.querySelector(".text").textContent = truth.text;
            document.querySelector(".source_link").href = truth.source;
            document.querySelector(".image").src = "imgs/Trump" + point1Number + ".jpg";
        }

    });

}
  