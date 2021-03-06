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


import ApiClient from "../ApiClient";
import Payment from '../model/Payment';

/**
* Payment service.
* @module api/PaymentApi
* @version 1.0.0
*/
export default class PaymentApi {

    /**
    * Constructs a new PaymentApi. 
    * @alias module:api/PaymentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createpayment operation.
     * @callback module:api/PaymentApi~createpaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Payment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Payment} payment data to be created
     * @param {module:api/PaymentApi~createpaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Payment}
     */
    createpayment(payment, callback) {
      let postBody = payment;
      // verify the required parameter 'payment' is set
      if (payment === undefined || payment === null) {
        throw new Error("Missing the required parameter 'payment' when calling createpayment");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Payment;
      return this.apiClient.callApi(
        '/payment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletepayment operation.
     * @callback module:api/PaymentApi~deletepaymentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} paymentId the Id parameter
     * @param {module:api/PaymentApi~deletepaymentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletepayment(paymentId, callback) {
      let postBody = null;
      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling deletepayment");
      }

      let pathParams = {
        'paymentId': paymentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/payment/{paymentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllpayment operation.
     * @callback module:api/PaymentApi~getAllpaymentCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Payment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/PaymentApi~getAllpaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Payment>}
     */
    getAllpayment(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Payment];
      return this.apiClient.callApi(
        '/payment/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getpayment operation.
     * @callback module:api/PaymentApi~getpaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Payment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} paymentId the Id parameter
     * @param {module:api/PaymentApi~getpaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Payment}
     */
    getpayment(paymentId, callback) {
      let postBody = null;
      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling getpayment");
      }

      let pathParams = {
        'paymentId': paymentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Payment;
      return this.apiClient.callApi(
        '/payment/{paymentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatepayment operation.
     * @callback module:api/PaymentApi~updatepaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Payment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} paymentId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Payment} opts.payment data to be updated
     * @param {module:api/PaymentApi~updatepaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Payment}
     */
    updatepayment(paymentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['payment'];
      // verify the required parameter 'paymentId' is set
      if (paymentId === undefined || paymentId === null) {
        throw new Error("Missing the required parameter 'paymentId' when calling updatepayment");
      }

      let pathParams = {
        'paymentId': paymentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Payment;
      return this.apiClient.callApi(
        '/payment/{paymentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
