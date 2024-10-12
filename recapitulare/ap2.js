function palindrom(str){
    let reversedString="";
    for(let i=0;i<str.length;i++){
        reversedString=str.charAt(i)+reversedString;
        console.log(reversedString);
    }
    if(str==reversedString){
        return true;
    }
    else{
        return false;
    }
    let cuvant ='ana';
    console.log(palindrom(cuvant));
    
}