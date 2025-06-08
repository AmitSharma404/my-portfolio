import { Briefcase, Code2Icon, User } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-6 ">
                    <h3 className="text-xl font-bold">Passionate web Developer & Designer</h3>

                    <p className="text-muted-foreground ">I'm a dedicated and detail-oriented web developer with a strong passion for creating dynamic and responsive websites. With experience in front-end technologies like HTML, CSS, JavaScript, and frameworks such as React and Next.js, I bring ideas to life with clean code and engaging user experiences. 
                    </p>

                    <p className="text-muted-foreground">Whether it's building a sleek landing page or a full-stack web application, I strive to deliver high-quality, scalable solutions. Let's build something great together.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                        {" "}
                        Get in Touch
                        </a>
                        <a href="#resume" className="px-6 py-2 rounded-full border border-primary text-primary hover: bg-primary/10 transition-colors duration-300 font-bold">
                        {" "}
                        Download CV
                        </a>

                    </div>
                 </div>

                 <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code2Icon className=" text-primary h-6 w-6"/>
                            </div>
                            <div className="text-left ">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">
                                    I create responsive website using modern technologies like ReactJS Angular Vue.JS
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="text-primary h-6 w-6"/>
                            </div>
                            <div className="text-left ">
                                <h4 className="font-semibold text-lg">UI/UX designer</h4>
                                <p className="text-muted-foreground">
                                    Design intitutive user interfaces and seamless user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className=" text-primary h-6 w-6"/>
                            </div>
                            <div className="text-left ">
                                <h4 className="font-semibold text-lg">
                                Project Management
                                </h4>
                                <p className="text-muted-foreground">
                                    Leading projects from conseption to completion with agile technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </section>
}