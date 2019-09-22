const config = {
    tbot: {
        accessKey: process.env.TBOT_KEY || '',
        url: 't.me/mister_proper_bot',
        botname: 'mister_proper_bot',
        nicknames: ['Пропер', 'бот', 'смешарик'],
        userId: 730142607,
    },
    // Пока нет bd
    room: {
        members: [
            { username: 'nostereal', isDuty: false },
            { username: 'DotKillah', isDuty: false },
            { username: 'resetand', isDuty: false },
            { username: 'matvey', isDuty: true },
            { username: 'vugar', isDuty: false },
        ],
    },
};

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export type Config = typeof config;
export type ConfigOverride = RecursivePartial<Config>;


export default config;
