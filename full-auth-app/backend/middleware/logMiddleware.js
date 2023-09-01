const logger = (req, res, next) => {
  console.log(res.statusCode, "-", req.method, "-", req.path)
  next()
}

export { logger }