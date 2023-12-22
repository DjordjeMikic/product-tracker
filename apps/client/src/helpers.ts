export const capitalize = (word: string): string => word[0].toUpperCase() + word.slice(1);

export const stripSlashes = (word: string): string => word.replace(/\//gi, ' ');

export const capitalizeWords = (sentence: string): string[] =>
  sentence
    .split(' ')
    .filter((item) => !!item)
    .map((item) => capitalize(item));
