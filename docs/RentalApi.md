# TempApi.RentalApi

All URIs are relative to *http://83.212.100.226:3004/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createrental**](RentalApi.md#createrental) | **POST** /rental | Creates the data
[**deleterental**](RentalApi.md#deleterental) | **DELETE** /rental/{rentalId} | Delete the element
[**getAllrental**](RentalApi.md#getAllrental) | **GET** /rental/getAll | Get all the data
[**getrental**](RentalApi.md#getrental) | **GET** /rental/{rentalId} | Get the element
[**updaterental**](RentalApi.md#updaterental) | **PUT** /rental/{rentalId} | Updates the element



## createrental

> Rental createrental(rental)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RentalApi();
let rental = new TempApi.Rental(); // Rental | data to be created
apiInstance.createrental(rental, (error, data, response) => {
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
 **rental** | [**Rental**](Rental.md)| data to be created | 

### Return type

[**Rental**](Rental.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleterental

> deleterental(rentalId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RentalApi();
let rentalId = "rentalId_example"; // String | the Id parameter
apiInstance.deleterental(rentalId, (error, data, response) => {
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
 **rentalId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllrental

> [Rental] getAllrental()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RentalApi();
apiInstance.getAllrental((error, data, response) => {
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

[**[Rental]**](Rental.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getrental

> Rental getrental(rentalId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RentalApi();
let rentalId = "rentalId_example"; // String | the Id parameter
apiInstance.getrental(rentalId, (error, data, response) => {
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
 **rentalId** | **String**| the Id parameter | 

### Return type

[**Rental**](Rental.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updaterental

> Rental updaterental(rentalId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.RentalApi();
let rentalId = "rentalId_example"; // String | the Id parameter
let opts = {
  'rental': new TempApi.Rental() // Rental | data to be updated
};
apiInstance.updaterental(rentalId, opts, (error, data, response) => {
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
 **rentalId** | **String**| the Id parameter | 
 **rental** | [**Rental**](Rental.md)| data to be updated | [optional] 

### Return type

[**Rental**](Rental.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

