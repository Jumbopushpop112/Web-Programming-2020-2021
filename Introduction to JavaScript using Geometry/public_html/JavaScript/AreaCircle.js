/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//alert("JS file linked")
function init()
{
   document.getElementById("calculateCircleArea").addEventListener("click", calcArea); 
}
function calcArea(event)
{
    var radius = document.getElementById("radius").value;
    var area = radius * radius * 3.14;
    document.getElementById("circleArea").value = area;
}


