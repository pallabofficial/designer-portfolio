const scroll = new LocomotiveScroll({
    el: document.querySelector('#supreme'),
    smooth: true
});

function movingPointer(){
    window.addEventListener("mousemove", function(event){
        document.querySelector("#moving-pointer").style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    })
}
movingPointer();

  

function page1Anim(){
    let t1 = gsap.timeline();
    t1
        .from("#nav",{
             y:"-20",
            opacity:0,
            duration:0.8,
            // ease:Expo.easeInOut,
        })
        .to(".bounding-elem",{
            y:"0",
           
            duration:0.8,
            // ease:Expo.easeInOut,
            stagger:0.2,
            
        })
}

page1Anim();

document.querySelectorAll(".elems-div").forEach(function(element){
    element.addEventListener("mousemove", function(event){
        gsap.to(element.querySelector("img"), {
            display:"inline-block",
            ease: Power1,
        })
    })
})
