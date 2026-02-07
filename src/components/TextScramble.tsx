import { useEffect, useState, useCallback } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

const TextScramble = ({ text, className = '', speed = 30, delay = 0 }: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isStarted, setIsStarted] = useState(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    const totalIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      iteration += 1 / 3;

      if (iteration >= totalIterations) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
      scramble();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, scramble]);

  if (!isStarted) {
    return <span className={className}>{text.replace(/./g, ' ')}</span>;
  }

  return <span className={`${className} font-mono`}>{displayText}</span>;
};

export default TextScramble;
