module.exports = function toReadable (number) {
    let numbers = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
      };
      let numbers2 = {
        0: "ten",
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen"
      };
      
      let numbers3 = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
      };
    
      let num=number.toString().split('').reverse()
      let str=''
      let i=0
      if (number===0) str='zero'
      else {str=numbers[num[i]];
           i++
           if(num[i]==1){
            str=numbers2[num[i-1]]
           }
           else if(num[i]>1){
               str=numbers3[num[i]]+' '+str
           }
           i++
           if(num[i])
               str=numbers[num[i]]+' hundred '+str
           }
        
    return str.trim()
}
