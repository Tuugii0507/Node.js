// Өгөгдсөн код дээрх даалгаврыг map, filter, reduce ашиглан гүйцэтгэж үр дүн console руу хэвлэ.

// Доорх users нэртэй array object-ын "admin", "editor" group -тэй хүмүүс тус бүр хичнээн байгааг тоол
const users = [
{ id: 11, name: 'Bat', age: 23, group: 'editor' },
{ id: 47, name: 'Bold', age: 28, group: 'admin' },
{ id: 85, name: 'Tulga', age: 34, group: 'editor' },
{ id: 97, name: 'Suren', age: 28, group: 'admin' }
];

// Үр дүнд { admin: 2, editor: 2 } object буцаах. /Pure Function/

    const result = users.filter(el => el.group == "admin");
    const result1 = users.filter(el => el.group == "editor");
    let a = {
        admin: result.length,
        editor: result1.length
    }
    console.log(a)

    
