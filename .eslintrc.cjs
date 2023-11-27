module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        tsconfigRootDir: "./",
    },
    env: {
        browser: true,
        es6: true,
    },
    settings: {
        "import/extensions": [".js", ".ts"],
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"],
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".ts"],
            },
            typescript: {},
        },
    },
    plugins: ["import", "@typescript-eslint"],
    extends: [
        // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:@typescript-eslint/recommended",
        // Enables eslint-plugin-prettier and eslint-config-prettier.
        // This will display prettier errors as ESLint errors.
        // Make sure this is always the last configuration in the extends array.
        "plugin:prettier/recommended",
    ],
    rules: {
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "no-console": [
            "error",
            {
                allow: ["info", "warn", "error"],
            },
        ],
        camelcase: "off",
        "space-before-function-paren": 0,
        "multiline-ternary": 0,
        "no-unused-vars": "off",
        "no-shadow": 0,
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-unused-vars": "error",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-explicit-any": "off", // TODO: remove this after establishing types
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                ts: "never",
            },
        ],
    },
};
