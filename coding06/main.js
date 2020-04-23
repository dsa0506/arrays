/*
    Author: David Salinas
    Date: 04/06/2020
    File Name: main.js
*/

"use strict";

/*
 * This is a global array which also happens to be a constant,
 * so it's okay that it's global. This array represents the
 * first n Prime numbers (you figure out n dynamically).
 * Do not modify this array.
 */
const P = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

/*
 * this will test a string contains only digit characters
 * Do not modify it.
 */
function validate_number(strn) {
    let re = /^[0-9]+$/;
    return re.test(strn);
}

function calc_primorial(n) {
    /*
     *  In this assignment you will write a program that calculates from an array and display the array
     */
    let total = 1;
    let len = P;
    for (let i = 0 ; i < len; i++){
        total *= n[i]
    }
    return total;
}

function calc_average(total, n) {
    /*
     * pass this function the primorial and the number of primes that were
     * used to calculat it. return the average. Hint: it's just one line of code
     */

    
}

function display_primes(){
    /*
     * pass nothing, return nothing. just print to the page
     * as shown in the examples
     */
    document.getElementById("primes-btn").onclick ()
}

function primorial() {
    /*
     * This is your driver function. put your main logic here, use the
     * functions above to do the work indicated by their name.
     */
    
}

// even handlers, do not modify
document.getElementById("primorial-btn").addEventListener('click', primorial);
document.getElementById("primes-btn").addEventListener('click', display_primes);
