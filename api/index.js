import customer from './src/customer';
import distance from './src/distance';

/**
 * Handles api's index route
 * 
 * @param {object} req - Request Object
 * @param {object} res - Response Object
 */
const index = (req, res) => res.send("nothing here");

/**
 * Handles api's /customers route, retrieving a list of customers based on params
 * 
 * @param {object} req - Request Object
 * @param {object} res - Response Object
 */
const getCustomers = (req, res) => {
  customer.getAll()
    .then(data => {
      let customers = data.split("\n").map(JSON.parse);
      if(!req.query.reference || !req.query.distance) {
        res.send(customers);   
        return;
      }
      let splittedReference = req.query.reference.split(','),
          referenceObj = {
            latitude: Number(splittedReference[0]),
            longitude: Number(splittedReference[1]),
          };
      res.send(
        distance
          .filterTargetsWithinDistance(referenceObj, customers, req.query.distance)
            .sort((c1, c2) => c1.user_id - c2.user_id)
      );
    })
    .catch(error => res.send(error));
};

/**
 * Handles api's /customer route, retrieving a customer by it's id
 * 
 * @param {object} req - Request Object
 * @param {object} res - Response Object
 */
const getCustomer = (req, res) => {
  customer.getAll()
    .then(data => res.send(
      data.split("\n")
        .map(JSON.parse)
        .filter(customer => Number(customer.user_id) === Number(req.params.id))
    )
  )
  .catch(error => res.send(error));
};

export default {index, getCustomers, getCustomer};