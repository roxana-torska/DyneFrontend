const configs = function () {
  console.log("env", process.env.NODE_ENV);
  console.log("os.getName()");
  switch (process.env.NODE_ENV) {
    case "development":
      return {
        APP_URL: "http://localhost:3001",
        API_URL: "http://localhost:8282/api",
        API_IMAGE_URL: "localhost:8282",
      };
    case "production":
      return {
        APP_URL: "http://13.58.25.57:3001",
        API_URL: "http://13.58.25.57:8282/api",
        API_IMAGE_URL: "13.58.25.57:8282",
      };
    default:
      return {
        APP_URL: 'http://localhost:3001',
        API_URL: 'http://localhost:8282/api',
        API_IMAGE_URL: 'localhost:8282',
      };
  }
};
const weekDay = {
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
  Sunday: "Sun",
};

const settings = {
  ...configs(),
  weekDay,
};
module.exports = settings;
