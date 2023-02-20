const handler = {};

handler.notFoundHandler = (requestProperties, callBack) => {
  callBack(404, {
    message: "Ur requested url not found",
  });
};

module.exports = handler;
