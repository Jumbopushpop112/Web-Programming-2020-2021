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
    var side1 = document.getElementById("side1").value;
    var side2 = document.getElementById("side2").value;
    var base = document.getElementById("base").value;
    side1 = parseInt(side1);
    side2 = parseInt(side2);
    base = parseInt(base);
    var perimeter = side1 + side2 + base; 
    document.getElementById("resultingPerimeter").value = perimeter;
    
}


