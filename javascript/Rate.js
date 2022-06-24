let apiRatingApi = new TempApi.RatingApi();import TempApi from '../src/index';let rating = new TempApi.Rating();document.getElementById('ib3a48').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Search_1' ;}};document.getElementById('ii29qa').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/MyRentals' ;}};document.getElementById('in0h5').onclick = (event) => {
    event.preventDefault();
    apiRatingApi.createrating( rating, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); { history.back(); }}});};window.onload = () => {};