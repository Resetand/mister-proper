import { ConfigOverride } from "./default";

const cofig: ConfigOverride = {
    tbot: {
        webhook: process.env.TONEL_URL
    },
    ports: {
        http: 4000,
        https: 4001,
    }
}

export default cofig;