//---------------------------------------------------------------------------------------
var numSquares = 6;
var colors=generaterandomcolors(6);
//goal color which is used to win
var goalcolor=pickcolor();
var squares = document.querySelectorAll(".square");
var goalcolordisp = document.querySelector("#colordisp");
//message to display win or lose
var messagedisp = document.getElementById("message");
var resetbutton = document.querySelector("#reset");
//h1
var h1 = document.querySelector("h1");
//Easy and Hard Buutons
var modeButtons = document.querySelectorAll(".mode");
//-------------------------------------------------------------------------------------------


//init---------------------------------------------------------------------------------------
init();
function init()
{
    setupmodeButtons();
    SetupSquares();   
    reset();
}
//init---------------------------------------------------------------------------------------




 //modebutton event-------------------------------------------------------------------------
function setupmodeButtons()
{
     for(var i=0;i<modeButtons.length;i++)
 {
     modeButtons[i].addEventListener("click",function(){
         modeButtons[0].classList.remove("selected");
         modeButtons[1].classList.remove("selected");
         this.classList.add("selected");  
         this.textContent==="Easy" ? numSquares=3 :numSquares=6;
         reset();
     })
 }
}
 //modebutton event---------------------------------------------------------------------------




//setupsquares-------------------------------------------------------------------------------
function SetupSquares()
{
     //squares
     for(var i=0;i<colors.length;i++)
     {
     //addding event
     squares[i].addEventListener("click",function(){
         //get color of clicked square
         var clickedcolor= this.style.backgroundColor;
         //compare to goalcolor
         if( clickedcolor === goalcolor)
         {
             messagedisp.textContent="Correct";
             changeall(goalcolor);
             //h1 changging background color
             h1.style.backgroundColor = clickedcolor;
             resetbutton.textContent = "Play Again?";
         }
         else
         {
             //chaange wrong to bg color to disappear
             this.style.backgroundColor = "#232323";
             //disp message
             messagedisp.textContent="Try Again!!";
         }
     })
    }
}
//setupsquares-------------------------------------------------------------------------------




//reset--------------------------------------------------------------------------------------
function reset()
{
    colors=generaterandomcolors(numSquares);
    goalcolor=pickcolor();
    goalcolordisp.textContent = goalcolor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i]) {
            squares[i].style.display="block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messagedisp.textContent = "";
    resetbutton.textContent ="New Colors";
}
//reset--------------------------------------------------------------------------------------




//reset button-------------------------------------------------------------------------------
resetbutton.addEventListener("click" , function(){
 reset();
})
//reset button-------------------------------------------------------------------------------




//goalcolour disp----------------------------------------------------------------------------
goalcolordisp.textContent = goalcolor;
//goalcolour disp----------------------------------------------------------------------------




//change all squares
function changeall(goalcolor)
{
    for(var i=0;i<colors.length;i++)
    {
        squares[i].style.backgroundColor=goalcolor;
    }
}
//change all squares





//picking the color to store it in goalcolor---------------------------------------------------------------------------------
function pickcolor()
{
    var number = Math.floor(Math.random()*colors.length);
    return colors[number];
}
function generaterandomcolors(size)
{
    //make an array
    var arr=[]
    //add size colors
    for(var i =0;i<size;i++)
    {
        //getrandomcolor
         //push to array
         arr.push(randomcolor())
    }
    //return array
    return arr;
}
function randomcolor()
{
    //pick red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return"rgb(" + r + ", " + g +", " + b +")";
}
//picking the color to store it in goalcolor---------------------------------------------------------------------------------
