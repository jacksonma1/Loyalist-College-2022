window.onscroll = function() {myFunction()};

$(".readmore-link").click( function(e) {
    // record if our text is expanded
    var isExpanded =  $(e.target).hasClass("expand");
    
    //close all open paragraphs
    $(".readmore.expand").removeClass("expand");
    $(".readmore-link.expand").removeClass("expand");
    
    // if target wasn't expanded, then expand it
    if (!isExpanded){
      $( e.target ).parent( ".readmore" ).addClass( "expand" );
      $(e.target).addClass("expand");  
    } 
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".containa"
});
gsap.to("#student1", {
    scrollTrigger:".two",
    duration: 1, ease:"none"
});
gsap.from("#bigcircle", {
    scrollTrigger:".one",
    delay:1,
    duration: 1, scale:0
});
gsap.from("#page2text", {
    scrollTrigger:".one",
    delay:1.5, opacity: 0,
    duration: 1, scale:0,
    ease:"bounce"
});
gsap.from("#page3dot", {
    scrollTrigger:".one",
    delay:2.5, opacity: 0,
    duration: 1, scale:0,
    ease:"bounce"
});
gsap.from("#page3text", {
    scrollTrigger:".one",
    delay:3, opacity: 0,
    duration: 0.5, scale:0,
    ease:"none"
});
gsap.to("#page2line", {
    scrollTrigger:".one",
    width:"43%", delay:2,
    duration: 0.5, ease:"none"
});
gsap.to(".two", {
    scrollTrigger:".one",
    delay:4,
    duration: 0,
    ease:"none", onComplete: showTwo
});
gsap.to("#page2line", {
    scrollTrigger:".two", opacity:0,
    duration: 0.5, ease:"none"
});
gsap.to("#bigcircle", {
    scrollTrigger:".two",
    y:"635.73px", x:"21.33px",
    duration: 2, ease:"bounce", onComplete: nextcircle
});
function nextcircle (){
    gsap.fromTo("#bigcircle", {y:"618.67px", x:"21.33px"}, {
        scrollTrigger:".two", y:"395px", x:"21.33px", delay: 0, duration: 1, ease:"elastic"
    })
    gsap.fromTo("#page2text", {y:"618.67px", x:"21.33px"}, {
        scrollTrigger:".two", y:"375.46px", x:"21.33px", delay: 0, duration: 1, ease:"elastic"
    })
}
function nextdot (){
    gsap.fromTo("#page3dot", {y:"874.67px"}, {scrollTrigger:".two", y:"1126.4px", delay:0, duration: 1, ease:"bounce"})
}
function showTwo (){
    $(document).ready(function() {
      $('#panel_two').css('display', 'block');
  });
}
function hideOne (){
    $(document).ready(function() {
      $('#panel_one').css('display', 'none');
  });
}
function hideTwo (){
    $(document).ready(function() {
      $('#panel_two').css('display', 'none');
  });
}
function showNoAnimation (){
    $(document).ready(function() {
        $('#no_animation').css('display', 'block');
    });
}
function hideNoAnimation (){
    $(document).ready(function() {
        $('#no_animation').css('display', 'none');
    });
}
function hideAnimation (){
    $(document).ready(function() {
        $('#animation').css('display', 'none');
    });
    hideNoAnimation ();
}
function closeAnimation (){
    hideOne();
    hideTwo();
    $(document).ready(function() {
        $('.containa').css('overflow', 'hidden');
    });
}
gsap.to("#page2text", {
    scrollTrigger:".two",
    y:"618.67px", x:"21.33px",
    duration: 2, ease:"bounce"
});
gsap.to("#page3dot", {
    scrollTrigger:".two",
    y:"874.67px",
    duration: 2, delay: 0, ease:"none", onComplete:nextdot
});
gsap.to("#page3text", {
    scrollTrigger:".two",
    y:"725.33px", x:"170.66px",
    duration: 3, ease:"none"
});
gsap.to("#page3text", {
    scrollTrigger:".two",
    opacity:0, delay: 1,
    duration: 0.2, ease:"none"
});
gsap.to("#seasaw", {
    scrollTrigger:".two",
    rotation:0, duration: 1, delay: 2, ease:"elastic"
})
gsap.from("#page5text", {
    scrollTrigger:".two", opacity: 0, delay: 3, duration: 1, ease:"none"
})
gsap.to("#page3dot", {
    scrollTrigger:".two",
    scale:25, delay: 5, duration: 1, ease:"none"
})
gsap.to("#logo2x2", {
    scrollTrigger:".two",
    opacity:1, delay: 6, duration: 1
})
gsap.to("#title2x2", {
    scrollTrigger:".two",
    opacity:1, delay: 6, duration: 1
})
gsap.to("#animation", {
  scrollTrigger:".two", delay: 7, duration: 0, onComplete: closeAnimation
})