// Өгөгдсөн код дээрх даалгаврыг map, filter, reduce ашиглан гүйцэтгэж үр дүн console руу хэвлэ.
const users = [
{ id: 11, name: 'Bat', age: 23, group: 'editor' },
{ id: 47, name: 'Bold', age: 28, group: 'admin' },
{ id: 85, name: 'Tulga', age: 34, group: 'editor' },
{ id: 97, name: 'Suren', age: 28, group: 'admin' }
];
const adaminaa = (admin) => admin.group == "admin";

let a = users.filter(adaminaa);
// const adminaa = users.filter(users => users.group == "admin" ? console.log({...el, users: group}))
// "admin" хэрэглэгчдийг шүүж ав. (Pure Function)
console.log(a)