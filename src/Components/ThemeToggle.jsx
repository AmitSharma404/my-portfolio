import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [IsDardmode, setIsDarkmode] = useState(false);

  useEffect(()=> {
     const storedtheme = localStorage.getItem('theme');
     if(storedtheme === 'dark') {
        setIsDarkmode(true);
        document.documentElement.classList.add('dark');
     }  else {
        setIsDarkmode(false);
        document.documentElement.classList.remove('dark');
     }
  },[])

  const Toggletheme = () => {
     if(IsDardmode) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme","light");
        setIsDarkmode(false);
     } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem("theme","dark");
        setIsDarkmode(true);
     }
  }
  return (
    <button onClick={Toggletheme} className={cn("fixed max-sm:hidden top-2 right-6 z-50 p-2 rounded-full transition-colors duration-300 focus-outline:hidden ")}>
        {" "}
      {IsDardmode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
