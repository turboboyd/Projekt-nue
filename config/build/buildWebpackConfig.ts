import webpack from 'webpack';
import { BuildOptions } from './types/configTypes';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
    options: BuildOptions,
): webpack.Configuration {
    const { paths, mode } = options;
    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: 'inline-source-map',
        plugins: buildPlugins(options),
        devServer: buildDevServer(options),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
    };
}
