// import React, { useRef, useEffect } from "react";

// function BackgroundGenerator() {
//   const backgroundRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = backgroundRef.current;

//     if (!canvas) {
//       return;
//     }

//     const ctx = canvas.getContext("2d");

//     if (!ctx) {
//       return;
//     }

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const drawNet = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.strokeStyle = "#3498db";
//       ctx.lineWidth = 1;

//       const gap = 50;
//       const size = 20;

//       for (let x = 0; x < canvas.width; x += gap) {
//         for (let y = 0; y < canvas.height; y += gap) {
//           ctx.beginPath();
//           ctx.moveTo(x, y);
//           ctx.lineTo(x + size, y + size);
//           ctx.stroke();
//         }
//       }
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     drawNet();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//     };
//   }, []);

//   return (
//     <div className="background-generator">
//       <h1>Background Generator</h1>
//       <canvas ref={backgroundRef}></canvas>
//     </div>
//   );
// }

// export default BackgroundGenerator;


import React, { useRef, useEffect } from "react";

function BackgroundGenerator() {
  const backgroundRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = backgroundRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawNet = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#3498db";
      ctx.lineWidth = 1;

      const radius = 100;
      const numPoints = 6;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      ctx.beginPath();
      for (let i = 0; i < numPoints; i++) {
        const angle = (Math.PI * 2 * i) / numPoints;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      for (let i = 0; i < numPoints; i++) {
        const angle = (Math.PI * 2 * i) / numPoints;
        const x1 = centerX + Math.cos(angle) * radius;
        const y1 = centerY + Math.sin(angle) * radius;
        for (let j = i + 1; j < numPoints; j++) {
          const angle2 = (Math.PI * 2 * j) / numPoints;
          const x2 = centerX + Math.cos(angle2) * radius;
          const y2 = centerY + Math.sin(angle2) * radius;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    drawNet();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="background-generator">
      <h1>Background Generator</h1>
      <canvas ref={backgroundRef}></canvas>
    </div>
  );
}

export default BackgroundGenerator;
