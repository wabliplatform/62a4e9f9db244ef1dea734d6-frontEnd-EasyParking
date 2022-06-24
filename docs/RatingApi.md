# TempApi.RatingApi

All URIs are relative to *http://83.212.100.226:3004/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createrating**](RatingApi.md#createrating) | **POST** /rating | Creates the data
[**deleterating**](RatingApi.md#deleterating) | **DELETE** /rating/{ratingId} | Delete the element
[**getAllrating**](RatingApi.md#getAllrating) | **GET** /rating/getAll | Get all the data
[**getrating**](RatingApi.md#getrating) | **GET** /rating/{ratingId} | Get the element
[**updaterating**](RatingApi.md#updaterating) | **PUT** /rating/{ratingId} | Updates the element



## createrating

> Rating createrating(rating)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RatingApi();
let rating = new TempApi.Rating(); // Rating | data to be created
apiInstance.createrating(rating, (error, data, response) => {
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
 **rating** | [**Rating**](Rating.md)| data to be created | 

### Return type

[**Rating**](Rating.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleterating

> deleterating(ratingId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RatingApi();
let ratingId = "ratingId_example"; // String | the Id parameter
apiInstance.deleterating(ratingId, (error, data, response) => {
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
 **ratingId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllrating

> [Rating] getAllrating()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RatingApi();
apiInstance.getAllrating((error, data, response) => {
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

[**[Rating]**](Rating.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getrating

> Rating getrating(ratingId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RatingApi();
let ratingId = "ratingId_example"; // String | the Id parameter
apiInstance.getrating(ratingId, (error, data, response) => {
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
 **ratingId** | **String**| the Id parameter | 

### Return type

[**Rating**](Rating.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updaterating

> Rating updaterating(ratingId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RatingApi();
let ratingId = "ratingId_example"; // String | the Id parameter
let opts = {
  'rating': new TempApi.Rating() // Rating | data to be updated
};
apiInstance.updaterating(ratingId, opts, (error, data, response) => {
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
 **ratingId** | **String**| the Id parameter | 
 **rating** | [**Rating**](Rating.md)| data to be updated | [optional] 

### Return type

[**Rating**](Rating.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

