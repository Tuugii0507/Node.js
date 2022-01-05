
// users array object өгөгдсөн бол name -ын эхний үсгийг томруулах. (Pure function)
const users = [
    { id: 11, name: 'bat', age: 23, group: 'editor' },
    { id: 47, name: 'bold', age: 28, group: 'admin' },
    { id: 85, name: 'tulga', age: 34, group: 'editor' },
    { id: 97, name: 'suren', age: 28, group: 'admin' }
    ];
    const big = users.map((ell) => {
        let bigG = ell.name[0].toUpperCase() + ell.name.slice(1);
        return {...ell, name: bigG}
    })

    console.log(big)

