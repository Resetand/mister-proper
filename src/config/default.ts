const config = {
    tbot: {
        accessKey: '730142607:AAEaSaaguyfW1zfAd-Uv761YCylvx8aDvrM',
        url: 'https://api.telegram.org',
        botname: 'mister_proper_bot',
        nicknames: ['Пропер', 'бот', 'смешарик'],
        userId: 730142607,
    },
    ports: {
        http: 80,
        https: 443,
    },
    // Пока нет bd
    __room: {
        members: [
            { username: 'nostereal', isDuty: false },
            { username: 'DotKillah', isDuty: false },
            { username: 'resetand', isDuty: false },
            { username: 'matvey', isDuty: true },
            { username: 'vugar', isDuty: false },
        ]
    }
}

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export type Config = typeof config;
export type ConfigOverride = RecursivePartial<Config>;


export default config;