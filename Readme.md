# html-webpack-plugin Issue 1848 #

This is a minimal example of [issue 1848](https://github.com/jantimon/html-webpack-plugin/issues/1848) in jantimon/html-webpack-pluginhtml-webpack-plugin.

The project compiles Bootstrap 5 from Javascript and Sass source files,
producing `wwwroot/dist/bundles/main.js` and `wwwroot/dist/css/style.css`.
It should also produce `Pages/Shared/Bundles/main.cshtml` referencing `main.js`
and `Pages/Shared/Bundles/style.cshtml` referencing `style.css`.

Clone and run `npm install`, then `npm run build` in the root folder.

## Incorrect Behavior ##
Run `npm install html-webpack-plugin@5.6.0 --save-dev` then `npm run build`.

Files are created in `Pages/Shared/Bundles` but they are empty.

## Expected Behavior ##
Run `npm install html-webpack-plugin@5.5.0 --save-dev` then `npm run build`.

Files in `Pages/Shared/Bundles` have correct contents.

## Debugging in VS Code ##
A launch configuration is set to debug into the webpack build. In file
`js/bundletemplate.ejs`, set a breakpoint on line 3. Start the debugger
with F5. When you get to the breakpoint, hover the mouse over
`htmlWebpackPlugin.options.filename`.
The incorrect case will show `../../Pages/Shared/Bundles/[name].cshtml`.
The expected result is `../../Pages/Shared/Bundles/style.cshtml`.

