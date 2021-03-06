

export const toUsername = (t: string) =>
    "@" + t.split('').filter((x) => x !== '@').join('');

export const toBotCommand = (t: string) =>
    "/" + t.split('').filter((x) => x !== '/').join('');

export const createIncludeRe = (...words) => new RegExp(`(${words.join('|')})`);
