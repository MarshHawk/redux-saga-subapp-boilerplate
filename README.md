## Updated react-modern-library-boilerplate with latest dependencies and react-redux:

### Dependencies:
- yarn add -D rollup rollup-plugin-babel@latest rollup-plugin-node-resolve rollup-plugin-commonjs rollup-plugin-postcss rollup-plugin-terser rollup-plugin-url rollup-plugin-peer-deps-external
- yarn add -D @babel/core @babel/preset-env @babel/preset-react
- yarn add -D react react-dom react-scripts

### References:
- https://github.com/Microsoft/TypeScript-Babel-Starter#using-rollup
- https://www.npmjs.com/package/create-react-library
  - https://github.com/transitive-bullshit/react-modern-library-boilerplate
  - https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7

### Getting Started

The first step is to clone this repo and rename / replace all boilerplate names to match your custom module. In this example, we'll be creating a module named `redux-comments-app`.

```bash
# clone and rename base boilerplate repo
git clone redux-saga-subapp-boilerplate
mv redux-saga-subapp-boilerplate redux-comments-app
cd redux-comments-app
rm -rf .git
```

```bas
# replace boilerplate placeholders with your module-specific values
# NOTE: feel free to use your favorite find & replace method instead of sed
mv readme.template.md readme.md
sed -i 's/redux-saga-subapp-boilerplate/redux-comments-app/g' *.{json,md} src/*.js example-hoist/*.json example-hoist/src/*.js example-hoist/public/*.{html,json}
sed -i 's/transitive-bullshit/marshhawk/g' package.json example-hoist/package.json
```

#### Local Development

Now you're ready to run a local version of rollup that will watch your `src/` component and automatically recompile it into `dist/` whenever you make changes.

```bash
# run example to start developing your new component against
npm link # the link commands are important for local development
npm install # disregard any warnings about missing peer dependencies
npm start # runs rollup with watch flag
```

We'll also be running our `example-hoist/` create-react-app that's linked to the local version of your `redux-comments-app` module.

```bash
# (in another tab)
cd example-hoist
npm link redux-comments-app
npm install
npm start # runs create-react-app dev server
npm link ../redux-saga-subapp-boilerplate/node_modules/react
```

Now, anytime you make a change to your component in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

![](https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif)

#### NPM Stuffs

The only difference when publishing your component to **npm** is to make sure you add any npm modules you want as peer dependencies are properly marked as `peerDependencies` in `package.json`. The rollup config will automatically recognize them as peer dependencies and not try to bundle them in your module.

Then publish as per usual.

```bash
# note this will build `commonjs` and `es`versions of your module to dist/
npm publish
```

#### Github Pages

Deploying the example to github pages is simple. We create a production build of our example `create-react-app` that showcases your library and then run `gh-pages` to deploy the resulting bundle. This can be done as follows:

```bash
npm run deploy
```

Note that it's important for your `example/package.json` to have the correct `homepage` property set, as `create-react-app` uses this value as a prefix for resolving static asset URLs.

## Examples

Here is an example react module created from this guide: [react-background-slideshow](https://github.com/transitive-bullshit/react-background-slideshow), a sexy tiled background slideshow for React. It comes with an example create-react-app hosted on github pages and should give you a good idea of the type of module you’ll be able to create starting from this boilerplate.

### Multiple Named Exports

Here is a [branch](https://github.com/transitive-bullshit/react-modern-library-boilerplate/tree/feature/multiple-exports) which demonstrates how to create a module with multiple named exports. The module in this branch exports two components, `Foo` and `Bar`, and shows how to use them from the example app.

### Material-UI

Here is a [branch](https://github.com/transitive-bullshit/react-modern-library-boilerplate/tree/feature/material-ui) which demonstrates how to create a module that makes use of a relatively complicated peer dependency, [material-ui](https://github.com/mui-org/material-ui). It shows the power of [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external) which makes it a breeze to create reusable modules that include complicated material-ui subcomponents without having them bundled as a part of your module.

## License

Original work MIT © [Travis Fischer](https://github.com/transitive-bullshit)
Modified work MIT © [Akumina](https://akumina.github.io)
Modified work MIT © [Sean Marsh Glover](https://github.com/marshhawk)
