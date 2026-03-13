import { useEffect, useRef } from "react";

export default function DnaBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const helixHeight = canvas.height * 1.2;
      const helixWidth = 150;
      const points = 100;

      // Draw two DNA strands
      for (let strand = 0; strand < 2; strand++) {
        ctx.beginPath();
        for (let i = 0; i < points; i++) {
          const t = (i / points) * Math.PI * 6 + time + (strand * Math.PI);
          const y = centerY - helixHeight / 2 + (i / points) * helixHeight;
          const x = centerX + Math.sin(t) * helixWidth;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.strokeStyle = `rgba(196, 163, 90, ${0.3})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw connecting rungs
      for (let i = 0; i < points; i += 4) {
        const t = (i / points) * Math.PI * 6 + time;
        const y = centerY - helixHeight / 2 + (i / points) * helixHeight;
        const x1 = centerX + Math.sin(t) * helixWidth;
        const x2 = centerX + Math.sin(t + Math.PI) * helixWidth;

        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.strokeStyle = `rgba(80, 190, 180, ${0.2})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw nodes at endpoints
        [x1, x2].forEach(x => {
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(196, 163, 90, ${0.5})`;
          ctx.fill();
        });
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-30"
    />
  );
}