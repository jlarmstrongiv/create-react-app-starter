# Create React App Starter

*Do not forget to customize the* `package.json.name`

For package updates, try [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).  Use [^4.5.0](https://github.com/supasate/connected-react-router/issues/184) of connected-react-router.

Same as [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started), but additional setup with:

## Styling
  - [styled-components](https://www.npmjs.com/package/styled-components)
  - [react-styleguidist](https://www.npmjs.com/package/react-styleguidist), with [styled-components](https://github.com/styleguidist/react-styleguidist/blob/master/docs/Thirdparties.md#styled-components), [redux](https://github.com/styleguidist/react-styleguidist/blob/master/docs/Thirdparties.md#redux), and [JS Doc](http://usejsdoc.org/) [[1](https://github.com/styleguidist/react-styleguidist/blob/master/docs/Documenting.md), [2](https://devhints.io/jsdoc), [3](https://theyosh.nl/speeltuin/dash/dash.js-2.0.0/build/jsdoc/jsdoc_cheat-sheet.pdf)]
  - [html-sketchapp-cli](https://www.npmjs.com/package/html-sketchapp-cli), with [styled-components](https://www.styled-components.com/docs/basics#attaching-additional-props)
## Routing and Data Store
  - [redux](https://www.npmjs.com/package/redux), understanding [compose](https://stackoverflow.com/a/41359312)
  - [react-redux](https://www.npmjs.com/package/react-redux)
  - [redux-thunk](https://www.npmjs.com/package/redux-thunk)
  - [react-router-dom](https://www.npmjs.com/package/react-router-dom), samples in `hoc`
  - [connected-react-router](https://www.npmjs.com/package/connected-react-router), use [^4.5.0](https://github.com/supasate/connected-react-router/issues/184)
  - [react-loadable](https://www.npmjs.com/package/react-loadable)
  - [axios](https://www.npmjs.com/package/axios#creating-an-instance)
## Possible Additions
  - [deepmerge](https://www.npmjs.com/package/deepmerge)
  - [styled-tools](https://github.com/diegohaz/styled-tools)
  - [reselect](https://www.npmjs.com/package/reselect)
  - [re-reselect](https://www.npmjs.com/package/re-reselect)
  - [reduce-reducers](https://www.npmjs.com/package/reduce-reducers)
  - [redux-form](https://www.npmjs.com/package/redux-form), uncomment code inside `store/reducers/index.js`
  - [redux-saga](https://www.npmjs.com/package/redux-saga), uncomment code inside `utilities/connectedFactory` and `index.js`
## HOC
  - [hoist-non-react-statics](https://www.npmjs.com/package/hoist-non-react-statics), [sample](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/withRouter.js)
  - Consider [renderProps](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce) (MyComponent() === \<MyComponent \/\>)
  - Consider new [Hooks API](https://reactjs.org/docs/hooks-intro.html) [[1](https://medium.com/jexia/everything-about-react-hooks-fundamentals-best-practices-and-opinions-476d37074c27), [2](https://dev.to/oieduardorabelo/react-hooks-how-to-create-and-update-contextprovider-1f68), [3](https://www.hooks.guide/), [4](https://www.reddit.com/r/reactjs/comments/9tto1x/are_react_hooks_going_to_kill_redux/e8zn4s1/),]
## Absolute Imports
*and VS Code Intellisense*
  - babel-plugin-module-resolver
  - .babelrc
  - .env
  - jsconfig.json, reference
## Tests
  - [enzyme](https://www.npmjs.com/package/enzyme)
  - enzyme-adapter-react-16
  - [jest-extended](https://www.npmjs.com/package/jest-extended)
  - [setupTests.js](https://facebook.github.io/create-react-app/docs/running-tests#initializing-test-environment)
  - [globalSetup.js](https://jestjs.io/docs/en/configuration.html#globalsetup-string), reference
  - [globalTeardown.js](https://jestjs.io/docs/en/configuration.html#globalteardown-string), reference
## Upload
  - [surge.sh](https://surge.sh/), local node modules
  - [CORS file](https://surge.sh/help/enabling-cross-origin-resource-sharing)
  - domain [reference](https://stackoverflow.com/a/33628871) to package.json.name
  - [react-https-redirect](https://www.npmjs.com/package/react-https-redirect)
## ESLint
  - .eslintrc.js
  - [eslint-config-jlarmst](https://www.npmjs.com/package/eslint-config-jlarmst)
  - Peer Dependencies:  eslint-plugin-react eslint-plugin-jest babel-eslint
    - eslint is already bundled with create-react-app
## Electron
  - `"package.json.homepage": "./",`
  - Other [configuration](https://gist.github.com/matthewjberger/6f42452cb1a2253667942d333ff53404) necessary for electron
## Other
  - [yarpm](https://www.npmjs.com/package/yarpm)
  - Original [Create React App](https://github.com/facebook/create-react-app) readme.
