interface Lengthy {
 length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = 'Got no value.';
    if(element.length === 1) {
        descriptionText = 'Got 1 elements.';
    }else if (element.length > 1) {
        descriptionText = 'Got' + element.length + 'elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there !'));