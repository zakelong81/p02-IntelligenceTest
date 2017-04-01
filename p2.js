function no1answer()
{
  var guess ;
  guess = document.getElementById("no1answer").value;
  var score1 = 0;

    if(guess.toLowerCase() == "helloworld")
    {
      document.getElementById("answerGroup").classList.remove("has-error");
      document.getElementById("answerGroup").classList.add("has-success");
      document.getElementById("answerError").classList.add("hidden-message");
      document.getElementById("answerError").classList.remove("shown-message");
      document.getElementById("answerError").innerHTML="Your answer is correct";
      document.getElementById("answerError").classList.remove("hidden-message");
      document.getElementById("answerError").classList.add("shown-message");
      score1 = 1;
      setCookie("guess1", score1, 1);
    }
    else
    {
      document.getElementById("answerError").innerHTML="Your answer is incorrect";
      document.getElementById("answerError").classList.remove("hidden-message");
      document.getElementById("answerError").classList.add("shown-message");
      document.getElementById("answerGroup").classList.add("has-error");
      score1 = 0;
      setCookie("guess1", score1 ,1);
    }
}

function no2answer()
{
  var guess ;
  guess = document.getElementById("no2answer").value;
  var score2 = 0;

  if(isNaN(guess) == true)
  {
    document.getElementById("answerError").innerHTML="Your answer must be a number";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    document.getElementById("answerGroup").classList.add("has-error");
    score2 = 0;
    setCookie("guess2", score2 ,1);
  }
  else
  {
    if(guess == 40)
    {
      document.getElementById("answerGroup").classList.remove("has-error");
      document.getElementById("answerGroup").classList.add("has-success");
      document.getElementById("answerError").classList.add("hidden-message");
      document.getElementById("answerError").classList.remove("shown-message");
      document.getElementById("answerError").innerHTML="Your answer is correct";
      document.getElementById("answerError").classList.remove("hidden-message");
      document.getElementById("answerError").classList.add("shown-message");
      score2 = 1;
      setCookie("guess2", score2 ,1);

    }
    else if(guess == 96)
    {
      document.getElementById("answerGroup").classList.remove("has-error");
      document.getElementById("answerGroup").classList.add("has-success");
      document.getElementById("answerError").classList.add("hidden-message");
      document.getElementById("answerError").classList.remove("shown-message");
      document.getElementById("answerError").innerHTML="Your answer is correct";
      document.getElementById("answerError").classList.remove("hidden-message");
      document.getElementById("answerError").classList.add("shown-message");
      score2
      setCookie("guess2", score2 ,1);
    }
    else
    {
      document.getElementById("answerError").innerHTML="Your answer is incorrect";
      document.getElementById("answerError").classList.remove("hidden-message");
      document.getElementById("answerError").classList.add("shown-message");
      document.getElementById("answerGroup").classList.add("has-error");
      score2 = 0;
      setCookie("guess2", score2 ,1);
    }
  }
}

function no3answer()
{
  var guess ;
  guess = document.getElementById("no3answer").value;
  var score3 = 0;

  if(isNaN(guess) == true)
  {
    document.getElementById("answerError").innerHTML="Your answer must be a number";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    document.getElementById("answerGroup").classList.add("has-error");
    score3 = 0;
    setCookie("guess3", score3 ,1);
  }
  else
  {
    if(guess == 12)
    {
      document.getElementById("answerGroup").classList.remove("has-error");
      document.getElementById("answerGroup").classList.add("has-success");
      document.getElementById("answerError").classList.add("hidden-message");
      document.getElementById("answerError").classList.remove("shown-message");
      document.getElementById("answerError").innerHTML="Your answer is correct";
      document.getElementById("answerError").classList.remove("hidden-message");
      document.getElementById("answerError").classList.add("shown-message");
      score3 = 1;
      setCookie("guess3", score3 ,1);
    }
    else
    {
      document.getElementById("answerError").innerHTML="Your answer is incorrect";
      document.getElementById("answerError").classList.remove("hidden-message");
      document.getElementById("answerError").classList.add("shown-message");
      document.getElementById("answerGroup").classList.add("has-error");
      score3 = 0;
      setCookie("guess3", score3 ,1);
    }
  }
}

function score()
{

  var score1 = getCookie("guess1");
  score1 =  Number(score1);
  var score2 = getCookie("guess2");
  score2 =  Number(score2);
  var score3 = getCookie("guess3");
  score3 =  Number(score3);
  var result= (score1+score2+score3)/3*100;

  document.getElementById("result").innerHTML = asPercent(result);

}

function asPercent(score)
{
  return  score.toFixed(2) + "%" ;
}

function test2() {
  location.assign("no2.html");
}
function test3() {
  location.assign("no3.html");
}
function resultpage() {
  location.assign("result.html");
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
