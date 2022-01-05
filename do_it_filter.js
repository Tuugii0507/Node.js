// myfilter([1, 2, 3, 4], isEven) higher order function -г өөрөө шинээр бичиж ашиглаж үзэх.
// myfilter(array, func){
//     func(array)
// }


 
const isEven = (x) => {
    if(x % 2 == 0 ){
        return true;
    }else{
        return false;
    }
}


const myfilter = (arr, func) => {
    let a = [];
   arr.forEach(el => {
       if(isEven(el)){
            a.push(el);
       }
   });
   return a;
}
console.log(myfilter([1,2,4,345,3,6,47,3], isEven))
