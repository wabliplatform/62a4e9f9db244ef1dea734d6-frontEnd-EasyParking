# TempApi.PaymentApi

All URIs are relative to *http://83.212.100.226:3004/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createpayment**](PaymentApi.md#createpayment) | **POST** /payment | Creates the data
[**deletepayment**](PaymentApi.md#deletepayment) | **DELETE** /payment/{paymentId} | Delete the element
[**getAllpayment**](PaymentApi.md#getAllpayment) | **GET** /payment/getAll | Get all the data
[**getpayment**](PaymentApi.md#getpayment) | **GET** /payment/{paymentId} | Get the element
[**updatepayment**](PaymentApi.md#updatepayment) | **PUT** /payment/{paymentId} | Updates the element



## createpayment

> Payment createpayment(payment)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PaymentApi();
let payment = new TempApi.Payment(); // Payment | data to be created
apiInstance.createpayment(payment, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment** | [**Payment**](Payment.md)| data to be created | 

### Return type

[**Payment**](Payment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletepayment

> deletepayment(paymentId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PaymentApi();
let paymentId = "paymentId_example"; // String | the Id parameter
apiInstance.deletepayment(paymentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllpayment

> [Payment] getAllpayment()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PaymentApi();
apiInstance.getAllpayment((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Payment]**](Payment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getpayment

> Payment getpayment(paymentId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PaymentApi();
let paymentId = "paymentId_example"; // String | the Id parameter
apiInstance.getpayment(paymentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | **String**| the Id parameter | 

### Return type

[**Payment**](Payment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatepayment

> Payment updatepayment(paymentId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.PaymentApi();
let paymentId = "paymentId_example"; // String | the Id parameter
let opts = {
  'payment': new TempApi.Payment() // Payment | data to be updated
};
apiInstance.updatepayment(paymentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | **String**| the Id parameter | 
 **payment** | [**Payment**](Payment.md)| data to be updated | [optional] 

### Return type

[**Payment**](Payment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

