const config = {
  tbot: {
    accessKey: process.env.TBOT_KEY || "",
    url: "t.me/mister_proper_bot",
    botname: "mister_proper_bot",
    nicknames: ["Пропер", "бот", "смешарик"],
    userId: 730142607
  },
  heroku: {
    appUrl: "https://polar-island-74903.herokuapp.com/"
  },
  // Пока нет bd
  room: {
    members: [
      { username: "Vergil190202", name: "Матвей", isDuty: false },
      { username: "nostereal", name: "Артем", isDuty: true },
      { username: "DotKillah", name: "Илья", isDuty: false },
      { username: "resetand", name: "Кирилл", isDuty: false },
      { username: "vugar", name: "Вугар ", isDuty: false }
    ]
  }
};

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export type Config = typeof config;
export type ConfigOverride = RecursivePartial<Config>;

export default config;
