/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//alert("JS file linked")
function init()
{
   document.getElementById("calculateArea").addEventListener("click", calcArea); 
}
function calcArea(event)
{
    var sideMeasurement = document.getElementById("side").value;
    var area = sideMeasurement*sideMeasurement; 
    document.getElementById("resultingArea").value = area;
}