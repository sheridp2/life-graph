const passport = require('passport')

module.exports = app =>{

  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) =>{
      res.redirect("/dashboard")
    }
  )
  app.get("/api/logout", (req, res) =>{
    req.logout();
    res.redirect("/")
  })

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
}
