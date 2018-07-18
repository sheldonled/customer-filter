
//Approximate earth radius in km
const earthRadius = 6371;

/**
 * Given reference and target coordinates in degrees, calculates the distance using
 * Great-circle distance Formula - https://en.wikipedia.org/wiki/Great-circle_distance
 * 
 * @param {Number} refLat - Number representation of reference latitude in degrees
 * @param {Number} refLong - Number representation of reference longitude in degrees
 * @param {Number} targetLat - Number representation of target latitude in degrees
 * @param {Number} targetLong - Number representation of target longitude in degrees
 * 
 * @returns {Number} - distance represented in Kilometers
 */
const calc = (refLat, refLong, targetLat, targetLong) => (earthRadius * 
  Math.acos(
    (Math.sin(getRadiansFromDegrees(refLat))*Math.sin(getRadiansFromDegrees(targetLat)))
    +
    (Math.cos(getRadiansFromDegrees(refLat))*Math.cos(getRadiansFromDegrees(targetLat)))
    *
    (Math.cos(Math.abs(getRadiansFromDegrees(refLong) - getRadiansFromDegrees(targetLong))))
  )
);

/**
 * Given 2 objects with latitude and longitude information,
 * calculate the distance in Kilometers between them
 * 
 * @param {object} objReference - The reference point for the calculation
 * @param {object} objTarget - The target to calculate
 * @example {latitude: 1111, longitude: 2222, ...}
 * 
 * @returns {Number} - the distance in Kilometers between the two objects
 */
const getDistanceBetween = (objReference, objTarget) => calc(
  objReference.latitude,
  objReference.longitude,
  objTarget.latitude,
  objTarget.longitude
);

/**
 * Given a reference object and an array of targets, filter the targets that are
 * within the given distance
 * 
 * @param {object} objReference - The reference point for the calculation
 * @param {*} targets - The target objects to filter
 * @param {*} distance - the distance provided as a parameter for the filter
 * 
 * @returns {Array} - an array of targets with 'distance' or less far than objReference
 */
const filterTargetsWithinDistance = (objReference, targets, distance) => targets
  .filter(target => getDistanceBetween(objReference, target) <= distance);

/**
 * Given a coordinate in degrees, converts it to radians
 * @param {Number} degrees - Number representation of a coordinate in degrees
 * @returns {Number} - Number representation of a coordinate in radians
 */
const getRadiansFromDegrees = degrees => degrees * Math.PI / 180;

export default {calc, getRadiansFromDegrees, getDistanceBetween, filterTargetsWithinDistance};