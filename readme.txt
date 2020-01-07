Start Bootstrap - SB Admin 2 :: port in node/express 

Basic info of this repo: 
This app is uses node/express and handlebar as templating engine. 

route "/" is root route and renders "views/index.handlebars". All the route uses views/layouts/main.handlebars as main layout under which all the view is rendered. 

All the middleware of modules are defined in file : /node_middleware.js which is imported in app.js. 


Install app: 
  npm i

Start app: 
  npm start

Soure directory of SASS file: 
  <project_path>/views/scss/style.scss

Destination of compiled SASS file: 
  <project_path>/public/css/style.css
