// the collection of animated paths

var animatedFills = [];
var animatedRects = [];
var animatedPolys = [];
// the boolean variable controlling the mouse button action
var animationPaused = true;

function setup() {

    // retrieve all the SVG  in the html
    var fillEls = document.querySelectorAll('path');
    var rectEls = document.querySelectorAll('rect');
    var polyEls = document.querySelectorAll('polygon');
    
    
    for (var i = 0; i < fillEls.length; i++)
    for (var j = 0; j < rectEls.length; j++)
    for (var k = 0; k < polyEls.length; k++) {

        // for each path
        var fillEl = fillEls[i];
        var rectEl = rectEls[j];
        var polyEL = polyEls[k];

        // Set an offset alonf the path. Here we use thge library anime.js !!Awesome library!!
        // see documentation here: http://animejs.com/documentation/
        //        var offset = anime.setDashoffset(fillEl);

        //        pathEl.setAttribute('stroke-dashoffset', offset);

        // Animation parameters
        let element = anime({
            targets: [rectEl,fillEl,polyEL],
            //            strokeDashoffset: [offset, 0],
            translateX: anime.random(-800, 800),
            translateY: anime.random(-800, 800),
            duration: 2000,
            delay: 1250,
            loop: true,
            direction: 'reverse',
            easing: 'easeInOutSine',
            autoplay: false,
            rotate: {
                value: 360,
                duration: 1500,
                easing: 'easeInOutExpo'
            },

        });
        element.pause()



        // storage of animated pats in a collection
        animatedFills.push(element);

    }

    let control = false;

    setInterval(function () {
        console.log(control)
        if (control) {
            for (let index = 0; index < animatedFills.length; index++) {
                animatedFills[index].play();
            }
        } else {
            for (let index = 0; index < animatedFills.length; index++) {
                animatedFills[index].pause();
            }

        }
        control = !control
    }, 3000)

}


function mouseClicked() {

    console.log("reproduction running: " + animationPaused);

    // mouse-controlled reproduction
    if (animationPaused) {
        for (let index = 0; index < animatedFills.length; index++) {
            animatedFills[index].play();
        }
    } else {
        for (let index = 0; index < animatedFills.length; index++) {
            animatedFills[index].pause();
        }
    }
    animationPaused = !animationPaused;

}
