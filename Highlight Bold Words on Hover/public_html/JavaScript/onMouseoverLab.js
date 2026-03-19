/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    //variable that gets the bold words in the document
    var boldwords = document.getElementsByTagName("b"); 
    //varaible that gets the element with the id of anchor
    var link = document.getElementById("anchor");
    //when we hover on the link, we loop through and set the background color to yellow
    link.onmouseover = function(){
    for(var i=0; i<boldwords.length; i++)
       { 
          boldwords[i].style.backgroundColor = "yellow";
       }
    }; 
    //when we hover off the link, we loop through and set the background color to black
    link.onmouseout = function(){ 
      for(var i=0; i<boldwords.length; i++) 
       {
          boldwords[i].style.backgroundColor = "white"; 
       }
    };
}


