

var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .5}});

// menu Highlights
var instaScene = new ScrollMagic.Scene({triggerElement: "#what", duration: $('#what').height()})
        .setClassToggle( "nav ul li:nth-child(1) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#work", duration: $('#work').height()})
        .setClassToggle( "nav ul li:nth-child(2) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#serviceareas", duration: $('#serviceareas').height()})
        .setClassToggle( "nav ul li:nth-child(3) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#contact", duration: $('#contact').height()})
        .setClassToggle( "nav ul li:nth-child(4) a", "active")
        .addTo(controller);