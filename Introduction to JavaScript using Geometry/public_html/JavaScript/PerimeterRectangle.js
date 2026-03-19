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
    var sideMeasurement = document.getElementById("side").value;
    var area = sideMeasurement*4;
    document.getElementById("resultingPerimeter").value = area;
}


