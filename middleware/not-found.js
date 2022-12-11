const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    msg: `Can't find ${req.originalUrl} on this server!`,
  })
}

module.exports = notFound
