import { useState } from "react"
import { cn } from "../lib/utils";

const skills = [
    {name:"HTML/CSS" ,level: 85,category: "frontend"},
    {name:"JavaScript" ,level: 45,category: "frontend"},
    {name:"React JS" ,level: 60,category: "frontend"},
    {name:"Tailwind CSS" ,level: 40,category: "frontend"},
    {name:"Bootstraps" ,level: 30,category: "frontend"},

    // Backend
    {name:"Node.JS",level: 56,category: "backend"},
    {name:"MySql" ,level: 50,category: "backend"},
    {name:"PostgreSql" ,level: 30,category: "backend"},

    // Tools
    {name:"GitHub" ,level: 60,category: "tools"},
    {name:"Figma" ,level: 80,category: "tools"},
    {name:"Illustrator" ,level: 70,category: "tools"},
    {name:"Vs Code" ,level: 70,category: "tools"},
]

const categories = ["all","backend","frontend","tools"];

export const SkillSection = () => {

    const [activeCategory,setActiveCategory] = useState("all");

    const filteredskills = skills.filter((skill)=> activeCategory == "all" ||
    skill.category === activeCategory
)
    
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl mb-12 font-bold text-center">
               My <span className="text-primary">Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key)=> (
                    <button key={key}
                    onClick={() => setActiveCategory(category)}
                     className={cn("px-5 py-2 transition-colors duration-300 capitalize rounded-full ",
                        activeCategory === category ? "bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bg-secondary"
                     )}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredskills.map((skill,key)=> (
                    <div key={key} className="bg-card p-6 rounded-lg card-hover ">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="bg-secondary/50 w-full h-2 rounded-full overflow-hidden ">
                             <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{
                                width:skill.level + "%"
                             }} />   
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

   
}