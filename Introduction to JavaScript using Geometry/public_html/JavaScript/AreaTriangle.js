/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
   document.getElementById("calculateArea").addEventListener("click", calcArea); 
}
function calcArea(event)
{
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    base = parseInt(base); 
    height = parseInt(height);
    var total = base * height;  
    var area = total/2;
    document.getElementById("resultingArea").value = area; 
}

