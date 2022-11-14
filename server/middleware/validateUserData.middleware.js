export default function validateUserData(req, res, next) {
  const { username, password } = req.body
  if (!username || username.length < 4 || username.length > 20) {
    return res.send({
      error: "Username does not fit requirements",
      success: false,
    })
  }

  if (!password || password.length < 8 || password.length > 20) {
    return res.send({
      error: "Password does not fit requirements",
      success: false,
    })
  }
  return next()
}
