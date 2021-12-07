function addUser(){
    player1 = document.getElementById("player1_input").value;
    player2 = document.getElementById("player2_input").value;
    
    localStorage.setItem("Player 1", player1);
    localStorage.setItem("Player 2", player2);

    window.location = "quiz_game_page.html";
}