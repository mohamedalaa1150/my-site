import React, { useState, useEffect, useMemo } from "react";

interface TypingAnimationProps {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenPhrases?: number;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  phrases,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenPhrases = 2000,
  className = "",
}) => {
  // لو الـ phrases فاضية
  const safePhrases = useMemo(() => {
    return phrases && phrases.length > 0 ? phrases : [""];
  }, [phrases]);

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // لو تغيرت الـ phrases رجع المؤشر من الأول
    setIndex(0);
    setText("");
    setDeleting(false);
    setPaused(false);
  }, [safePhrases]);

  useEffect(() => {
    const currentPhrase = safePhrases[index];
    const timeout = setTimeout(
      () => {
        if (paused) {
          setPaused(false);
          setDeleting(true);
          return;
        }

        if (deleting) {
          if (text.length > 0) {
            setText(text.slice(0, -1));
          } else {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % safePhrases.length);
          }
        } else {
          if (text.length < currentPhrase.length) {
            setText(currentPhrase.slice(0, text.length + 1));
          } else {
            setPaused(true);
          }
        }
      },
      paused ? delayBetweenPhrases : deleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    deleting,
    paused,
    index,
    safePhrases,
    typeSpeed,
    deleteSpeed,
    delayBetweenPhrases,
  ]);

  return <span className={`typing-cursor ${className}`}>{text}</span>;
};

export default TypingAnimation;
