
# gitbattle

##Goal of this project
Build a gitbattle app as an extension of the [React Fundamental tutorial by Tyler McGinnes](https://reacttraining.com/online/react-fundamentals)

####What is a gitbattle app?
It is a single page app for GitHub user account competition. A user can input GitHub user handlers, and the users' account information will be automatically compared, to decide which GitHub user account is better. The user's winning percentage and rank will be constantly updated as long as the app runs. 



##Motivation
Inspired by the [react-static-boilerplate](https://github.com/kriasoft/react-static-boilerplate) that I used for a previous serverless project, this project is designed for React & Redux practice, to provide a thorough understanding of the React and Redux ecosystem while building up the gitbattle app. Also, this project introduces Nightwatch.js for integration testing and helps to improve a good habit of test driven development.  

##Features
- **[React](https://facebook.github.io/react/)** for component development

- **[Redux](http://redux.js.org/)** for state update, storage, and management 

- **[React-Router](https://github.com/ReactTraining/react-router)** for routing and navigation

- **[Babel](https://babeljs.io/)** for transpiling:

 Babel transpiles [ECMAScript 6](https://github.com/lukehoban/es6features) React components to ECMAScript 5 format. Babel is a really helpful transpiler for React projects, since ['browser vendors are slow to adopt new language features'](https://www.quora.com/What-exactly-is-BabelJs-Why-does-it-understand-JSX-React-components).

- **[Webpack](https://webpack.github.io/)** for bundling:

 Webpack takes the original code, transpiles it with [babel-loader](https://github.com/babel/babel-loader), then outputs a bundle file ready to represent on a browser. 

 A **first-time Webpack user** may experience difficulty when going through the official Webpack documentation. There is another recommended Webpack learning resource: the 'Webpack for React' section of the [React Fundamental tutorial by Tyler McGinnes](https://reacttraining.com/online/react-fundamentals) provides a concise description and practice to show how Webpack works.

- **[NightWatch.js](http://nightwatchjs.org/)** for integration test:

 With Nightwatch, a developer can write End-to-End tests in node.js, to simulate the user's action while using the gitbattle app.

- Debug Tools

 **React Developer Tools** and **Redux DevTools** are convenient for time traveling debugging. Both can be downloaded from Chrome Web Store or Add-ons for Firefox.




