let controller = new ScrollMagic.Controller();

let images = [
		"img/example_imagesequence_01.png",
		"img/example_imagesequence_02.png",
		"img/example_imagesequence_03.png",
		"img/example_imagesequence_04.png",
		"img/example_imagesequence_05.png",
		"img/example_imagesequence_06.png",
		"img/example_imagesequence_07.png",
	];

let obj = {
    curImg: 0
};

// create tween
let animacioConill = TweenMax.to(obj, 0.5, {
    curImg: images.length - 1,      // animate propery curImg to number of images
    roundProps: "curImg",           // only integers so it can be used as an array index
    repeat: 12,                      // repeat 3 times
    immediateRender: true,          // load first image automatically
    ease: Power0.easeNone,          // show every image the same ammount of time
    onUpdate: function () {
        //$("#conill").attr("src", images[obj.curImg]); // set the image source
        document.getElementById("conill").src = images[obj.curImg];
    }
});


new ScrollMagic.Scene({
        triggerElement: "#contenidorConill",
        triggerHook: 1,
        duration: "200%"
    })
    .setTween(animacioConill)
    //.setPin("#contenidorConill")
    .addIndicators()
    .addTo(controller);
