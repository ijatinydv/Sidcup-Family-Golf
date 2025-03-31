var crsr = document.querySelector("#cursor")
var crsr_blur = document.querySelector("#cursor-blur")
var h4all = document.querySelectorAll('#nav h4')

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = 'transparent'
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = '#95C11E'
    })
})

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30  +"px";
    crsr.style.top = dets.y + "px"
    crsr_blur.style.left = dets.x - 160+"px";
    crsr_blur.style.top = dets.y -160 + "px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration: 0.8,
    height: "88px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true, 
        start: "top -10%",
        end:"top -11%",
        scrub:3
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    duration:2,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -45%",
        end: "top 80%",
        scrub:3
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-100,
    x:-100,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 47%",
        scrub:2
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 57%",
        scrub:2
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller: "body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:1
    }
})