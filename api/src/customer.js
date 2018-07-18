import { readFile } from "fs";
import { join } from "path";

const defaultCustomersPath = '../data/customers.txt';

/**
 * Given an absolute path, try to read the file
 * @param {string} absoluteFilePath - absolute path of the file to be read
 * @returns {Promise} - a Promise that resolves to the file content, or rejects with some i/o error 
 */
const readDataFile = absoluteFilePath => new Promise((resolve, reject) => {
  readFile(absoluteFilePath, "utf8", (err, data) => {
    if (err) 
      reject(err); 
    else 
      resolve(data);
  });
});

/**
 * Get all users from default Customers File
 * @returns {Promise} - a Promise that resolves to the file content, or rejects with some i/o error 
 */
const getAll = () => readDataFile(join(__dirname, defaultCustomersPath));

export default {readDataFile, getAll};