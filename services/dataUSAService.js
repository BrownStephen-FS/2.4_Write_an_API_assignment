const axios = require("axios");
require("dotenv").config();

const dataUSAService = async () => {
  return await axios.get(`${process.env.dataUSAURL}`);
};

const dataUSAServiceByYear = async (year) => {
  return await axios.get(`${process.env.dataUSAURL}&year=${year}`);
};

module.exports = { dataUSAService, dataUSAServiceByYear };