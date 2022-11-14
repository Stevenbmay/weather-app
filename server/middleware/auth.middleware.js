import passport from "passport";

export default function auth(req, res, next) {
  passport.authenticate("jwt", (err, user) => {

    if (err || !user) {
      return res.send({ error: "Invalid Credentials", success: false })
    }

    req.user = user;
    return next();

  })(req, res, next);
}
