# TempApi.ParkinglotApi

All URIs are relative to *http://83.212.100.226:3004/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createparkinglot**](ParkinglotApi.md#createparkinglot) | **POST** /parkinglot | Creates the data
[**deleteparkinglot**](ParkinglotApi.md#deleteparkinglot) | **DELETE** /parkinglot/{parkinglotId} | Delete the element
[**getAllparkinglot**](ParkinglotApi.md#getAllparkinglot) | **GET** /parkinglot/getAll | Get all the data
[**getparkinglot**](ParkinglotApi.md#getparkinglot) | **GET** /parkinglot/{parkinglotId} | Get the element
[**updateparkinglot**](ParkinglotApi.md#updateparkinglot) | **PUT** /parkinglot/{parkinglotId} | Updates the element



## createparkinglot

> Parkinglot createparkinglot(parkinglot)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ParkinglotApi();
let parkinglot = new TempApi.Parkinglot(); // Parkinglot | data to be created
apiInstance.createparkinglot(parkinglot, (error, data, response) => {
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
 **parkinglot** | [**Parkinglot**](Parkinglot.md)| data to be created | 

### Return type

[**Parkinglot**](Parkinglot.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteparkinglot

> deleteparkinglot(parkinglotId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ParkinglotApi();
let parkinglotId = "parkinglotId_example"; // String | the Id parameter
apiInstance.deleteparkinglot(parkinglotId, (error, data, response) => {
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
 **parkinglotId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllparkinglot

> [Parkinglot] getAllparkinglot()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ParkinglotApi();
apiInstance.getAllparkinglot((error, data, response) => {
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

[**[Parkinglot]**](Parkinglot.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getparkinglot

> Parkinglot getparkinglot(parkinglotId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ParkinglotApi();
let parkinglotId = "parkinglotId_example"; // String | the Id parameter
apiInstance.getparkinglot(parkinglotId, (error, data, response) => {
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
 **parkinglotId** | **String**| the Id parameter | 

### Return type

[**Parkinglot**](Parkinglot.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateparkinglot

> Parkinglot updateparkinglot(parkinglotId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ParkinglotApi();
let parkinglotId = "parkinglotId_example"; // String | the Id parameter
let opts = {
  'parkinglot': new TempApi.Parkinglot() // Parkinglot | data to be updated
};
apiInstance.updateparkinglot(parkinglotId, opts, (error, data, response) => {
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
 **parkinglotId** | **String**| the Id parameter | 
 **parkinglot** | [**Parkinglot**](Parkinglot.md)| data to be updated | [optional] 

### Return type

[**Parkinglot**](Parkinglot.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

