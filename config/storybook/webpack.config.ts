import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/configTypes';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    // safe init
    config.resolve = config.resolve || {};
    config.resolve.modules = config.resolve.modules || [];
    config.resolve.extensions = config.resolve.extensions || [];
    config.resolve.alias = config.resolve.alias || {};

    config.module = config.module || { rules: [] };
    config.module.rules = config.module.rules || [];

    // modules + extensions
    if (!config.resolve.modules.includes(paths.src)) config.resolve.modules.push(paths.src);
    if (!config.resolve.extensions.includes('.ts')) config.resolve.extensions.push('.ts');
    if (!config.resolve.extensions.includes('.tsx')) config.resolve.extensions.push('.tsx');

    // aliases
    config.resolve.alias = {
        ...(config.resolve.alias as Record<string, string>),
        shared: path.resolve(paths.src, 'shared'),
        app: path.resolve(paths.src, 'app'),
    };

    // svg exclude from existing loaders
    config.module.rules = (config.module.rules as RuleSetRule[]).map((rule) => {
        const test = (rule as any)?.test;
        if (test && test.toString().includes('svg')) {
            return { ...(rule as any), exclude: /\.svg$/i };
        }
        return rule;
    });

    // svg as react components
    config.module.rules.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    });

    // css/scss
    config.module.rules.push(buildCssLoader(true));

    // ✅ define global constants used in app code
    config.plugins = config.plugins || [];
    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
