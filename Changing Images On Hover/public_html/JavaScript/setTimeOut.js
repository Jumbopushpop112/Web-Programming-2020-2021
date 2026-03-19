/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()  
{  
    var unblurredPics = ["Images/zero.jpg", "Images/one.jpg", "Images/two.jpg", "Images/three.jpg", "Images/four.jpg", "Images/five.jpg"];
    var blurredPics = ["Images/zeroblur.jpg", "Images/oneblur.jpg", "Images/twoblur.jpg", "Images/threeblur.jpg", "Images/fourblur.jpg", "Images/fiveblur.jpg"];
    //get all image tags and store them in an array
    arrayImageTags = document.getElementsByTagName("IMG");
    for(var i = 0; i<arrayImageTags.length; i++)
    {
        arrayImageTags[i].src = blurredPics[i];      
        //add mouseover event listener use 
        arrayImageTags[i].onclick = function() 
        {
            unBlurImage(event, unblurredPics, blurredPics);
        };
    }
}
function unBlurImage(eventObj, unblurredPics, blurredPics) 
{
    //Get the image tag that triggered this event
    tempImgTag = eventObj.target; 
    var TempID = tempImgTag.id;
    tempImgTag.src = unblurredPics[TempID];
    setTimeout(function(){;tempImgTag.src = blurredPics[TempID];}, 3000);  
} 


