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


import ApiClient from './ApiClient';
import Parkinglot from './model/Parkinglot';
import Payment from './model/Payment';
import Rating from './model/Rating';
import Rental from './model/Rental';
import User from './model/User';
import ParkinglotApi from './api/ParkinglotApi';
import PaymentApi from './api/PaymentApi';
import RatingApi from './api/RatingApi';
import RentalApi from './api/RentalApi';
import UserApi from './api/UserApi';


/**
* This_is_a_sample_openApi_document.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TempApi = require('index'); // See note below*.
* var xxxSvc = new TempApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TempApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TempApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TempApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Parkinglot model constructor.
     * @property {module:model/Parkinglot}
     */
    Parkinglot,

    /**
     * The Payment model constructor.
     * @property {module:model/Payment}
     */
    Payment,

    /**
     * The Rating model constructor.
     * @property {module:model/Rating}
     */
    Rating,

    /**
     * The Rental model constructor.
     * @property {module:model/Rental}
     */
    Rental,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The ParkinglotApi service constructor.
    * @property {module:api/ParkinglotApi}
    */
    ParkinglotApi,

    /**
    * The PaymentApi service constructor.
    * @property {module:api/PaymentApi}
    */
    PaymentApi,

    /**
    * The RatingApi service constructor.
    * @property {module:api/RatingApi}
    */
    RatingApi,

    /**
    * The RentalApi service constructor.
    * @property {module:api/RentalApi}
    */
    RentalApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};

export default {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Parkinglot model constructor.
     * @property {module:model/Parkinglot}
     */
    Parkinglot,

    /**
     * The Payment model constructor.
     * @property {module:model/Payment}
     */
    Payment,

    /**
     * The Rating model constructor.
     * @property {module:model/Rating}
     */
    Rating,

    /**
     * The Rental model constructor.
     * @property {module:model/Rental}
     */
    Rental,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The ParkinglotApi service constructor.
    * @property {module:api/ParkinglotApi}
    */
    ParkinglotApi,

    /**
    * The PaymentApi service constructor.
    * @property {module:api/PaymentApi}
    */
    PaymentApi,

    /**
    * The RatingApi service constructor.
    * @property {module:api/RatingApi}
    */
    RatingApi,

    /**
    * The RentalApi service constructor.
    * @property {module:api/RentalApi}
    */
    RentalApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
