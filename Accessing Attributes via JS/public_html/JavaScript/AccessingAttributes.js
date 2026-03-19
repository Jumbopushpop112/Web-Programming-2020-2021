/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//JavaScript code that gets the attributes, loops through them and sets the background color after.
function getAttributes()
{ 
    var id = document.getElementsByTagName("a")[0].getAttribute("id");
    var type = document.getElementsByTagName("a")[0].getAttribute("type");
    var hreflang = document.getElementsByTagName("a")[0].getAttribute("hreflang");
    var rel = document.getElementsByTagName("a")[0].getAttribute("rel");
    var target = document.getElementsByTagName("a")[0].getAttribute("target");
    var href = document.getElementsByTagName("a")[0].getAttribute("href"); 
    var section = document.getElementById("attribsExtracted");
    var results = [];
    results.push("Id is " + id);
    results.push("Type is " + type);
    results.push("Hreflang is " + hreflang);
    results.push("Rel is " + rel);
    results.push("Target is " + target);
    results.push("Href is " + href);
    for(var i = 0; i<results.length; i++) 
    {
      section.innerHTML = section.innerHTML + "<br />" + results[i]; 
    }
 section.style.backgroundColor = "yellow";   
    
}


