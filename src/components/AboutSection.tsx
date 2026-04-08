import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpeg";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
        About <span className="text-gradient">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src={profileImg}
                alt="Rakshitha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-64 h-64 sm:w-72 sm:h-72 rounded-2xl border-2 border-accent/30 -z-10" />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-5">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            Software Developer & MERN Stack Enthusiast
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Hi! I'm Rakshitha, a passionate software developer who loves
            building impactful web applications. I specialize in the MERN stack
            (MongoDB, Express.js, React, Node.js) and enjoy crafting intuitive
            user experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I hold a degree in Computer Science and am always eager to learn new
            technologies, collaborate on exciting projects, and solve real-world
            problems through code.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">Role:</span> Full
              Stack Developer
            </li>
            <li>
              <span className="font-medium text-foreground">Education:</span>{" "}
              B.E. in Computer Science
            </li>
            <li>
              <span className="font-medium text-foreground">Interests:</span>{" "}
              Web Development, UI/UX, Open Source
            </li>
          </ul>
          <a href="/RAKSHITHA_RESUME.pdf" download>
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity mt-2">
              <Download size={16} className="mr-2" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
