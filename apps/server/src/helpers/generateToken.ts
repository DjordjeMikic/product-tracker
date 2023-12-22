export const generateToken = (): string => {
  const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < 20; i++) {
    result += possible[Math.floor(Math.random() * possible.length)];
  }

  return result;
};
