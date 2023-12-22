import { useEffect, useRef } from 'react';

export const useDebounce = () => {
  const timeout = useRef<any>();

  const debounce =
    (func, wait) =>
    (...args) => {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => func(...args), wait);
    };

  useEffect(
    () => () => {
      if (!timeout.current) return;
      clearTimeout(timeout.current);
    },
    [],
  );

  return { debounce };
};
