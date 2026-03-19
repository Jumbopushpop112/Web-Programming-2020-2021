/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
   document.getElementById("calculateTrapezoidArea").addEventListener("click", calcArea); 
}
function calcArea(event)
{
    var base1 = document.getElementById("base1").value;
    var base2 = document.getElementById("base2").value;
    var height = document.getElementById("height").value;
    base1 = parseInt(base1);
    base2 = parseInt(base2);
    height = parseInt(height);
    var halfbase = base1 + base2; 
    var base = halfbase/2;
    var area = base * height;
    document.getElementById("trapezoidArea").value = area;
}

