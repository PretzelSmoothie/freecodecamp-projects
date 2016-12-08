var quoteArray = [
    {
        content: "Graphic design is building systems",
        author: "Michael Stinson"
    },
    {
        content: "I rarely agree with what clients ask me to do.",
        author: "Ross Lovegrove"
    },
    {
        content: "I think most programmers spend the first 5 years of their career mastering complexity, and the rest of their lives learning simplicity.",
        author: "Buzz Andersen"
    },
    {
        content: "Make it simple. Make it memorable. Make it inviting to look at. Make it fun to read.",
        author: "Leo Burnett"
    },
    {
        content: "What makes great design great is not a trendy technique, but the logic and conceptual aspect that were figured out in the designer's mind &ndash; or on more likely, on paper &ndash; before a mouse cursor ever opened Photoshop.",
        author: "Kyle Meyer"
    },
    {
        content: "Designers tend to whisper, ad agencies tend to shout.",
        author: " David Stuart"
    },
    {
        content: "Design is the method of putting form and content together. Design, just as art, has multiple definitions; there is no single definition. Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated.",
        author: "Paul Rand"
    },
    {
        content: "Tell it like it is, in a way they want to hear it.",
        author: "Wihan Meerholz"
    },
    {
        content: "The best way to find any and all errors is to publish your work.",
        author: "Dan Vore"
    },
    {
        content: "Creativity is piercing the mundane to find the marvelous.",
        author: "Bill Moyers"
    },
    {
        content: "I warn you against believing that advertising is a science.",
        author: "Bill Bernbach"
    }
];
var colors = [    //colors from terminal.sexy
    "#282a2e",
    "#a54242",
    "#8c9440",
    "#de935f",
    "#5f819d",
    "#85678f",
    "#5e8d87",
    "#707880",
    "#373b41",
    "#cc6666",
    "#b5bd68",
    "#f0c674",
    "#81a2be",
    "#b294bb",
    "#8abeb7",
    "#c5c8c6"]; 
var currentAuthor = "";
var currentQuote = "";
var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
var windowObjectReference;
var url = "https://twitter.com/intent/tweet?hashtags=quote";
var newUrl = "";

function getQuote() {

  var quoteIndex = Math.floor(Math.random() * quoteArray.length);
  currentQuote = quoteArray[quoteIndex].content;
  currentAuthor = quoteArray[quoteIndex].author; 
  newUrl = url + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor);
  console.log(newUrl);
  $(".message").text(currentQuote);
  $(".author").text(currentAuthor);
  
};

$(document).ready(function() {
  
    getQuote();
    $(".pushme").click(function () {
      
      getQuote();
      var colorIndex = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[colorIndex],
        color: colors[colorIndex]
      }, 1000);
      
      $(".btn").animate({
        backgroundColor: colors[colorIndex]
      }, 1000); 
    });
  
    $("#tweeter").click(function() {
     windowObjectReference = window.open(newUrl, "New_tweet", strWindowFeatures);
    })
     
  });