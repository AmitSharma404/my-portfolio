import { ArrowBigDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-cols items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto z-10">
        <div className="space-y-6 ">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className=" opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="bg-gradient opacity-0 animate-fade-in-delay-1">
              {" "}
              Amit
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Sharma
            </span>
          </h1>
          <p className="text-lg md:text-xl mx-auto max-2-2xl opacity-0 text-muted-foreground animate-fade-in-delay-3">
            Passionate web developer with a flair for clean, responsive design.
            Skilled in HTML, CSS, JavaScript, and modern frameworks like React.
            Loves turning ideas into interactive, user-friendly websites. Always
            learning new tech to stay ahead in the web world. Code, coffee, and
            creativity — that’s the daily routine.
          </p>
          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className="cosmic-button">
              View My Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground">Scroll</span>
        <ArrowBigDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
