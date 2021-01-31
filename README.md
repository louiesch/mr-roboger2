# _Mr Roboger's Neighborhood_

#### _Program produces robo-speak based on the user's input._

#### By _**Louie Schoenknecht**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_This page was created for my week 3 individual coding project at Epicodus. The page prompts the user to enter a number. Then, using loops and arrays, the page responds with robo-text. The robo-text is determined as follows: The program takes an input from the user and presents a string counting up to that number from 0. Any numbers in that string which contain the digit "3" are replaced with "Won't you be my neighbor?", any numbers containing the digit "2" are replaced with "Boop!", and any numbers containing the digit "1" are replaced with "Beep!"_

## Setup/Installation Requirements

* _To clone down and open the project, clone the Roboger repository from GitHub._
* _Navigate to root directory of project in terminal, and type 'open index.html' to view in browser._
* _Open project in a text editor to view code._

## Specifications

Describe beepBoop()

* _Test: "It should return 0 if the user input is 0"_
* Expect (beepBoop(0)).toEqual([0]);

* _Test: "It should return a string of numbers from 0 up to and including the user inputted number"_
* Expect (beepBoop(5)).toEqual([0,1,2,3,4,5]);

* _Test: "If the number 3 is input, return a string where all numbers containing the digit 3 are replaced with 'Wont you be my neighbor?'"_
* Expect (beepBoop(3)).toEqual([0, 1, 2, Won't you be my neighbor?]);

* _Test: "If the number 2 is input, return a string where all numbers containing the digit 2 are replaced with 'Wont you be my neighbor?'"_
* Expect (beepBoop(2)).toEqual([0, 1, Boop!]);

* _Test: "If the number 1 is input, return a string where all numbers containing the digit 1 are replaced with 'Beep!'"_
* Expect (beepBoop(1)).toEqual([0, Beep!]);

* _Test: "If number contains multiple digits with exceptions attached, prioritize exceptions in the order listed above."_
* Expect (beepBoop(32)).toEqual([0, 1, ... , Won't you be my neighbor?]);


## Known Bugs

* _No known bugs or issues_

## License

_[MIT](https://choosealicense.com/licenses/mit/)_

_Copyright (c) 2021 Louie Schoenknecht_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact Information

_luisesch97@gmail.com_