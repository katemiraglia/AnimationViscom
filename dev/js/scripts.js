import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin, GSDevTools, MotionPathHelper, MotionPathPlugin);





function animation() {
    var tl = gsap.timeline();
    tl.from("#Crown", { duration: 1, drawSVG: "0%" })
        .from(".american", { duration: 1, y: -600, transformOrigin: "center", delay: -1 })
        .from(".swedish", { duration: 1, x: 600, transformOrigin: "center", delay: -1 })
        .from(".museum", { duration: 1, y: 600, transformOrigin: "center", delay: -1 })




    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(animation());


GSDevTools.create();

// { duration: 2, drawSVG: "0%" })
// { duration: 1, rotate: -45, transformOrigin: "bottom right" });