const errorHandler = (err, req, res, next) => {
    console.error(err.stack); 
  
    const statusCode = err.statusCode || 500; 
    const message = err.message || 'Server error';
    
    res.status(statusCode).json({
      message: message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack, 
    });
  };
  
  export default errorHandler;