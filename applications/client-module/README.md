# React + TypeScript + Vite

Este template fornece uma configuração mínima para colocar o React para funcionar no Vite com HMR (Hot Module Replacement) e algumas regras ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) que usa [Babel](https://babeljs.io/) para o Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) que usa [SWC](https://swc.rs/) para o Fast Refresh

## Expandindo a configuração do ESLint

Se você estiver desenvolvendo uma aplicação para produção, recomendamos que atualize a configuração para habilitar as regras de lint conscientes do tipo:

- Configure a propriedade `parserOptions` de nível superior da seguinte maneira:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
