module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ["plugin:react/recommended", "airbnb", "plugin:i18next/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "i18next", "react-hooks"],
    rules: {
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        indent: [2, 4],
        "react/jsx-filename-extension": [2, { extensions: [".js", ".ts", ".jsx", ".tsx"] }],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "no-shadow": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttribute: [
                    "data-testid",
                    "to",
                    "target",
                    "justify",
                    "align",
                    "aria-label",
                    "direction",
                    "gap",
                    "role",
                    "as",
                    "border",
                    "feature",
                    "color",
                    "variant",
                    "size",
                    "wrap",
                ],
            },
        ],
    },
    overrides: [
        {
            files: ["config/**/*.ts", "**/*.config.ts", "**/*.config.js,config"],
            rules: {
                "max-len": "off",
                "import/no-extraneous-dependencies": "off",
                // "no-unused-vars": "off",
                // "@typescript-eslint/no-unused-vars": "off",
            },
        },
        {
            files: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
            env: {
                jest: true,
            },
        },
        {
            files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
            },
        },
        {
            files: [
                "config/storybook/webpack.config.ts",
                ".storybook/**/*.ts",
                ".storybook/**/*.tsx",
            ],
            rules: {
                "no-param-reassign": "off",
            },
        },
        {
            files: ["**/*.stories.ts", "**/*.stories.tsx"],
            rules: {
                "react/jsx-props-no-spreading": "off",
            },
        },
        {
            files: ["**/*.stories.@(ts|tsx)", "**/*.test.@(ts|tsx)", "**/*.spec.@(ts|tsx)"],
            rules: {
                "i18next/no-literal-string": "off",
            },
        },
    ],
    globals: {
        __IS_DEV__: true,
    },
};
