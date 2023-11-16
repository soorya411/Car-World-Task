
//add cars
function addCar() {
    const car ={
        brand:carbnd.value,
        price:carprz.value,
        key:carkey.value
    }
    if (car.brand == "" || car.price == "" || car.key == "") {
        alert("Please fill in all the data")
    }
    else {
        if  (car.key in localStorage){
                  alert("Car with this key already exists")

        }
        else {
            localStorage.setItem(car.key, JSON.stringify(car));
            alert("Car added successfully")
            document.getElementById("myform").reset()

        }
    }
}



//retrieveCar()

function retrieveCar(){
    let key=searchkey.value;
    if(key ==''){
        alert("Enter Key");
    }
    else{
if( key in localStorage ){
      let  car=JSON.parse(localStorage.getItem(key));
        console.log(`${car}`);
        result1.innerHTML=`<div class="card">
        <div class="card-body">
        <p>Car Brand:${car.brand}</p>
        <p>Car Price:${car.price}</p>
        <p>Car Key:${car.key}</p>
        </div>
      </div>`;
      document.getElementById("result1").reset();
    }
    else{
        alert("Car Doesn't exist in records")
        document.getElementById("result1").reset();

    }
    }
    
}

//remove
function removeCar(){
    let key=deletekey.value;

    if(key ==''){
        alert("Enter Key");
    }
    else{
if( key in localStorage ){
      localStorage.removeItem(key);
        alert("Car deleted successfully")
      document.getElementById("result1").reset();
    }
    else{
        alert("key Doesn't exist ")
        document.getElementById("result1").reset();

    }
    }
    
}

//clear All

function clearAll(){
    localStorage.clear()
    alert("All data are cleared")
}