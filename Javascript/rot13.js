function rot13(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++)
    {
        let toAscii = str.charCodeAt(i);
            if (toAscii >= 65 && toAscii <= 77 || toAscii >= 97 && toAscii <= 109)
                newStr += String.fromCharCode(toAscii + 13);
            else if (toAscii >= 78 && toAscii <= 90 || toAscii >= 110 && toAscii <= 122)
                newStr += String.fromCharCode(toAscii - 13);
            else
                newStr += str[i];
    }
    return newStr;
}

console.log(rot13("UNEQPBQREF cool"));
console.log(rot13("ZBPUN YR PUVRA"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("P'RFG Y'VARKCHTANOYR NEEBTNAPR QR IBGER ORNHGR DHV Z'NFCRETR."));