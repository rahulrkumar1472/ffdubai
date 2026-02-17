"use client";

import {useEffect, useState} from "react";

export function Typewriter({lines}: {lines: string[]}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const activeLine = lines[lineIndex] ?? "";
    let i = 0;

    const interval = setInterval(() => {
      i += 1;
      setText(activeLine.slice(0, i));

      if (i >= activeLine.length) {
        clearInterval(interval);
        setTimeout(() => {
          setText("");
          setLineIndex((prev) => (prev + 1) % lines.length);
        }, 1200);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [lineIndex, lines]);

  return (
    <p className="typewriter">
      {text}
      <span className="gold-line" />
    </p>
  );
}
