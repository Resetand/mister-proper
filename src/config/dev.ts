import { ConfigOverride } from "./default";

const cofig: ConfigOverride = {
    tbot: {
        accessKey: process.env.TBOT_TEST_KEY || '',
        botname: 'mister_proper_test_bot',
        url: 't.me/mister_proper_test_bot',
    },
};

export default cofig;
