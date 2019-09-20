

import devConfig from './dev';
import prodConfig from './prod';
import defaultConfig, { ConfigOverride, Config } from './default'
import * as merge from 'deepmerge';

const combine = (config: ConfigOverride) => {
    return merge(defaultConfig, config);
}

const env = process.env.NODE_ENV || 'development';
let config: Config;
if (env === 'development') {
    config = combine(devConfig) as Config;
}
if (env === 'productions') {
    config = combine(prodConfig) as Config;
}

export default config;
