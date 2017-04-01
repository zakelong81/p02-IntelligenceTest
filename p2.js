function no1answer()
{
  var guess = document.getElementById("no1answer").value;
  var answer1 = 0;
    if(guess.toLowerCase() == "helloworld")
    {
      document.getElementById("answerGroup").classList.remove("has-error");
      document.getElementById("answerGroup").classList.add("has-success");
      document.getElementById("answerError").classList.add("hidden-message");
      document.getElementById("answerError").classList.remove("shown-message");
      document.getElementById("answerError").innerHTML="Your answer is correct";
      document.getElementById("answerError").classList.remove("hidden-message");
      document.getElementById("answerError").classList.add("shown-message");
      answer1 ++;
      setCookie("guess", 1, 1);
    }
    else
    {
      document.getElementById("answerError").innerHTML="Your answer is incorrect";
      document.getElementById("answerError").classList.remove("hidden-message");
      document.getElementById("answerError").classList.add("shown-message");
      document.getElementById("answerGroup").classList.add("has-error");
      setCookie("guess", 0, 1);
    }
}

function no2answer()
{
  var guess = document.getElementById("no2answer").value;
  var answer2 = 0;
  if(isNaN(guess) == true)
  {
    document.getElementById("answerError").innerHTML="Your answer must be a number";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    document.getElementById("answerGroup").classList.add("has-error");
    setCookie("answer", 0, 1);
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
      answer2 ++;
      setCookie("guess", 1, 1);

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
      answer2 ++;
      setCookie("guess", 1, 1);
    }
    else
    {
      document.getElementById("answerError").innerHTML="Your answer is incorrect";
      document.getElementById("answerError").classList.remove("hidden-message");
      document.getElementById("answerError").classList.add("shown-message");
      document.getElementById("answerGroup").classList.add("has-error");
      setCookie("guess", 0, 1);
    }
  }
}

function no3answer()
{
  var guess = document.getElementById("no3answer").value;
  var answer3=0;
  if(isNaN(guess) == true)
  {
    document.getElementById("answerError").innerHTML="Your answer must be a number";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    document.getElementById("answerGroup").classList.add("has-error");
    setCookie("answer", 0, 1);
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
      answer3 ++;
      setCookie("guess", 1, 1);
    }
    else
    {
      document.getElementById("answerError").innerHTML="Your answer is incorrect";
      document.getElementById("answerError").classList.remove("hidden-message");
      document.getElementById("answerError").classList.add("shown-message");
      document.getElementById("answerGroup").classList.add("has-error");
      setCookie("guess", 0, 1);
    }
  }
}

function score()
{
  var answer = Number(getCookie("answer"));
  previousAnswer /= 3;
  previousAnswer *= 100;
  var resultanswer = (answer1+answer2+answer3)/3 * 100;
  document.getElementById("result").innerHTML = previousAnswer + "%";
  document.getElementById("result1").innerHTML = resultanswer + "%";
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
