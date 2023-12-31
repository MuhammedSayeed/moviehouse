function getRandomNumber (max){
    let randomNum = Math.floor(Math.random() * max);
    if(randomNum == 0){
       return randomNum = Math.floor(Math.random() * max)
    }else{
        return randomNum;

    }
}
function truncateString(limit,title) {
    return title?.length > limit ? title.substr(0, limit) + '..' :
        title;
}
function getYears(date) {
    const datee = new Date(`${date}`);
    return datee.getFullYear();
}
function roundToOneDecimalPlace(number) {
    return Math.round(number * 10) / 10;
}
export {
    getRandomNumber,
    truncateString,
    getYears,
    roundToOneDecimalPlace
}