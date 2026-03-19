var arrNotes=[];
var arrColors = [];
//JavaScript code that gets local storage, creates the note, and deletes the note
function init() 
{
    getLocalStorage();
    walkThroughStorage();
    var addTextButton = document.getElementById("add_button");
    addTextButton.addEventListener("click", createNote); 
}
function getLocalStorage()  
{ 
    var noteCurrentStorage = localStorage.getItem("quotes"); 
    var colorCurrentStorage = localStorage.getItem("colors");   
       if(noteCurrentStorage !== null)
          {
             arrCurrentStorage = JSON.parse(noteCurrentStorage);
             arrcolorCurrentStorage = JSON.parse(colorCurrentStorage);
             for(var i =0; i<arrCurrentStorage.length; i++)
            {
                arrNotes.push(arrCurrentStorage[i]);
                arrColors.push(arrcolorCurrentStorage[i]);  
            }
          } 
       else
          {
            arrNotes = [];   
            arrColors = []; 
          }  
}
function walkThroughStorage()  
{
    var list = document.getElementById("stickies");
    for(var i = 0; i<arrNotes.length; i++)
    { 
       var li = document.createElement("li");
       var tempSpanTag = document.createElement("SPAN");
       tempSpanTag.innerHTML = arrNotes[i];
       tempSpanTag.id = i; 
       tempSpanTag.addEventListener("click", deleteNote);
       tempSpanTag.style.backgroundColor = arrColors[i];
       if(i%2 === 0){ 
            tempSpanTag.className = "sticky1"; 
        }
       else  
            tempSpanTag.className = "sticky2";   
        
        li.appendChild(tempSpanTag);
        list.appendChild(li); 
    }
    
}
function createNote()  
{
    var noteText = document.getElementById("note_text").value;
    var note = document.createElement("span");  
    var unorderedList = document.getElementById("stickies");
    var li = document.createElement("li");
    var newQuote = document.getElementById("note_text").value;
    var newColor = document.getElementById("note_color").value;
    arrNotes.push(newQuote);  
    arrColors.push(newColor); 
    for (var i = 0; i<arrNotes.length; i++) 
    { 
        note.innerHTML = noteText;
        note.id = i;  
        li.addEventListener("click", deleteNote); 
        note.style.backgroundColor = document.getElementById("note_color").value;
        li.appendChild(note);
        unorderedList.appendChild(li); 
        if(i%2 === 0){ 
            note.className = "sticky1"; 
        }
        else 
            note.className = "sticky2"; 
    } 
    localStorage.setItem("quotes", JSON.stringify(arrNotes));
    localStorage.setItem("colors", JSON.stringify(arrColors));  
} 
function deleteNote(event){
    
}
{
    var targetEl = event.target;
    var elemId = targetEl.id; 
    var tempList = document.getElementById("stickies");
    targetEl.parentNode.removeChild(targetEl);
    arrNotes.splice(elemId,1);  
    arrColors.splice(elemId,1);        
    localStorage.setItem("quotes",JSON.stringify(arrNotes));  
    localStorage.setItem("colors",JSON.stringify(arrColors));
    var li = document.getElementsByTagName("li");
    for(var i = 0; i<li.length; i++)  
    { 
        var note = li[i];
        note.id = i;   
    } 
} 






