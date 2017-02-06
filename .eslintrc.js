module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "linebreak-style": [0, "windows"], //换行风格
        "indent": [2, 4], //缩进风格
        'func-names': 0,
        'object-shorthand': 0,
        'no-console': 1,
        'space-before-function-paren': [0, 'always'], //函数定义时括号前面要不要有空格
        'array-bracket-spacing': [2, 'never'],
        'no-param-reassign': ["error", { "props": false }], //禁止对函数的参数重新进行无意义的赋值
        'quote-props': 0,  
    }
}
