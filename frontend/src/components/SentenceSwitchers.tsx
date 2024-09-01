import React, { useState, useEffect } from 'react';

function SentenceSwitchers() {
  const sentences = [
    "Capture your dreams, hopes, and joyful moments in a letter for your future self.",
    "Join a warm and welcoming space filled with kindness and connection.",
    "Trust us to keep your precious memories safe until you're ready to relive them.",
   ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 10000); // Switches every 10 seconds

    return () => clearInterval(intervalId);
  }, [sentences.length]);

  return (
    <div>
      <p>{sentences[currentSentenceIndex]}</p>
    </div>
  );
}

export default SentenceSwitchers;
