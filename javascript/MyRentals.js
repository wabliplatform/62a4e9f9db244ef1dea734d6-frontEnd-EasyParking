let apiRentalApi = new TempApi.RentalApi();import TempApi from '../src/index';document.getElementById('i2vw').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Search_1' ;}};document.getElementById('i87ls').onclick = (event) => {
    event.preventDefault();
    let rentalId = window.location.pathname.replace('/MyRentals/','');
      if(rentalId === '/MyRentals' || rentalId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i87ls")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            rentalId = value._id;
            parentId = key;
          }
        });
      }
    apiRentalApi.deleterental( rentalId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};window.onload = () => {};