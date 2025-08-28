// babel.config.cjs
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }], // <-- important for new JSX transform
    '@babel/preset-typescript',
  ],
};
