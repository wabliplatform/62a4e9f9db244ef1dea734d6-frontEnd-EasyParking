const path = require('path');

module.exports = {
  entry: {
	'Rate' : './javascript/Rate.js',
	'Payment' : './javascript/Payment.js',
	'Search_1' : './javascript/Search_1.js',
	'Search_2' : './javascript/Search_2.js',
	'HomePage_M' : './javascript/HomePage_M.js',
	'WelcomePage' : './javascript/WelcomePage.js',
	'LogIn' : './javascript/LogIn.js',
	'SignUp' : './javascript/SignUp.js',
	'MyRentals' : './javascript/MyRentals.js',
	'HomePage_H' : './javascript/HomePage_H.js',
	'parkinglot' : './javascript/parkinglot.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};