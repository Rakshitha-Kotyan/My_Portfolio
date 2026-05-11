import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Online Portal for Agribusiness",
    description:
      "A MERN stack web platform that connects farmers and consumers directly, enabling product listing, browsing, and seamless communication without middlemen.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    github:
      "https://github.com/Rakshitha-Kotyan/Online_Portal_for_Agribussines", // replace
  },
  {
    title: "Multiple Disease Detection System",
    description:
      "A machine learning-based web application that predicts multiple diseases using algorithms like Random Forest, SVM, and Linear Regression.",
    tags: ["Python", "Machine Learning", "Flask"],
    github:
      "https://github.com/Rakshitha-Kotyan/Multi-Disease-Predictor-Health-Tracking", // replace
  },
  {
    title: "Student Marks Management System",
    description:
      "A web-based system using JSP and JDBC to manage student marks with features like add, update, delete, and report generation.",
    tags: ["Java", "JSP", "MySQL"],
    github: "https://github.com/Rakshitha-Kotyan/Mark-Management-System", // replace
  },
  {
    title: "Arogya-Nidhi Healthcare App",
    description:
      "An Android-based healthcare eligibility application that helps users identify suitable government health schemes, view required documents, and find nearby empaneled hospitals through a simple and user-friendly interface.",
    tags: ["Kotlin", "Android Studio", "Room Database", "JSON", "XML"],
    github: "https://github.com/Rakshitha-Kotyan/ArogyaNidhi-App", // replace with actual repo link
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6 bg-secondary/50">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
        My <span className="text-gradient">Projects</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="card-flip h-72">
            <div className="card-flip-inner relative w-full h-full">
              {/* Front */}
              <div className="card-front absolute inset-0 rounded-2xl bg-card border border-border p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back */}
              <div className="card-back absolute inset-0 rounded-2xl bg-gradient-primary p-6 flex flex-col items-center justify-center gap-4">
                <h3 className="font-heading text-lg font-semibold text-primary-foreground">
                  {p.title}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/20 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/30 transition-colors"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/20 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/30 transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
