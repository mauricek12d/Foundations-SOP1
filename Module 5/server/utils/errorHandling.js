const errorHandling = (res, error, status = 500, message = 'Server error') => {
    console.error(error);
    res.status(status).json({ error: message });
  };
  
  module.exports = errorHandling;
  