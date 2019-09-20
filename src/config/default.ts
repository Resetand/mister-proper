const config = {
    tbot: {
        accessKey: '730142607:AAEaSaaguyfW1zfAd-Uv761YCylvx8aDvrM',
        url: 'https://api.telegram.org',
        webhook: '',
    },
    ports: {
        http: 80,
        https: 443,
    }
}

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export type Config = typeof config;
export type ConfigOverride = RecursivePartial<Config>;


export default config;