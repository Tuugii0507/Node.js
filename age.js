// Хүмүүсийн нэр болон насны мэдээллийг persons object array-д өгөгдсөн.
// 18 нас хүрсэн хүмүүсийг ялгаж adults array-д хадгал.

persons = [
        { id: 1, name: "DORJ", age: 19 },
        { id: 2, name: "BOLD", age: 13 },
        { id: 3, name: "BALDAN", age: 15 },
        { id: 4, name: "TSETSGEE", age: 20 },
        { id: 5, name: "DULMAA", age: 23 }
    ];
    let a = persons.filter(element => element.age > 18);

    console.log(String(a.map((x) => x.name)))