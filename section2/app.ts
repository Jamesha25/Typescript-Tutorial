const generateErr = (messege, statusCode) => {
    throw {
      messege: messege,
      statusCode: statusCode
    }
  }
  generateErr('poda velakenna', 200);
 