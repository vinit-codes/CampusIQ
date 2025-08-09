import React, { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 150, delay = 1500 }) => {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentPhase, setCurrentPhase] = useState<"campusos" | "pagename">("campusos");
  
  const campusOSText = "CampusOS";
  const currentText = currentPhase === "campusos" ? campusOSText : text;

  useEffect(() => {
    if (!text) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing forward
        setDisplayed(currentText.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index + 1 === currentText.length) {
          if (currentPhase === "campusos" && text !== "CampusOS") {
            // After typing CampusOS, start deleting
            setTimeout(() => setIsDeleting(true), delay);
          } else if (currentPhase === "pagename") {
            // After typing page name, start deleting
            setTimeout(() => setIsDeleting(true), delay);
          }
        }
      } else {
        // deleting
        setDisplayed(currentText.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index - 1 === 0) {
          if (currentPhase === "campusos" && text !== "CampusOS") {
            // Switch to page name phase
            setCurrentPhase("pagename");
            setIsDeleting(false);
            setIndex(0);
          } else if (currentPhase === "pagename") {
            // Go back to CampusOS phase
            setCurrentPhase("campusos");
            setIsDeleting(false);
            setIndex(0);
          }
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, currentText, speed, delay, currentPhase, text]);

  // reset when text changes
  useEffect(() => {
    setDisplayed("");
    setIndex(0);
    setIsDeleting(false);
    setCurrentPhase("campusos");
  }, [text]);

  return (
    <span className="typing-text select-none">
      {displayed}
    </span>
  );
};

export default TypingText;