```aiignore
pnpm install 
cd src
node with-js.js #OK
node with-mjs.mjs # OK
tsx with-ts.ts # bad TypeError: Cannot read properties of undefined (reading 'loadSync')
ts-node with-ts.ts # bad TypeError: Cannot read properties of undefined (reading 'loadSync')
```
