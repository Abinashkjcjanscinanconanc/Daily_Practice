function extractAndConvert(obj: object, key: string) {
    return 'value :'+obj[key];
}
extractAndConvert({}, 'name');

class DataStorage{

    private data =  [];

    addItem(item: string) {
       console.log(item);
    }

    removeItem(item) {
    
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage();
textStorage.addItem('A');
textStorage.removeItem('A');
console.log(textStorage.getItems());