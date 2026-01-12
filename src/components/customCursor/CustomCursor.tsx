import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const applyTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      cursor.style.borderColor = isDark ? "#ffffff" : "#000000";
      dot.style.backgroundColor = isDark ? "#ffffff" : "#000000";
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

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;
      dot.style.transform = `translate(${dotX - 1}px, ${dotY - 1}px)`;

      cursorX += (dotX - cursorX) * 0.15;
      cursorY += (dotY - cursorY) * 0.15;
      cursor.style.transform = `translate(${cursorX - 24}px, ${cursorY - 24}px)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      observer.disconnect();
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999]
                   h-12 w-12 rounded-full border-2 hidden md:block"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999]
                   h-2 w-2 rounded-full hidden md:block"
      />
    </>
  );
};

export default CustomCursor;
