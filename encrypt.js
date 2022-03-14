/*
 * This function encrypts 8-digit binary data representation at a time
 * @author dchu2021
 * @param {string} input - the 8-digit binary to be shifted
 * @param {string} key - the key used to encrypt the 8-digit binary
 * @param {string} type - type of encryption used
 
 * @return {string} the encrypted 8 digit binary
 *
 * @example
 *
 *     var encryptedCharacter = encryption(plain8DigitBinary,3,"caesar");
 */

function encrypt(input, key, type){
    
    var output="";
    
    if(type == "caesar"){

        var inputDecimalShifted = parseInt(input,2)+key;

        if(inputDecimalShifted >255){

            inputDecimalShifted = inputDecimalShifted - 255;
            
        }
        output=inputDecimalShifted.toString(2);

        var loopTimes = 8-output.length;

        for(var i=0;i<loopTimes;i++){

            output = "0"+output;
        }
        if(output.length!=8){

            console.log("ERROR!!!!");
        }
            
    }
    return output
}