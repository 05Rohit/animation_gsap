function locomotive() {

    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });





    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();


}
locomotive();

/* MAIN PAGE START HERE */
function mainPage() {
    gsap.to('.boxstar', {
        y: 30,
        duration: 1.33,
        ease: "linear",
        repeat: -1,
        yoyo: true
    }
    )

    gsap.to('.star1', {
        y: 30,
        duration: 1.33,
        ease: "linear",
        repeat: -1,
        yoyo: true
    }
    )
    gsap.to('.star2', {
        y: -30,
        duration: 1.33,
        ease: "linear",
        repeat: -1,
        yoyo: true,

    }
    )


    gsap.to('.bheart', {
        y: -30,
        duration: 1.63,
        ease: "linear",
        repeat: -1,
        yoyo: true,

    })

    gsap.set('.service-content', { opacity: 1 }); 

    gsap.from('.service-content', {
        scale:0.9,
        opacity: 0,
        duration: 1.5,
        scrollTrigger:
        {
            trigger: ".slider_container",
            scroller: "#main",
            start: "top 0%",
            end: "bottom 0%",
            scrub: 2,
           // markers:true,
        }
    })



}

mainPage();

// SLIDER PAGE ANIMATION 
function slidesPage() {
    const slides = document.querySelectorAll('.slide');

    // GSAP animation for the slider
    const sliderAnimation = gsap.to(slides, {
        x: "-800%",
        duration: 30,
        ease: "linear",
        repeat: -1,
        yoyo: true,
    });

    // Pause animation on mouse hover
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            sliderAnimation.pause();

        });

        slide.addEventListener('mouseleave', () => {
            sliderAnimation.play();
        });
    });

}
slidesPage()

// SERVICE CONTAINER STARTS HERE
function servicePage1() {

    gsap.to('.svg_spark', {
        y: 40,
        duration: 2,
        repeat: -1,
        yoyo: true,

    });

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to('#box1', {
        scaleX: 0.7,
        duration: 2,
    });

    tl.to('#box2', {
        x: -300,
        duration: 2,
    }, 0);


    const t2 = gsap.timeline({ repeat: -1, yoyo: true, ease: 'linear' });
    const t3 = gsap.timeline({ repeat: -1, yoyo: true, ease: 'linear' });;

    t2.to('#box5', {
        y: 200,
        duration: 2,
    })
    t2.to('#box6', {
        y: -200,
        duration: 2,
    }, 0)

    t3.to('#box3', {
        y: 200,
        duration: 2,

    })
    t3.to('#box4', {
        y: -200,
        duration: 2
    }, 0)

    gsap.to('.service_content_left,.service_content_mid,.service_content_right', {
        y: -20,
        opacity: 1,
        duration: 2,
        delay:0.5,

        scrollTrigger:
        {
            trigger: ".service_content_left",
            scroller: "#main",
            start: "top 80%",
            end: "bottom 90%",
            scrub: 2,
            //markers:true,

        }
    })

}
servicePage1();

//SERVICE CONATINER 2
function servicePage2() {

    gsap.set('.service2_container', { opacity: 1 }); 

    gsap.from('.service2_container', {
        scale:0.9,
         opacity: 0,
         duration: 1.5,
         scrollTrigger:
         {
             trigger: "#services2",
             scroller: "#main",
             start: "top 50%",
             end: "top 50%",
             scrub: 2,
             //markers:true,
         }
     })



    /* SERVICES PAGE 2 ANIMATION */
    gsap.to('.services2_headline img', {
        y: 50,
        repeat: -1,
        duration: 2,
        ease: 'linear',
        yoyo: true
    })
    gsap.to('.services2_paragraph img', {
        y: -60,
        repeat: -1,
        duration: 2,
        ease: 'linear',
        delay: 0.5,
        yoyo: true
    })


    gsap.to('.ss2', {
        y: 70,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'linear'
    })
    gsap.to('.ss3', {
        y: 70,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'linear'
    })

    gsap.to('.ss4', {
        y: 70,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'linear'
    })
    gsap.to('.ss5', {
        y: 70,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'linear'
    })
    gsap.to('.ss6', {
        y: 70,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'linear'
    })

    gsap.to('.para_star', {
        y: 40,
        repeat: -1,
        duration: 2,
        yoyo: true,
    })
    gsap.to('.svg_spiral', {
        y: -70,
        repeat: -1,
        duration: 2,
        yoyo: true,
    })
    gsap.to('.svg_star-shape', {
        y: 50,
        repeat: -1,
        duration: 2,
        yoyo: true,
        delay: 1.32
    })



}
servicePage2();

/* SERVICES PAGE 3 CONTAINER*/
function servicePage3() {

    gsap.set('.portfolio_content', { opacity: 1 }); 

    gsap.from('.portfolio_content', {
        scale:0.9,
         opacity: 0,
         duration: 1.5,
         scrollTrigger:
         {
             trigger: "#portfolio",
             scroller: "#main",
             start: "top 60%",
             end: "top 100%",
             scrub: 2,
             //markers:true,
         }
     })

    gsap.to('.portolio_2_star-1', {
        y: 90,
        repeat: -1,
        duration: 2,
        yoyo: true,

    })
    gsap.to('.portolio_2_star-2', {
        y: -150,
        repeat: -1,
        duration: 2,
        yoyo: true,
        delay: 1.4
    })
    gsap.to('.portolio_2_star-3', {
        y: 70,
        repeat: -1,
        duration: 2,
        yoyo: true,
        delay: 0.2369
    })

    gsap.set('.portfolio_content', { opacity: 1 }); 

    gsap.from('.portfolio_2_container', {
        scale:0.9,
         opacity: 0,
         duration: 1.5,
         scrollTrigger:
         {
             trigger: "#portfolio_2",
             scroller: "#main",
             start: "top 60%",
             end: "top 100%",
             scrub: 2,
             //markers:true,
         }
     })

}
servicePage3();

/* PORTFOLIO SECTION CONTAINER */
function portfolioImage() {
    document.querySelectorAll('.portfolio_2_box_img').forEach(box => {
        const firstImage = box.querySelector('.first');
        const secondImage = box.querySelector('.second');

        const tl = gsap.timeline({ paused: true });

        tl.to(firstImage, { duration: 0.4, x: '-100%', opacity: 0 })
            .to(secondImage, { duration: 0.4, x: '0%', opacity: 1 }, '-=0.4');

        box.addEventListener('mouseenter', () => {
            tl.play();
        });

        box.addEventListener('mouseleave', () => {
            tl.reverse();
        });
    });

}
portfolioImage();


/* CONTACT PAGE CONTAINER */
function contactRipple() {
    const rippleDots = document.querySelectorAll('.ripple-dot');

    // Loop through each dot and create a GSAP animation for ripple effect
    rippleDots.forEach((dot, index) => {
        const tl = gsap.timeline({ repeat: -1, delay: index * 2 });

        tl.to(dot, {
            duration: 4,
            scale: 5,
            opacity: 0,
            ease: 'linear',
        }).set(dot, {
            scale: 2,
            opacity: 1,
        });
    });

}
contactRipple();

// Function to copy text to clipboard
function copyTextToClipboard(text) {
    const contactInput = document.getElementById('contactInfo');
    contactInput.value = text;
    contactInput.select();
    alert('Copied to clipboard: ' + text);
}
  
  // Event listeners for copying email and phone number
  document.getElementById('copyEmailBtn').addEventListener('click', function() {
    copyTextToClipboard('25rohitkumar98@gmail.com'); // Replace with your email
  });
  
  document.getElementById('copyPhoneNumberBtn').addEventListener('click', function() {
    copyTextToClipboard('+91 8789421173'); // Replace with your phone number
  });



  // LAZY IMAGES LOADED
// document.addEventListener("DOMContentLoaded", function() {
//     var lazyImage = document.getElementById('lazyImage');
//     if ('loading' in HTMLImageElement.prototype) {
//         lazyImage.src = lazyImage.dataset.src;
//     } else {
//         lazyImage.onload = function() {
//             lazyImage.src = lazyImage.dataset.src;
//         };
//     }
// });
  


