import createHttpError from 'http-errors';

export const notFound = (req, _res, next) => {
  next(createHttpError(404, `Route ${req.originalUrl} not found`));
};

export const onError = (err, _req, res, _next) => {
  console.error(err);
  
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Something went wrong';
  
  res.status(status).json({
    error: {
      status,
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });
};
