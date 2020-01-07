// module.exports= function(){

//   app.engine('handlebars', exphbs());
//   app.set('view engine', 'handlebars');

// }

module.exports = {
  handlebar: handlebar,
  serveStatic: serveStatic,
  sassMiddleware: sassMiddleware
};

function handlebar(app, exphbs) {
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");
}

function serveStatic(app, express, path) {
  app.use(express.static(path.join(__dirname, "public")));
}

function sassMiddleware(app, sassMiddleware, path) {
  app.use(
    sassMiddleware({
      src: path.join(__dirname, "views", "scss"),
      dest: path.join(__dirname, "public", "css"),
      debug: true,
      outputStyle: "compressed",
      prefix: "/css"
    })
  );
}
