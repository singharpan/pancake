const checkPanagram=(str)=>{
    const arr=new Array(26).fill(false)
    let index;
    for(let i=0 ;i <str.length ;i++){
        if(str[i] >="A" && str[i] <= 'Z'){
            console.log(str[i])
        }
    }

}
checkPanagram('ARPAN')