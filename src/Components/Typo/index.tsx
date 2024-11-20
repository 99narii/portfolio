import React, { useEffect, useState } from 'react';
import './style.scss';

interface TypoProps {
  typo: { title: string }[];
}

export const Typo: React.FC<TypoProps> = ({ typo }) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    if (isTyping) {
      const currentTitle = typo[currentIndex].title;
      if (charIndex < currentTitle.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + currentTitle[charIndex]);
          setCharIndex(charIndex + 1);
        }, 150); // 타이핑 속도 설정 (100ms)

        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    } else {
      const timeout = setTimeout(() => {
        setIsTyping(true);
        setCharIndex(0);
        setCurrentText('');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % typo.length);
      }, 1500); // 타자기 효과 종료 후 잠깐 대기 (1초)

      return () => clearTimeout(timeout);
    }
  }, [charIndex, isTyping, currentIndex, typo]);

  return (
    <div className="typo_container">
        <p>{currentText}</p>
    </div>
  );
};

