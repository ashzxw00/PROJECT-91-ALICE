function addUser () {
    player1Name = document.getElementById("player1NameInput")
    player2Name = document.getElementById("player2NameInput")

localStorage.setItem("player1Name", player1Name);
localStorage.setItem("player2Name", player2Name);

window.location="game_page.html";

}

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer=parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number1 + "X" + number2 + "</h4>";

input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
input_box = "<br>Resposta : <input type='text' id='input_check_box'";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>"
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
console.log(row)
}
