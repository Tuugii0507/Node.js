// // 1\number,1\a,2\p,3\number,5\a, 8\p
// const fonikio = (number) => {
    
//     let n1 = 0, n2 = 1, nextTerm;
//     let i = 1;
//     i++
//      if(i <= number) {
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }
//     console.log(n1);

// }

// fonikio(10)
const fb = (n) => {
    if(n<2){
        return n;
    }else{
        return fb (n-1)+ fb(n-2)
    }
}
fb(10)