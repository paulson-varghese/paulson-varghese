import { useEffect, useState } from 'react';

export function useTypewriter(
  words: string[],
  typeMs = 75,
  deleteMs = 38,
  pauseMs = 2200,
) {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < word.length) {
      t = setTimeout(() => setCharIdx(i => i + 1), typeMs);
    } else if (!deleting && charIdx === word.length) {
      t = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(i => i - 1), deleteMs);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }

    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, typeMs, deleteMs, pauseMs]);

  return words[wordIdx].slice(0, charIdx);
}
