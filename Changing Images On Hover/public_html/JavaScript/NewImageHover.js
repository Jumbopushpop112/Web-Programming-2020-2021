/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.getElementById("img0").onmouseover = function() {changeImg0();};
document.getElementById("img0").onmouseout = function() {hideImg0();};

document.getElementById("img1").onmouseover = function() {changeImg1();};
document.getElementById("img1").onmouseout = function() {hideImg1();};

document.getElementById("img2").onmouseover = function() {changeImg2();};
document.getElementById("img2").onmouseout = function() {hideImg2();};

document.getElementById("img3").onmouseover = function() {changeImg3();};
document.getElementById("img3").onmouseout = function() {hideImg3();};

document.getElementById("img4").onmouseover = function() {changeImg4();};
document.getElementById("img4").onmouseout = function() {hideImg4();};

document.getElementById("img5").onmouseover = function() {changeImg5();};
document.getElementById("img5").onmouseout = function() {hideImg5();};  

//JavaScript code that changes the images using the .onmouseover and .onmouseout events.

function changeImg0()  
{
   var img0 = document.getElementById("img0"); 
   img0.src = "Images/zero.jpg";  
}
function hideImg0()
{
   var img0 = document.getElementById("img0"); 
   img0.src = "Images/zeroblur.jpg";
}
function changeImg1()
{
   var img1 = document.getElementById("img1"); 
   img1.src = "Images/one.jpg";
}
function hideImg1()
{
   var img1 = document.getElementById("img1");
   img1.src = "Images/oneblur.jpg"; 
}
function changeImg2()
{
    var img2 = document.getElementById("img2");
    img2.src = "Images/two.jpg";
}
function hideImg2()
{
    var img2 = document.getElementById("img2");
    img2.src = "Images/twoblur.jpg";
}
function changeImg3()
{
    var img3 = document.getElementById("img3");
    img3.src = "Images/three.jpg";
}
function hideImg3()
{
    var img3 = document.getElementById("img3");
    img3.src = "Images/threeblur.jpg";  
}
function changeImg4()
{
    var img4 = document.getElementById("img4");
    img4.src = "Images/four.jpg";
}
function hideImg4()
{
    var img4 = document.getElementById("img4");
    img4.src = "Images/fourblur.jpg"; 
}
function changeImg5()
{
    var img5 = document.getElementById("img5");
    img5.src = "Images/five.jpg";
}
function hideImg5()
{
    var img5 = document.getElementById("img5");
    img5.src = "Images/fiveblur.jpg";
}


