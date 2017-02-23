
# gitbattle

##Goal of this project
Build a gitbattle app from scratch. This gitbattle app is an extension of the [React.js Fundamental tutorial by Tyler McGinnes](https://reacttraining.com/online/react-fundamentals).

####What is a gitbattle app?
It is a single page app to compete GitHub users' account with the following steps: 

Click the button to start the battle (home page)

Input mutipal GitHub user handlers (input Page)

The users' account information will be represented and compared, and a competetion result will show (battle page) 

The user's winning percentage and rank will be constantly updated as long as the app runs (statistics page) 


##Motivation
This project is designed for React & Redux practice. While building the gitbattle app, a developer can:

- Learn how to develop React components 

- Learn how to add on Redux state management and how it works everytime the React component renders

- End-to-End testing

##Features
- **[React](https://facebook.github.io/react/)** for component development

- **[Redux](http://redux.js.org/)** for state update, storage, and management 

- **[React-Router](https://github.com/ReactTraining/react-router)** for routing and navigation

- **[Axios](https://github.com/mzabriskie/axios)** for making request to get GitHub user information

- **[Babel](https://babeljs.io/)** for transpiling:

 Babel transpiles [ECMAScript 6](https://github.com/lukehoban/es6features) React components to ECMAScript 5 format. Babel is a really helpful transpiler for React projects, since ['browser vendors are slow to adopt new language features'](https://www.quora.com/What-exactly-is-BabelJs-Why-does-it-understand-JSX-React-components).

- **[Webpack](https://webpack.github.io/)** for bundling:

 Webpack takes the original code, transpiles it with [babel-loader](https://github.com/babel/babel-loader), then outputs a bundle file ready to represent on a browser. 

 A **first-time Webpack user** may experience difficulty going through the official Webpack documentation. The 'Webpack for React' section of the [React Fundamental tutorial by Tyler McGinnes](https://reacttraining.com/online/react-fundamentals) provides a concise description and practice to show how Webpack works.


- Developer Tools

 **[React DevTools](https://github.com/facebook/react-devtools)** and **[Redux DevTools](https://github.com/gaearon/redux-devtools)** are convenient for time traveling debugging. Both can also be downloaded from Chrome Web Store or Add-ons for Firefox.


##Getting Started
This project does not use a boilerplate, thus the package.json file is updated when new dependencies are in need for developing.

Have [npm] (https://nodejs.org/en/download/) downloaded already

`$ mkdir gitbattle`

`$ npm init`

`$ npm i --save react react-dom redux react-redux axios`

`$ npm i --save-dev html-webpack-plugin webpack webpack-dev-server babel-core babel-loader babel-preset-react react-devtools redux-devtools`


##Code Example

The [PromptContainer.js](https://github.com/zenosu/gitbattle/blob/master/app/containers/PromptContainer.js) file is an example of a container component of the input page, and the [prompt.js](https://github.com/zenosu/gitbattle/blob/master/app/containers/prompt.js) file is the corresponded presentation component of the input page. 

Container component pattern of React does data fetching and then renders its corresponding presentation components. The container component provides the reusability of non-presentation components. Also, it helps the presentation components to be stateless. 

Some good articles of container and presentational components: 

[Container Components](https://medium.com/@learnreact/container-components-c0e67432e005#.lmwx3updt) by Learn React with chantastic 

[presentational and container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.y2bpt8k40) by Dan Abranov 

##Testing

 **[NightWatch.js](http://nightwatchjs.org/)** is considered as the test tooling for End-to-End tests.
 
 Nightwatch works with the Selenium standalone server. Therefore Slenium needs to be [downloaded](https://selenium-release.storage.googleapis.com/index.html) before installing Nightwatch.
 
####installation

```
$ git clone https://github.com/nightwatchjs/nightwatch.git
$ cd nightwatch
$ npm install
```

####run test

`npm test`

If a developor wants to run function unit tests, use `npm run unit-tests`




