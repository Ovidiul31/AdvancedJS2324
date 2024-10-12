function truncate(str, nr){
    return str.split('').slice(0,nr).join('');
}
console.log(truncate("JavaScript este un limbaj de programare usor de invatat!", 3))