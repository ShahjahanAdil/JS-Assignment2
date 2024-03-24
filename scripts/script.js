document.getElementById("clear-statement-btn").onclick = function () {
    document.getElementById("statement").innerHTML = "";
}

document.getElementById("clear-output-btn").onclick = function () {
    document.getElementById("output").innerHTML = "";
}

document.getElementById("btn1").onclick = function () {
    let greet = "Hey!";
    let name = "Shah Jahan.";
    let statement = "let greet = " + greet + "<br> let name = " + name;

    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = greet + " " + name;
}

document.getElementById("btn2").onclick = function () {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    let fullName = firstName + " " + lastName;
    let statement = "firstName = " + firstName + "<br> lastName = " + lastName;

    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = "Welcome " + fullName + "!";
}

document.getElementById("btn3").onclick = function () {
    let num1 = +prompt("Enter num1:");
    let num2 = +prompt("Enter num2:");
    let statement = "num1 = " + num1 + "<br> num2 = " + num2;
    document.getElementById("statement").innerHTML = statement;
    if (num1 === num2) {
        document.getElementById("output").innerHTML = "Numbers are equal.";
    }
    else {
        document.getElementById("output").innerHTML = "Numbers are not equal.";
    }
}

document.getElementById("btn4").onclick = function () {
    let num1 = +prompt("Enter num1:");
    let num2 = +prompt("Enter num2:");
    let statement = "num1 = " + num1 + "<br> num2 = " + num2;
    document.getElementById("statement").innerHTML = statement;
    if (num1 < num2) {
        document.getElementById("output").innerHTML = "num1 is smaller than num2.";
    }
    else if (num1 === num2) {
        document.getElementById("output").innerHTML = "num1 is equal to num2.";
    }
    else if (num1 > num2) {
        document.getElementById("output").innerHTML = "num1 is greater than num2.";
    }
}

document.getElementById("btn5").onclick = function () {
    let weight = +prompt("Enter your weight in kg:");
    document.getElementById("statement").innerHTML = "";
    if (weight < 50) {
        document.getElementById("output").innerHTML = "You are weak.";
    }
    else if (weight >= 50 && weight <= 75) {
        document.getElementById("output").innerHTML = "You are healthy.";
    }
    else if (weight > 75) {
        document.getElementById("output").innerHTML = "You are fat.";
    }
}

document.getElementById("btn6").onclick = function () {
    let age = +prompt("Enter your age:");
    document.getElementById("statement").innerHTML = "";
    if (age >= 18) {
        let country = prompt("Enter name of your country:");
        if (country === "Pakistan" || country === "pakistan") {
            document.getElementById("output").innerHTML = "You can cast vote.";
        }
        else {
            document.getElementById("output").innerHTML = "You can't cast vote.";
        }
    }
    else {
        document.getElementById("output").innerHTML = "We can't proceed further. You are under age to cast vote.";
    }
}

document.getElementById("btn7").onclick = function () {
    let email = prompt("Enter your email:");
    let password = prompt("Enter your password");
    document.getElementById("statement").innerHTML = "";
    if (email == "abc@gmail.com" && password == "123") {
        alert("Login Successful!");
        document.getElementById("output").innerHTML = "Login Successful!";
    }
    else {
        alert("Login Failed! Username or password is incorrect.");
        document.getElementById("output").innerHTML = "Login Failed! Username or password is incorrect.";
    }
}

document.getElementById("btn8").onclick = function () {
    let percentage = +prompt("Enter your percentage of last exams.");
    document.getElementById("statement").innerHTML = "";
    if (percentage >= 90) {
        document.getElementById("output").innerHTML = "You got A Grade";
    }
    else if (percentage >= 80) {
        document.getElementById("output").innerHTML = "You got B Grade";
    }
    else if (percentage >= 70) {
        document.getElementById("output").innerHTML = "You got C Grade";
    }
    else if (percentage >= 60) {
        document.getElementById("output").innerHTML = "You got D Grade";
    }
    else {
        document.getElementById("output").innerHTML = "You got F Grade";
    }
}