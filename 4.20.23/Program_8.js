var names = ['Abinash', 'Swain'];
names[0].split(' ');
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is done!');
    }, 2000);
});
promise.then(function (data) {
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'Abinash' }, { age: 21 });
