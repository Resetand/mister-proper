

export const toUsername = (t: string) =>
    "@" + t.split('').filter((x) => x !== '@').join('');

