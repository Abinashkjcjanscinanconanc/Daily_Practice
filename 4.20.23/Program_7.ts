interface ErrorContainer {
        [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital charecter'
};

const fetchUserData = {
    id: 'u1',
    name: 'Max',
    job: {title: 'CEO', description: 'My own company'}
};

console.log(fetchUserData?.job?.title);


const userInput = ' ';
const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

