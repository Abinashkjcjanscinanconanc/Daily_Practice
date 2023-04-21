const names: Array<string> = ['Abinash', 'Swain'];
names[0].split(' ');

const promise: Promise<any> = new Promise((resolve, reject) => {
    setTimeout(() => {
     resolve('This is done!');
    },2000);
});

promise.then(data => {

})


function merge<T, U>(objA: object, objB: object){
    return Object.assign(objA, objB);
}
const mergedObj = merge({name: 'Abinash'},{age: 21 });





