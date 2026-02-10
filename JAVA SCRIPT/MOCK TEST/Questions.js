//remove duplicate
let num =[1,2,2,3,4,5,6]
let output =[]
for(let i=0;i<num.length;i++){
    let found = false;
    for(let j=0;j<output.length;j++){
        if(num[i] == output[j]){
            found =true
        }
    }
    if(!found){
        output.push(num[i])
    }
}
console.log(output);

//factorial 
let value =1
for(let a=1;a<=5;a++){
    value *=a
}
console.log(value);

//frequency of character
function frequency(){
    let stringvalue ='javascript'
    let empty =''
    for(let q=1;q<stringvalue.length;i++){
        let charcter =stringvalue[q]
        if(empty[charcter]){
            empty[charcter]++
        }
        else{
            empty[charcter] =1
        }
    }
    console.log(empty);
    
    frequency()
}
