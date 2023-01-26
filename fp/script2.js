gsap .set("#scam",{
    top:"120vh"
})

gsap.to("#scam",{
    scrollTrigger:{
        trigger:"#two",
        start:"top 100%",
        // markers:true,
        end:"top 70%",
        scrub:4

    },
    top: "-10%",
    duration:1,
    rotate:"-90deg",
    ease:Power0.easeInOut
})

gsap.to("#frst",{
    scrollTrigger:{
        trigger:"#two",
        start:"top 100%",
        // markers:true,
        end:"30% 10%",
        scrub:2

    },
    // top: "-10%",
    // duration:1,
    rotate:"720deg",
    ease:Power2.easeInOut
})

gsap.to("#mid",{
    scrollTrigger:{
        trigger:"#two",
        start:"top 100%",
        // markers:true,
        end:"30% 10%",
        scrub:3

    },
   
    rotate:"-420deg",
    ease:Power2.easeInOut
})

gsap.to("#lst",{
    scrollTrigger:{
        trigger:"#two",
        start:"top 100%",
        // markers:true,
        end:"30% 10%",
        scrub:2

    },
    
    rotate:"620deg",
    ease:Power2.easeInOut
})

gsap.to("#incecl",{
    scrollTrigger:{
        trigger:"#two",
        start:"top 70%",
        // markers:true,
        end:"10% 10%",
        scrub:4

    },
    
    scale:"2",
    color:"white",
    rotate:"720deg",
    ease:Circ.easeInOut
})

var tl=gsap.timeline({
    scrollTrigger:{
        trigger:"#three",
        start: "center center",
        // markers:true,
        scrub:2,
        pin:true
    },

});
tl
.to("#photo",{
    rotate:"720deg",
    top:"50%",
    ease:Circ.easeInOut
})

.to("#photous",{
    
    left:"65%",
    ease:Circ.eavseInOut
})

.to(".abcd",{
    
    left:"-100%",
    ease:Circ.easeInOut
})
 
 var tl2=gsap.timeline({
     scrollTrigger:{
         trigger:"#four",
        //  markers:true,
         scrub:2,
         start:"center center",
         pin:true
     }
 })
tl2
.to(".imgss",{
     opacity:1,
     ease:Power3.easeInOut,
     stagger:.2
},"a")

.to(".imgss",{
    opacity:0,
    ease:Power3.easeInOut,
    stagger:.2
},"a")

.to("#four h1 span",{
    y:'-10',
    ease:Power1.easeInOut,
    stagger:.2
},"a")

.to("#four h1 span",{
    y:'0',
    ease:Power1.easeInOut,
    stagger:.2
},"a")

document.
 querySelectorAll("#right a")
.forEach(function(atag){
  atag.addEventListener("mouseover",function(dets){
      gsap.to(".imgb",{
          x:dets.target.dataset.index*-100+"%",
          ease:"expo",
          duration:1
        });
  });
});
   
ScrollTrigger.create({
    onUpdate:function(prg){
        gsap.to("#progress",{width:Math.floor(prg.progress*100)+"%"})
    }
})
