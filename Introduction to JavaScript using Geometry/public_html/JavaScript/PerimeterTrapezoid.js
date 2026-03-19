/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
   document.getElementById("calculatePerimeter").addEventListener("click", calcPerimeter); 
}
function calcPerimeter(event)
{
    var base1 = document.getElementById("base1").value;
    var base2 = document.getElementById("base2").value;
    var side1 = document.getElementById("side1").value; 
    var side2 = document.getElementById("side2").value;
    base1 = parseInt(base1);
    base2 = parseInt(base2);
    side1 = parseInt(side1);
    side2 = parseInt(side2);
    var perimeter = base1 + base2 + side1 + side2;
    document.getElementById("resultingPerimeter").value = perimeter;
}

