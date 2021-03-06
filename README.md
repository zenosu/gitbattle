
# gitbattle

##Goal

The goal of this project is to practice React and Redux by building the gitbattle app from scratch. The gitbattle app is an extension of the [React Fundamentals tutorial by Tyler McGinnes](https://reacttraining.com/online/react-fundamentals). 

Gitbattle is a single page app. With this app, a user can enter multiple GitHub usernames, compare the user accounts, then decide which one is the best. The user's winning percentage and ranking are constantly updated. 

####Things I learned doing this project

- The [component based](https://medium.com/@dan.shapiro1210/understanding-component-based-architecture-3ff48ec0c238#.kxd4dl4g8) approach to building UIs

- The whole React component lifecycle

- Redux state management 

- Writing an integration or E2E test suite with nightwatch.js


##Prerequisites of this project

Experience with JavaScript and [npm](https://www.npmjs.com/).

##Features
- **[React](https://facebook.github.io/react/)** for component development

- **[Redux](http://redux.js.org/)** for state management and change notification

- **[React-Router](https://github.com/ReactTraining/react-router)** for routing and navigation

- **[Axios](https://github.com/mzabriskie/axios)** for making HTTP API requests to get GitHub user statistics

- **[Babel](https://babeljs.io/)** for transpiling:

 Babel transpiles [ECMAScript 6](https://github.com/lukehoban/es6features) React components to ECMAScript 5 format. Babel is a really helpful transpiler for React projects, since ['browser vendors are slow to adopt new language features'](https://www.quora.com/What-exactly-is-BabelJs-Why-does-it-understand-JSX-React-components).

- **[Webpack](https://webpack.github.io/)** for bundling:

 Webpack takes the original code, transpiles it with [babel-loader](https://github.com/babel/babel-loader), then outputs a bundle file ready to represent on a browser. 

 A **first-time Webpack user** may experience difficulty going through the official Webpack documentation. The 'Webpack for React' section of the [React Fundamental tutorial by Tyler McGinnes](https://reacttraining.com/online/react-fundamentals) provides a concise description and practice to show how Webpack works.


- Developer Tools

 **[React DevTools](https://github.com/facebook/react-devtools)** and **[Redux DevTools](https://github.com/gaearon/redux-devtools)** are convenient for time traveling debugging. Both tools can be downloaded from the Chrome Web Store or the Add-ons for Firefox.


##Getting Started

`git clone https://github.com/zenosu/gitbattle.git`

`cd gitbattle`

`npm install`

`npm start` -This runs a local web server on port 8080 and sets up an instance of gitbattle.



##Code Example

The container is a really useful React pattern. A container can be reused to render its corresponding presentation component, and the presentation component can be stateless.

For instance, The [PromptContainer.js](https://github.com/zenosu/gitbattle/blob/master/app/containers/PromptContainer.js) file is an example of a container component of the input page, and the [prompt.js](https://github.com/zenosu/gitbattle/blob/master/app/components/prompt.js) file is the corresponding presentation component. 

```
render: function() {
  	return (
  		<Prompt 
        onSubmitUser = {this.handleSubmitUser}
        onUpdateUser = {this.handleUpdateUser} 
        header = {this.props.route.header}
        username = {this.state.username} /> 
	  )    
  }
```

Some good articles about containers and presentational components: 

[Container Components](https://medium.com/@learnreact/container-components-c0e67432e005#.lmwx3updt) by Learn React with chantastic 

[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.y2bpt8k40) by Dan Abranov 

##Testing

 We are using **[NightWatch.js](http://nightwatchjs.org/)** for e2e or integration tests.
 
 Nightwatch works with the Selenium standalone server. Therefore Selenium needs to be [installed](https://selenium-release.storage.googleapis.com/index.html) first.
 
####installation

```
$ git clone https://github.com/nightwatchjs/nightwatch.git
$ cd nightwatch
$ npm install
```

####run test

`npm test`

####run unit test

`npm run unit-tests`


##Contributing

Please submit an issue if you experience any problem during the development process. 

Please make a pull request if you have any idea for add-on components or refactoring.

We appreciate any kind of contribution from our coders.

Happy codying!

