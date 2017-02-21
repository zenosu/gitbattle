
# gitbattle

##Goal of this project
Build a gitbattle app from scratch. This gitbattle app is an extension of the [React.js Fundamental tutorial by Tyler McGinnes](https://reacttraining.com/online/react-fundamentals).

####What is a gitbattle app?
It is a single page app for GitHub user account competition. A user can input GitHub user handlers, and the users' account information will be automatically compared, to decide which GitHub user account is better. The user's winning percentage and rank will be constantly updated as long as the app runs. 


##Motivation
Inspired by the [react-static-boilerplate](https://github.com/kriasoft/react-static-boilerplate) that I used for a previous serverless project, this project is designed for React & Redux practice, to provide a thorough understanding of the React and Redux ecosystem while building up the gitbattle app. Also, this project introduces Nightwatch.js for integration testing and helps to improve a good habit of test driven development.  

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


- **[NightWatch.js](http://nightwatchjs.org/)** for integration test:

 With Nightwatch, a developer can write End-to-End tests in node.js.

- Developer Tools

 **[React DevTools](https://github.com/facebook/react-devtools)** and **[Redux DevTools](https://github.com/gaearon/redux-devtools)** are convenient for time traveling debugging. Both can also be downloaded from Chrome Web Store or Add-ons for Firefox.


##Getting Started
This project does not use a boilerplate. The package.json file is updated when new dependencies are in need for developing.

Have [npm] (https://nodejs.org/en/download/) downloaded already

`$ mkdir gitbattle`

`$ npm init`

`$ npm i --save react react-dom redux react-redux axios`

`$ npm i --save-dev html-webpack-plugin webpack webpack-dev-server babel-core babel-loader babel-preset-react react-devtools redux-devtools`


##Code Example

Here is an example of the home page component:

```
var Home = React.createClass({
  render: function() {
    return (
      <div className= "jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}> 
        <h1>Github Battle</h1>  
        <p className='lead'>Some fancy motto</p>
        <Link to= '/playerOne'>
          <button className = "btn btn-lg btn-success" type = "submit">
            Get Started
          </button>	          
        </Link>
      </div>
    )
  }
});
```





