const chocolates = [
    { "dark": true, "flavour": "strawberry" },
    { "dark": false, "flavour": "strawberry" },
    { "dark": false, "flavour": "almond" },
    { "dark": true, "flavour": "almond" },
    { "dark": false, "flavour": "lemon" },
];

const checkProperty = (prop) => (value) => (elem) => elem[prop] == value;


const darkChocolates = chocolates.filter(checkProperty("dark")(false));
console.log(darkChocolates);

const almondChocolates = chocolates.filter(checkProperty("flavour")("almond"));
console.log(almondChocolates);