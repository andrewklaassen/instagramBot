## Prerequisites
1. [Node.js](https://nodejs.org/en/) 
    - Minimum version 6.0
    - Recommended version 8.0 +
2. [git](https://git-scm.com/)
3. Java 8
    - [selenium-standalone](https://www.npmjs.com/package/selenium-standalone) requires Java 8

## Getting Started
```
git clone THIS_REPO_URL
cd FOLDER_OF_THIS_REPO
```

## Running Tests

```
npm install
npm run e2e
```
Other commands are also configured to run locally and/or headlessly, check out package.json

This repo takes advantage of [`node-config`](https://github.com/lorenwest/node-config). To overwrite the default configuration, simply add the configs in `{deployment}.json`. 

## Tips

1. Run one single spec

    `npm run e2e -- --spec specs/YOUR_SPEC_NAME.spec.ts`

    headless

    `npm run e2e:headless -- -- --spec specs/YOUR_SPEC_NAME.spec.ts`
2. Run a suite of multiple suites
    
    `npm run e2e -- --suite search`

    multiple suites

    `npm run e2e -- --suite search,others`

    headless suite

    `npm run e2e:headless -- -- --suite search`

    If you are curious about why there are so many `--`, check out [this page](https://docs.npmjs.com/cli/run-script#description).

3. Change `logLevel` to `verbose` in `wdio.config.js` can help locate issues.
4. Mocha doesn't favor "lambdas"(the arrow functions) per its [documentation](https://mochajs.org/#arrow-functions). So when you need `this` in your test such as `retries` or `timeout`, use `function()` instead. VS Code will remind you if you doesn't do so.

## FAQ

1. What is `$` in WebdriverIO?

    The `$` command is a short way to call the element command in order to fetch a single element on the page. It returns an object that with an extended prototype to call action commands without passing in a selector. However if you still pass in a selector it will look for that element first and call the action on that element. 
