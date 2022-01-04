module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    rules: {
        'no-console': 'off',
        indent: 'off',
        'class-methods-use-this': 'off',
        'import/first': 'off',
        'no-param-reassign': 'off',
        'space-before-function-paren': 'off',
        'max-len': 'off',
        'eol-last': 'off',
        camelcase: 'off',
        'import/extensions': 'off',
    },
};
