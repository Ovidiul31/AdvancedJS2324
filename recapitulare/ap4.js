const DAY_INMILISECONDS = 100*60*60*24;

function getDaysBetweenDates(dateText1, dateText2){
    const date1= new Date(dateText1);
    const date2=  new Date(DataText2);
    const diffTIme = Math.abs(Date2-date1);
    const diffDays = Math.ceil(diffTime / DAY_IN_MILISECONDS);
    return diffDays;
}
let currDate= new Date();
let days = getDaysBetweenDates(currDate,'06/18/2024');
console.log('nr de zile', zile);