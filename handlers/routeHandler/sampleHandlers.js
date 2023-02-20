const handler = {};

handler.sampleHandler = (requestProperties, callBack) => {
  console.log(requestProperties);
  callBack(200, {
    message: "This is a sample message",
  });
};

module.exports = handler;
