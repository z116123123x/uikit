//初始化
TweenMax.set(".box1", {
    x: 20,
    y: 80,
    background: "#f20"
});
TweenMax.set(".box2", {
    x: 50,
    y: 190,
    background: "#de2"
});

//動畫
TweenMax.from(".box3", 1.6, {
    x: 50,
    y: 789,
    ease: Power3.easeInOut
});

TweenMax.to(".box4", 1, {
    x: 140,
    y: 0,
    // rotationY: 360,
    rotationX: 360,
    boxShadow: "0px 0px 20px red",
    scale: 2,
    delay: 2,
    repeat: 3,
    repeatDelay: 2,
    yoyo: true,
    alpha: 0,
    ease: Power3.easeInOut
});


var tl = new TimelineMax({
    repeat: 1,
    repeatDelay: 3
});

tl.add(TweenMax.from(".box1", 0.8, {
    x: 50,
    y: 789,
    ease: Circ.easeInOut
}));
tl.add(TweenMax.from(".box2", 1, {
    x: 50,
    y: 400,
    ease: Power3.easeInOut
}));

//有時間的順序，可以用 staggerFrom or staggerTo  這兩個就沒有時間順序 yoyo這時候沒有用途
TweenMax.staggerFromTo('.circle', 2, {
    x: -15,
    opacity: 0,
}, {
    x: 0,
    rotationY: 360, //旋轉
    ease: Elastic.easeOut.config(2, 0.3),
    opacity: 1,
    repeat: 2,
    repeatDelay: 1,
    yoyo: true
}, 0.4);

console.log('sec2 ok');



$('.button').on('click', function () {
    TweenMax.staggerFromTo('.line', 2.5, {
        scaleY: 3,
    }, {
        scaleY: 1,
        // -1值是一直重複
        // repeat: -1,
        ease: Elastic.easeOut
    }, 0.1);

});


TweenMax.fromTo('.fullwidth', 6, {
    height: '0%',
}, {
    height: '100%',
    // scaleY: '160%',
    ease: Expo.easeOut
});

//tweenmax option 使用方式

TweenMax.to('.box9', 1, {
    x: '0',
    // rotationY: 720,
    rotationX: 360,
    //定位點
    transformOrigin: '80px 10px',
    // autoAlpha: 1,
    // repeat: 2,
    // delay: 2
    className: "+=box10"
});

//設定變數
var points = [{
    x: 100,
    y: 200
}, {
    x: 250,
    y: 20
}, {
    x: 400,
    y: 50
}];

TweenMax.to('.box10', 1, {
    bezier: {
        curviness: 1.25,
        values: points,
        autoRotate:true
    },
    ease: Power1.easeOut
});

//改變svg的屬性
TweenMax.to('#rects', 4, {
    attr: {
        width:1000,
        height: 300
    }   
});




console.log('end ok');