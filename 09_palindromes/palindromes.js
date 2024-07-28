const palindromes = function (text) {
    //make a constant with the stuff you wanna include
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleaned = text.toLowerCase()
        .split('')
        .filter((item) => alphanumerical.includes(item)) //use constant to filter
        .join(' ');
    const reverse = cleaned.split('').reverse('').join('');
    //make use of the array methods!

    return cleaned == reverse; //don't need an if statement to return true or false, just return the logical condition!
    /*
    let original = [];
    for(let i = 0; i < text.length; i++){
        if(text[i].toLowerCase() != text[i].toUpperCase() || parseFloat(text[i]) != NaN){
            original[i] = text[i].toLowerCase();
        }
    }
    console.log(original.join(''));
    let reverse = [];
    let reverseCount = 0;
    for(let i = original.length; i > -1; i--){
        reverse[reverseCount] = original[i];
        reverseCount++;
    }
    let reversedText = reverse.join('');
    console.log(reversedText);
    if(original.join('') === reversedText){
        return true
    }else{
        return false;
    }
    */
};
// Do not edit below this line
module.exports = palindromes;
