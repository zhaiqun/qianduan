module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: [
        "./node_modules/standard/indext.js",

    ],
    globals: {
        NODE_ENV: false
    },
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 添加，分号必须
        semi: ['error', 'always'],
        'no-unexpected-multiline': 'off',
        'space-before-function-paren': ['error', 'never'],
        // 'quotes': ["error", "double", { "avoidEscape": true }]
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true
            }
        ]
    }
};