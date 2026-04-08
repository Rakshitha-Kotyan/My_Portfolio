import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const contacts = [
  { icon: Phone, label: "+91 89044 70154", href: "tel:+918904470154" },
  {
    icon: Mail,
    label: "rakshithakotyan0@email.com",
    href: "mailto:rakshitha@email.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Rakshitha-Kotyan",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rakshitha-kotyan",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/art_kotyan/",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/918904470154",
  },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
        Get In <span className="text-gradient">Touch</span>
      </h2>
      <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
        Feel free to reach out for collaborations, opportunities, or just a
        friendly hello!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-primary-foreground text-primary transition-all duration-300">
              <c.icon size={22} />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              {c.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
