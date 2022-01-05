        const print = (number , limit) => {
            if(number <= limit){
                console.log(number)
                print(number +1 , limit);

            }else return;
        }
        

    print(1, 23)
