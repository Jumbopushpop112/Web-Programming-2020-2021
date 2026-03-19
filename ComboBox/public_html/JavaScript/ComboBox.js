//One global variable to store the quotes to be used in this JS file
var arrQuotes = [];
function init()
{
    //get local storage
    getLocalStorage();
    //Display quotes inside the select tag
    displayQuotes();
    
   document.getElementById("buttonSave").addEventListener("click", saveQuote);
   
   document.getElementById("usersEntries").addEventListener("change", deleteQuote); 
} 
 
function getLocalStorage() 
{ 
    //try to get data associate the key "quotes"
    var strCurrentStorage = localStorage.getItem("quotes");
    //OR var strCurrentStorage = localStorage["quotes"];
    
    //testing if localStorage returned null
    if(strCurrentStorage !== null)
    {
        //we got data from LS. Let's append it to global array called arrQuotes
        var objCurStorage = JSON.parse(strCurrentStorage); //turn string into JSON obj
        //walk through the objCurStorage and append/push each quote to arrQuotes
        for(var i =0; i<objCurStorage.length; i++)
          arrQuotes.push(objCurStorage);
         
        
    } 
    else
    {
        //we did not get data from LS, so set up some default quotes
        arrQuotes = ["Who says nothing is impossible? I've been doing nothing for years.",
    "The man who smiles when things go wrong has thought of someone to blame it on.",
    "Smile today, tomorrow could be worse."];
        
    }
}//End getLocalStorage function

function displayQuotes()
{
   var tempSelectTag = document.getElementById("usersEntries");
   //walk through the array of quotes and for every one create an option tag
   for(var i = 0; i<arrQuotes.length; i++)
   {
       var tempOptionTag = document.createElement("OPTION");
       tempOptionTag.innerHTML = arrQuotes[i];
       tempOptionTag.id = i;
       tempOptionTag.title = "Select to delete me";
       tempSelectTag.appendChild(tempOptionTag);   
   }//end displayQuotes function 
}

function saveQuote() 
{
    /*Get the quote from the text box. Push the quote onto the array
     * Stringify the array, then put that string into local storage. Stored 
     * under the key 'quotes'*/
    var newQuote = document.getElementById("txtUsersEntry").value;
    arrQuotes.push(newQuote);
    addQuoteToComboBox(newQuote); 
    //add array to local storage as a string 
    localStorage.setItem("quotes", JSON.stringify(arrQuotes)); 
} 
 
//helper function to saveQuote function to add quote to combo box
function addQuoteToComboBox(theQuote)
{
   var tempSelectTag = document.getElementById("usersEntries");
   var tempOption = document.createElement("OPTION");
   tempOption.innerHTML = theQuote;
   tempOption.id = arrQuotes.length-1; //possibly use this id when have to remove this quote
   tempOption.title = "Select me to delete me";
   tempSelectTag.appendChild(tempOption);     
}

function deleteQuote(event) 
{
    var targetEl = event.target;
    var elemId = targetEl.id;
    var tempSelectTag = document.getElementById("usersEntries");
    var selectedIndex = tempSelectTag.selectedIndex;
    tempSelectTag.removeChild(tempSelectTag[selectedIndex]);
    arrQuotes.splice(selectedIndex-1, 1);
    localStorage.setItem("quotes", JSON.stringify(arrQuotes)); 
} 

