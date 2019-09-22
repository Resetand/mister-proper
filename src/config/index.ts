

import * as merge from 'deepmerge';
import defaultConfig, { Config, ConfigOverride } from './default';
import devConfig from './dev';
import prodConfig from './prod';

const combine = (conf: ConfigOverride) => {
    return merge(defaultConfig, conf);
};

const env = process.env.NODE_ENV || 'development';
let config: Config;
if (env === 'development') {
    config = combine(devConfig) as Config;
}
if (env === 'productions') {
    config = combine(prodConfig) as Config;
}

export default config;
