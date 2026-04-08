import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const roles = ["Full Stack Developer", "MERN Developer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero opacity-80" />

      <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
          <span className="text-primary-foreground">Hi, I'm </span>
          <span className="text-gradient animate-gradient-shift">
            Rakshitha
          </span>
        </h1>
        <div className="h-10 flex items-center justify-center">
          <span className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 font-body">
            {displayed}
          </span>
          <span className="animate-typing-cursor ml-0.5 inline-block w-0 h-6" />
        </div>
        <p className="mt-6 text-primary-foreground/60 max-w-lg mx-auto text-sm sm:text-base">
          Building clean, scalable, and user-friendly web applications with
          modern technologies.
        </p>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-10 z-10 text-primary-foreground/50 hover:text-primary-foreground transition-colors animate-float"
        aria-label="Scroll to about"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
