let apiRentalApi = new TempApi.RentalApi();import TempApi from '../src/index';let rental = new TempApi.Rental();document.getElementById('ib3a48').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Search_1' ;}};document.getElementById('ii29qa').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/MyRentals' ;}};document.getElementById('ix20h1').onclick = (event) => {
    event.preventDefault();
    apiRentalApi.createrental( rental, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); }});};window.onload = () => {};