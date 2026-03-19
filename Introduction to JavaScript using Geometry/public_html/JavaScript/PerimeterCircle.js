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
   var radius = document.getElementById("radius").value;
   var perimeter = 2 * 3.14 * radius;
   document.getElementById("resultingPerimeter").value = perimeter;  
}

