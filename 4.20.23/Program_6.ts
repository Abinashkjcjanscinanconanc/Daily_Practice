class Car {
    drive(){
        console.log('Driving...');
    } 
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

loadCargo(amount: number) {
    console.log('Loading Cargo ...'+amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
     vehicle.drive();
     if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
     }
}

useVehicle(v1);
useVehicle(v2);