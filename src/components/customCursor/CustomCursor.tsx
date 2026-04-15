import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let cursorX = 0, cursorY = 0;
    let isHovering = false;

    const applyTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      // Ring adapts to theme
      cursor.style.borderColor = isDark
        ? "rgba(255,255,255,0.25)"
        : "rgba(0,0,0,0.2)";
      // Dot is always lime — visible on both backgrounds
      dot.style.backgroundColor = "#A3E635";
    };

    applyTheme();

    const observer = new MutationObserver(applyTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHovering = !!(target.closest("a") || target.closest("button"));
      if (cursor) {
        cursor.style.borderColor = isHovering
          ? "#A3E635"
          : document.documentElement.classList.contains("dark")
          ? "rgba(255,255,255,0.25)"
          : "rgba(0,0,0,0.2)";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleHover);

    const animate = () => {
      dotX += (mouseX - dotX) * 0.4;
      dotY += (mouseY - dotY) * 0.4;
      dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px) scale(${isHovering ? 0.4 : 1})`;

      cursorX += (dotX - cursorX) * 0.12;
      cursorY += (dotY - cursorY) * 0.12;
      const scale = isHovering ? 1.6 : 1;
      cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px) scale(${scale})`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      observer.disconnect();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border-2 hidden md:block"
        style={{ willChange: "transform", transition: "border-color 0.2s ease, transform 0.05s linear" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full hidden md:block"
        style={{ willChange: "transform", backgroundColor: "#A3E635", transition: "transform 0.08s ease" }}
      />
    </>
  );
};

export default CustomCursor;
