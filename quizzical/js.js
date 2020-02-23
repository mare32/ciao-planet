window.onload = function(){

    ispis(redniBrojPitanja);
}
var soundOn = false;
var redniBrojPitanja = 0;
var konacanOdgovor="";
var correctAnswer = new Audio();
correctAnswer.src = "media/correct.mp3";
correctAnswer.volume = 0.175;
var incorrectAnswer = new Audio();
incorrectAnswer.src = "media/incorrect.mp3";
incorrectAnswer.volume = 0.175;
var changeAnswer = new Audio();
changeAnswer.src = "media/changeAnswer.mp3";
changeAnswer.volume = 0.175;
var quizEnd = new Audio();
quizEnd.src = "media/quizEnd.mp3";
quizEnd.volume = 0.175;


//  DATA
 

var pitanjaIOdgovori = {
    "0": {
        "odgovor": "It means being present in the moment",
        "pitanje": "What being 'lucid' means?",
        "odgovori": [
            "It means being asleep","It means being present in the moment", "It means being crazy", "Its when you are dreaming"
        ]
    },
    "1": {
        "odgovor": "Personal-home-page(php)",
        "pitanje": "Which of these programming languages is the absolute worst?",
        "odgovori": [
            "Python","C#", "Ruby", "Personal-home-page(php)"
        ]
    },
    "2": {
        "odgovor": "request = new ActiveXObject()",
        "pitanje": "Which is the correct syntax when using AJAX for IE?",
        "odgovori": [
            "request = new ActiveXObject()","request = new ActiveYObject()", "request = new ActiveZObject()", "request = new ActiveIEObject()?"
        ]
    },
    "3": {
        "odgovor": "request = new XMLHttpRequest()",
        "pitanje": "What is the syntax with all other browser?",
        "odgovori": [
            "request = new XHTMLHttpRequest()", "request = new AJAXHttpRequest()", "request = new XMLHttpRequest()","request = new JSHttpRequest()"
        ]
    },
    "4": {
        "odgovor": "2002",
        "pitanje": "In which year did aliens invent JSON?",
        "odgovori": [
            "2002","2003", "2005", "2007"
        ]
    },
    "5": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "6": {
        "odgovor": "A few lines of code that allow dynamic data transfer",
        "pitanje": "What is AJAX?",
        "odgovori": [
            "Javascript library","Cleaning detergent", "A few lines of code that allow dynamic data transfer","Programming language"
        ]
    },
    "7": {
        "odgovor": "open() and send()",
        "pitanje": "Which two JS methods are used to give and take information from a server?",
        "odgovori": [
            "receive() and forward()","collect() and transfer()", "receiveData() and forwardData()","open() and send()"
        ]
    },
    "8": {
        "odgovor": "xmlDoc = httpRequest.responseXML;",
        "pitanje": "How to set the whole XML document to a variable using XMLHttpRequest?",
        "odgovori": [
            "xmlDoc = httpRequest.responseXML;","xmlDoc = httpRequest.getData();", "xmlDoc = GET(httpRequest).data;","It's impossible"
        ]
    },
    "9": {
        "odgovor": "var subject = xmlDoc.getElementsByTagName('subject');",
        "pitanje": "How to access certain tags from XML?",
        "odgovori": [
            "var subject = xmlDoc.getElementByTagName('subject'); ","var subject = xmlDoc.getElementsByTagName('<subject>');", "var subject = xmlDoc.subject;","var subject = xmlDoc.getElementsByTagName('subject');"
        ]
    }
}

var pitanjaZaJSON = {
    "0": {
        "odgovor": "It means being present in the moment",
        "pitanje": "What being 'lucid' means?",
        "odgovori": [
            "It means being asleep","It means being present in the moment", "It means being crazy", "Its when you are dreaming"
        ]
    },
    "1": {
        "odgovor": "Personal-home-page(php)",
        "pitanje": "Which of these programming languages is the absolute worst?",
        "odgovori": [
            "Python","C#", "Ruby", "Personal-home-page(php)"
        ]
    },
    "2": {
        "odgovor": "Who the fuck cares?",
        "pitanje": "Why am i even doing this, when i have to study for the test thats in 2 days?",
        "odgovori": [
            "I love doing this","I am doing this to procrastinate", "It helps my study, since i am doing json", "Who the fuck cares?"
        ]
    },
    "3": {
        "odgovor": "I know, right?",
        "pitanje": "If you got the last answer right, you are the best!",
        "odgovori": [
            "I know, right?","You are annoying", "You actualy might be a tiny bit funny", "Such a waste of time.."
        ]
    },
    "4": {
        "odgovor": "2002",
        "pitanje": "Back to the quiz! In which year did aliens invent JSON?",
        "odgovori": [
            "2002","2003", "2005", "2007"
        ]
    },
    "5": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "6": {
        "odgovor": "A few lines of code that allow dynamic data transfer",
        "pitanje": "What is AJAX?",
        "odgovori": [
            "Javascript library","Cleaning detergent", "A few lines of code that allow dynamic data transfer","Programming language"
        ]
    },
    "7": {
        "odgovor": "Sicilian Defence Accelerated Dragon",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "8": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "9": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    }
}

var pitanjaZaGitHub = {
    "0": {
        "odgovor": "It means being present in the moment",
        "pitanje": "What being 'lucid' means?",
        "odgovori": [
            "It means being asleep","It means being present in the moment", "It means being crazy", "Its when you are dreaming"
        ]
    },
    "1": {
        "odgovor": "Personal-home-page(php)",
        "pitanje": "Which of these programming languages is the absolute worst?",
        "odgovori": [
            "Python","C#", "Ruby", "Personal-home-page(php)"
        ]
    },
    "2": {
        "odgovor": "Who the fuck cares?",
        "pitanje": "Why am i even doing this, when i have to study for the test thats in 2 days?",
        "odgovori": [
            "I love doing this","I am doing this to procrastinate", "It helps my study, since i am doing json", "Who the fuck cares?"
        ]
    },
    "3": {
        "odgovor": "I know, right?",
        "pitanje": "If you got the last answer right, you are the best!",
        "odgovori": [
            "I know, right?","You are annoying", "You actualy might be a tiny bit funny", "Such a waste of time.."
        ]
    },
    "4": {
        "odgovor": "2002",
        "pitanje": "Back to the quiz! In which year did aliens invent JSON?",
        "odgovori": [
            "2002","2003", "2005", "2007"
        ]
    },
    "5": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "6": {
        "odgovor": "A few lines of code that allow dynamic data transfer",
        "pitanje": "What is AJAX?",
        "odgovori": [
            "Javascript library","Cleaning detergent", "A few lines of code that allow dynamic data transfer","Programming language"
        ]
    },
    "7": {
        "odgovor": "Sicilian Defence Accelerated Dragon",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "8": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "9": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    }
}

var pitanjaZaXml = {
    "0": {
        "odgovor": "It means being present in the moment",
        "pitanje": "What being 'lucid' means?",
        "odgovori": [
            "It means being asleep","It means being present in the moment", "It means being crazy", "Its when you are dreaming"
        ]
    },
    "1": {
        "odgovor": "Personal-home-page(php)",
        "pitanje": "Which of these programming languages is the absolute worst?",
        "odgovori": [
            "Python","C#", "Ruby", "Personal-home-page(php)"
        ]
    },
    "2": {
        "odgovor": "Who the fuck cares?",
        "pitanje": "Why am i even doing this, when i have to study for the test thats in 2 days?",
        "odgovori": [
            "I love doing this","I am doing this to procrastinate", "It helps my study, since i am doing json", "Who the fuck cares?"
        ]
    },
    "3": {
        "odgovor": "I know, right?",
        "pitanje": "If you got the last answer right, you are the best!",
        "odgovori": [
            "I know, right?","You are annoying", "You actualy might be a tiny bit funny", "Such a waste of time.."
        ]
    },
    "4": {
        "odgovor": "2002",
        "pitanje": "Back to the quiz! In which year did aliens invent JSON?",
        "odgovori": [
            "2002","2003", "2005", "2007"
        ]
    },
    "5": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "6": {
        "odgovor": "A few lines of code that allow dynamic data transfer",
        "pitanje": "What is AJAX?",
        "odgovori": [
            "Javascript library","Cleaning detergent", "A few lines of code that allow dynamic data transfer","Programming language"
        ]
    },
    "7": {
        "odgovor": "Sicilian Defence Accelerated Dragon",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "8": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "9": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    }
}

var pitanjaZaObraduGresaka = {
    "0": {
        "odgovor": "It means being present in the moment",
        "pitanje": "What being 'lucid' means?",
        "odgovori": [
            "It means being asleep","It means being present in the moment", "It means being crazy", "Its when you are dreaming"
        ]
    },
    "1": {
        "odgovor": "Personal-home-page(php)",
        "pitanje": "Which of these programming languages is the absolute worst?",
        "odgovori": [
            "Python","C#", "Ruby", "Personal-home-page(php)"
        ]
    },
    "2": {
        "odgovor": "Who the fuck cares?",
        "pitanje": "Why am i even doing this, when i have to study for the test thats in 2 days?",
        "odgovori": [
            "I love doing this","I am doing this to procrastinate", "It helps my study, since i am doing json", "Who the fuck cares?"
        ]
    },
    "3": {
        "odgovor": "I know, right?",
        "pitanje": "If you got the last answer right, you are the best!",
        "odgovori": [
            "I know, right?","You are annoying", "You actualy might be a tiny bit funny", "Such a waste of time.."
        ]
    },
    "4": {
        "odgovor": "2002",
        "pitanje": "Back to the quiz! In which year did aliens invent JSON?",
        "odgovori": [
            "2002","2003", "2005", "2007"
        ]
    },
    "5": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "6": {
        "odgovor": "A few lines of code that allow dynamic data transfer",
        "pitanje": "What is AJAX?",
        "odgovori": [
            "Javascript library","Cleaning detergent", "A few lines of code that allow dynamic data transfer","Programming language"
        ]
    },
    "7": {
        "odgovor": "Sicilian Defence Accelerated Dragon",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "8": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "9": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    }
}

// pitanja za SAH

var pitanjaZaObraduGresaka = {
    "0": {
        "odgovor": "It means being present in the moment",
        "pitanje": "What being 'lucid' means?",
        "odgovori": [
            "It means being asleep","It means being present in the moment", "It means being crazy", "Its when you are dreaming"
        ]
    },
    "1": {
        "odgovor": "Personal-home-page(php)",
        "pitanje": "Which of these programming languages is the absolute worst?",
        "odgovori": [
            "Python","C#", "Ruby", "Personal-home-page(php)"
        ]
    },
    "2": {
        "odgovor": "Who the fuck cares?",
        "pitanje": "Why am i even doing this, when i have to study for the test thats in 2 days?",
        "odgovori": [
            "I love doing this","I am doing this to procrastinate", "It helps my study, since i am doing json", "Who the fuck cares?"
        ]
    },
    "3": {
        "odgovor": "I know, right?",
        "pitanje": "If you got the last answer right, you are the best!",
        "odgovori": [
            "I know, right?","You are annoying", "You actualy might be a tiny bit funny", "Such a waste of time.."
        ]
    },
    "4": {
        "odgovor": "2002",
        "pitanje": "Back to the quiz! In which year did aliens invent JSON?",
        "odgovori": [
            "2002","2003", "2005", "2007"
        ]
    },
    "5": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "6": {
        "odgovor": "A few lines of code that allow dynamic data transfer",
        "pitanje": "What is AJAX?",
        "odgovori": [
            "Javascript library","Cleaning detergent", "A few lines of code that allow dynamic data transfer","Programming language"
        ]
    },
    "7": {
        "odgovor": "Sicilian Defence Accelerated Dragon",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "8": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    },
    "9": {
        "odgovor": "It ain't",
        "pitanje": "Is JSON a markup language?",
        "odgovori": [
            "Sure, it is","It ain't", "Its a semi-markup language",""
        ]
    }
}

// CODE

$('#volume').click(function(){
    if(soundOn){
        soundOn = false;
        $(this).html('<i class="fas fa-volume-mute"></i>');
    }
    else{
        soundOn = true;
        changeAnswer.play();
        $(this).html('<i class="fas fa-volume-up"></i>');
    }
})
$('.pitanje').click(function(){
    $(this).addClass('selektovan');
    konacanOdgovor = $(this).val();
    if(soundOn)
    changeAnswer.play();
});

$('.pitanje').blur(function(){
    $(this).removeClass('selektovan');
});

    
    var pitanjePolja = document.getElementsByClassName("pitanje");
    var poeni = 0;
    document.getElementsByClassName("confirm")[0].addEventListener("click",function(){
        var totalQ = document.getElementsByClassName("totalQuestions")[0].innerHTML;
        totalQ = parseInt(totalQ);
        if(redniBrojPitanja+1<totalQ){
        if(konacanOdgovor == pitanjaIOdgovori[redniBrojPitanja].odgovor){
            poeni+=Math.round(2+(poeni*2)/1.5);
            if(soundOn)
            correctAnswer.play();
        }
        else{
            if(soundOn)
            incorrectAnswer.play();
        }
        document.getElementsByClassName('bb')[0].innerHTML = poeni;
        document.getElementsByClassName('bb')[1].innerHTML = poeni;
        
        for(i=0;i<4;i++){
            if(pitanjePolja[i].getAttribute('value') == pitanjaIOdgovori[redniBrojPitanja].odgovor){
                pitanjePolja[i].style.backgroundColor = "#d9ff00";
            }
            else{
                pitanjePolja[i].style.backgroundColor = "#5ae9c0";
            }
        }
        setTimeout(vratiBojuNazad,1250);
        setTimeout(redniBrojPitanja++,1250)
        setTimeout(pozoviIspisSaDelayem,1250);
        }
        else{
            if(konacanOdgovor == pitanjaIOdgovori[redniBrojPitanja].odgovor){
                poeni+=Math.round(2+(poeni*2)/1.5);
                if(soundOn)
                correctAnswer.play();
            }
            else{
                if(soundOn)
                incorrectAnswer.play();
            }
            for(i=0;i<4;i++){
                if(pitanjePolja[i].getAttribute('value') == pitanjaIOdgovori[redniBrojPitanja].odgovor){
                    pitanjePolja[i].style.backgroundColor = "#d9ff00";
                }
                else{
                    pitanjePolja[i].style.backgroundColor = "#5ae9c0";
                }
            }
            setTimeout(vratiBojuNazad,1250);
            setTimeout(function(){
                document.getElementsByClassName('bb')[1].innerHTML = poeni;
                document.getElementsByClassName("all")[0].style.display = "none";
                document.getElementsByClassName("result")[0].classList.remove('display-none');
                if(soundOn)
                quizEnd.play();
            },1250)
            
        }
    });

    document.getElementsByClassName("skip")[0].addEventListener("click",function(){
        var totalQ = document.getElementsByClassName("totalQuestions")[0].innerHTML;
        totalQ = parseInt(totalQ);
        if(redniBrojPitanja+1<totalQ){
            redniBrojPitanja++
            ispis(redniBrojPitanja);
        }
        else{
            if(soundOn)
            quizEnd.play();
            document.getElementsByClassName("all")[0].style.display = "none";
            document.getElementsByClassName("result")[0].classList.remove('display-none');
        }
    });
    document.getElementsByClassName("redo")[0].addEventListener("click",function(){
        redniBrojPitanja = 0;
        poeni = 0;
        document.getElementsByClassName('bb')[0].innerHTML = poeni;
        ispis(redniBrojPitanja);
        document.getElementsByClassName("all")[0].style.display = "block";
        document.getElementsByClassName("result")[0].classList.add('display-none');
    });

    function vratiBojuNazad(){
        for(i=0;i<4;i++){
            pitanjePolja[i].style.backgroundColor = "#ccc";
        }
    }
    function pozoviIspisSaDelayem(){
        ispis(redniBrojPitanja);
    }
    function ispis(redniBrojPitanja){
        konacanOdgovor="";
        document.getElementsByClassName("brojpitanja")[0].innerHTML=redniBrojPitanja+1;
        document.getElementsByClassName("zapravoPitanje")[0].innerHTML = pitanjaIOdgovori[redniBrojPitanja].pitanje;
        var pitanjePolja = document.getElementsByClassName("pitanje");
        for(i=0;i<4 ;i++){
       pitanjePolja[i].setAttribute('value',pitanjaIOdgovori[redniBrojPitanja].odgovori[i]);
        }
        $(".zapravoPitanje").animate({
            fontSize: "+=5px"
        },250).animate({
            fontSize: "-=5px"
        },250);
    }