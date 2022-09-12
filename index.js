function createphone(num) {
    format = `(xxx) xxx-xxxx`;
    for( var i = 0; i < num.length ; i++){
        format = format.replace(`x`, num[i]);
    }

    return format;
}

function remove(str) {
     let newstr= ``;

     for (i = 0; i < str.length; i++) {
         if (i !== 0 && i!== str.length-1) {
             newstr += str[i];
         }
     }
     return newstr;
}