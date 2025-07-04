import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import hamburgerIcon from "../assets/logo/hamburger.svg";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Navbar = () => {
  const headerRef = useRef(null);

  useGSAP(() => {
    const split = new SplitText(headerRef.current, { type: "chars, words" });
    const chars = split.chars;

    gsap.from([...chars, ".border-line"], {
      y: 100,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power3.out",
    });

    gsap.to([[chars[1], chars[3]], ".border-line"], {
      y: 30,
      duration: 1,
      delay: 1,
      ease: "power2.out",
    });

    gsap.to(chars[2], {
      y: 10,
      duration: 1,
      delay: 1,
      ease: "power2.out",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "nav",
          start: "bottom top",
          end: "+=100",
          scrub: true,
        },
      })
      .to([[chars[1], chars[2], chars[3]]], {
        y: 0,
        duration: 2,
        delay: 1,
        ease: "power2.out",
      })
      .to([chars[1], chars[2], chars[3], chars[4]], {
        opacity: 0,
        duration: 2,
        delay: 1,
        ease: "power1.inOut",
      })
      .to(chars[0], {
        scale: "1.8",
        x: 30,
        duration: 2,
        delay: 1,
        ease: "power1.inOut",
      })
      .to(".border-line", {
        scaleX: 0.6,
        y: -5,
        x: 5,
        opacity: 0.5,
        duration: 1,
        delay: 0.5,
        ease: "power1.inOut",
        transformOrigin: "left center",
      });
  }, []);

  return (
    <>
      <nav className="flex-center p-6 bg-[var(--color-nav)] overflow-y-hidden min-h-32 fixed w-full">
        <h1 ref={headerRef} className="nav-header playpen-sans-header">
          Ahmed
          <div className="border-line | border-2"></div>
        </h1>
        <img src={hamburgerIcon} alt="hamburger icon" />
      </nav>
      <div className="min-h-96 bg-amber-300"></div>
      <div className="min-h-96 bg-amber-950"></div>
      <div className="min-h-96 bg-blue-100"></div>
      <div className="min-h-96 bg-black"></div>
    </>
  );
};

export default Navbar;
