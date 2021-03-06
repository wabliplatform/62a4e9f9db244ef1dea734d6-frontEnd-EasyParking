/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TempApi);
  }
}(this, function(expect, TempApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TempApi.Payment();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Payment', function() {
    it('should create an instance of Payment', function() {
      // uncomment below and update the code to test Payment
      //var instane = new TempApi.Payment();
      //expect(instance).to.be.a(TempApi.Payment);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TempApi.Payment();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "FirstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new TempApi.Payment();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "LastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new TempApi.Payment();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "Email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new TempApi.Payment();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "PhoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new TempApi.Payment();
      //expect(instance).to.be();
    });

    it('should have the property shFirstName (base name: "ShFirstName")', function() {
      // uncomment below and update the code to test the property shFirstName
      //var instance = new TempApi.Payment();
      //expect(instance).to.be();
    });

    it('should have the property shLastName (base name: "ShLastName")', function() {
      // uncomment below and update the code to test the property shLastName
      //var instance = new TempApi.Payment();
      //expect(instance).to.be();
    });

    it('should have the property shEmail (base name: "ShEmail")', function() {
      // uncomment below and update the code to test the property shEmail
      //var instance = new TempApi.Payment();
      //expect(instance).to.be();
    });

    it('should have the property shPhoneNumber (base name: "ShPhoneNumber")', function() {
      // uncomment below and update the code to test the property shPhoneNumber
      //var instance = new TempApi.Payment();
      //expect(instance).to.be();
    });

    it('should have the property shAddress (base name: "ShAddress")', function() {
      // uncomment below and update the code to test the property shAddress
      //var instance = new TempApi.Payment();
      //expect(instance).to.be();
    });

    it('should have the property shZipCode (base name: "ShZipCode")', function() {
      // uncomment below and update the code to test the property shZipCode
      //var instance = new TempApi.Payment();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "Notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new TempApi.Payment();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethod (base name: "PaymentMethod")', function() {
      // uncomment below and update the code to test the property paymentMethod
      //var instance = new TempApi.Payment();
      //expect(instance).to.be();
    });

  });

}));
