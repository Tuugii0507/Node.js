 const sqrt = (x) => {
    // Math.sqrt(x)
    for(let i=0; i <= x; i++){
        if(i*i == x){
            console.log(i);
            break;
        }else if(i == x){
            console.log('Iim yzguurtai too bhku bn ooy')
            break;
        }
    }
 }

module.exports.sqrt = sqrt;