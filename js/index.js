var Quotes = [ 
    {
        quote:"“Be yourself; everyone else is already taken.”",
        author:"Oscar Wilde"
    },
    {
        quote:"“So many books, so little time.”",
        author:"Frank Zappa,"
    },
    {
        quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:"Albert Einstein"
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        author:" Mae West"
    },
    {
        quote:"If you tell the truth, you don't have to remember anything.",
        author:"Mark Twain"
    },
    {
        quote:"Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .",
        author:"C.S. Lewis, The Four Loves"
    },
    {
        quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author:"Ralph Waldo Emerson"
    }
] 

var usedIndex=[]; 

function getRandomQuotes(){    
    if(usedIndex.length==Quotes.length){
        usedIndex=[];
    } 
    var randomNum;
    do{ 
        randomNum= Math.floor(Math.random() * Quotes.length);
    }while(usedIndex.includes(randomNum));
    usedIndex.push(randomNum);
    document.getElementById("content").innerHTML=Quotes[randomNum].quote;
    document.getElementById("author").innerHTML=Quotes[randomNum].author; 
    
} 


