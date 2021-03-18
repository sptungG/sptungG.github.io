class NumberToWord {
    constructor(context) {
      this.setElements(context);
      this.setEvents();
    }
  
    setElements(context) {
      this.button = context.querySelector(".js-convert-number");
      this.showResult = context.querySelector(".js-result");
      this.input = context.querySelector(".js-number-input");
    }
  
    setEvents() {
      this.button.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
  
          this.showResult.innerHTML = this.convertNumber(this.input.value);
        },
        false
      );
    }
  
    convertNumber(number) {
      const language = {
        units: [
          "",
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "ten",
          "eleven",
          "twelve",
          "thirteen",
          "fourteen",
          "fifteen",
          "sixteen",
          "seventeen",
          "eighteen",
          "nineteen"
        ],
        tens: [
          "",
          "",
          "twenty",
          "thirty",
          "forty",
          "fifty",
          "sixty",
          "seventy",
          "eighty",
          "ninety"
        ],
        scales: [
          "",
          "thousand",
          "million",
          "billion",
          "trillion",
          "quadrillion",
          "quintillion",
          "sextillion",
          "septillion",
          "octillion",
          "nonillion",
          "decillion",
          "undecillion",
          "duodecillion",
          "tredecillion",
          "quatttuor-decillion",
          "quindecillion",
          "sexdecillion",
          "septen-decillion",
          "octodecillion",
          "novemdecillion",
          "vigintillion",
          "centillion"
        ],
        negative: "minus",
        zero: "zero",
        hundred: "hundred",
        and: "and"
      };
  
      let numberToString = number.toString().replace("-", "");
      let numberLength = numberToString.length;
      let sections = [];
      let words = [];
      let endPoint = 0;
      let integers = 0;
  
      if (parseInt(number) === 0) {
        return language.zero;
      }
  
      while (numberLength > 0) {
        endPoint = numberLength;
  
        sections.push(
          numberToString.slice(
            (numberLength = Math.max(0, numberLength - 3)),
            endPoint
          )
        );
      }
  
      for (let i = 0; i < sections.length; i++) {
        integers = sections[i].split("").reverse().map(parseFloat);
  
        if (integers[1] === 1) {
          integers[0] += 10;
        }
  
        if (language.scales[i]) {
          words.push(language.scales[i]);
        }
  
        if (language.units[integers[0]]) {
          words.push(language.units[integers[0]]);
        }
  
        if (language.tens[integers[1]]) {
          words.push(language.tens[integers[1]]);
        }
  
        if (integers[0] || integers[1]) {
          if (integers[2] || (i === 0 && number > 100)) {
            words.push(language.and);
          }
        }
  
        if (language.units[integers[2]]) {
          words.push(language.units[integers[2]] + " " + language.hundred);
        }
      }
  
      if (number < 0) {
        words.push(language.negative);
      }
  
      return words.reverse().join(" ");
    }
  }
  
  const numberToWord = new NumberToWord(
    document.querySelector(".js-number-to-word")
  );
  