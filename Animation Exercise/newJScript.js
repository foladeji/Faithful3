let newSVG = document.querySelectorAll('path');

console.log(newSVG[1])

function setup() {

    anime({

        targets: newSVG[0],
        translateX: 250,
        //    strokeDashOffset: [offset, 0],
        duration: anime.random(1000, 3000),
        delay: anime.random(0, 2000),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        //    autoplay: false
    });

}

function mouseClicked() {
    console.log('Clicked')


    for (let index = 0; index < newSVG.length; index++) {
        let element = newSVG[index];


        anime({

            targets: element,
            translateX: 250,
            //    strokeDashOffset: [offset, 0],
            duration: anime.random(1000, 3000),
            delay: anime.random(0, 2000),
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine',
            //    autoplay: false
        });

    }
}
