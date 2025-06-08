import { Key } from "lucide-react";
import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStar();
    generateMeteors();
    const handleResize = () => {
        generateStar();
    }

    window.addEventListener('resize',handleResize)
    return () => window.removeEventListener('resize',handleResize)
  }, []);

  

  const generateStar = () => {
    const numberofstar = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberofstar; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberofmeteors = 3;

    const newMeteors = [];

    for (let i = 0; i < numberofmeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle "
          style={{
            width: star.size + "px",
            height: star.size + "px",
            top: star.x + "%",
            left: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div 
        key={meteor.id}
        className="meteor animate-meteor"
        style={{
            width: meteor.size * 16 + 'px' ,
            height: meteor.size * 0.8 + 'px',
            top: meteor.x + '%' ,
            left: meteor.y + '%',
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + 's' ,
        }}/>
      ))}
    </div>
  );
};
