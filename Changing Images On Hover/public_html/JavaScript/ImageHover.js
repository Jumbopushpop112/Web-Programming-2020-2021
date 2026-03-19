/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init()  
{
    var unblurredImages = ["Images/zero.jpg", "Images/one.jpg", "Images/two.jpg", "Images/three.jpg", "Images/four.jpg", "Images/five.jpg"];
    var blurredImages = ["Images/zeroblur.jpg", "Images/oneblur.jpg", "Images/twoblur.jpg", "Images/threeblur.jpg", "Images/fourblur.jpg", "Images/fiveblur.jpg"];
    //get all image tags and store them in an array
    arrayImageTags = document.getElementsByTagName("IMG");
    for(var i = 0; i<arrayImageTags.length; i++)
    {
        arrayImageTags[i].src = blurredImages[i];  
        //add mouseover event listener use 
        arrayImageTags[i].onmouseover = function() 
        {
            unBlurImage(event, unblurredImages);
        };
        arrayImageTags[i].onmouseout = function() 
        {
            reBlurImage(event, blurredImages); 
        }; 
    }
}
/** 
 * 
 * @param {type} eventObj -- event that triggered this function call
 * @param {array} unblurredImages arry of file names to the unblurred iamges
 * @returns {undefined}
 */
function unBlurImage(eventObj, unblurredImages)
{
    //Get the image tag that triggered this event
    tempImgTag = eventObj.target;
    var TempID = tempImgTag.id;
    tempImgTag.src = unblurredImages[TempID];
   
} 
function reBlurImage(eventObj, blurredImages)
{
    //Get the image tag that triggered this event
    tempImgTag = eventObj.target;
    var TempID = tempImgTag.id;
    tempImgTag.src = blurredImages[TempID];
}

