const convertToCelsius = function(temp) {
  let f =Number(((temp-32)*5)/9);
  if (Math.floor(f) === f) return f;
  return Number(f.toFixed(1));
}
const convertToFahrenheit = function(temp) {
  let c = Number(((temp*9)/5)+32);
  if (Math.floor(c) === c) return c;
  return Number(c.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
