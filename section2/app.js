var generateErr = function (messege, statusCode) {
    throw {
        messege: messege,
        statusCode: statusCode
    };
};
generateErr('poda velakenna', 200);
