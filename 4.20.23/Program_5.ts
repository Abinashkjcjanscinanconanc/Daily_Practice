type Admin1 = {
    name: string,
    privileges: string[];
};

type Employee1 = {
    name: string;
    startDate: Date;
};
const e2: ElevatedEmployee ={
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type unknownEmployee = Employee1 | Admin1;

function printEmployeeInformation(emp: unknownEmployee) {
    console.log('Name: ' + emp.name);
     if('privileges' in emp) {
        console.log('privileges');
     }
     if('startDate' in emp){
        console.log('privileges');
     }
}
printEmployeeInformation(e2);