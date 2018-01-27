function playGame()
{
    var p1 = document.getElementById("p1");
    var player1= p1.options[p1.selectedIndex].value;
    var p2 = document.getElementById("p2");
    var player2= p2.options[p2.selectedIndex].value;
    if(player1.toString()=="Rock" && player2.toString()=="Paper")
    {

        document.getElementById("result").innerHTML = "Player 2 wins";
    }
    else if(player1.toString()=="Paper" && player2.toString()=="Scissors")
    {
        document.getElementById("result").innerHTML = "Player 2 wins";
    }
    else if(player1.toString()=="Scissors" && player2.toString()=="Rock")
    {
        document.getElementById("result").innerHTML = "Player 2 wins";
    }
    else if(player2.toString()=="Paper" && player1.toString()=="Scissors")
    {
        document.getElementById("result").innerHTML = "Player 1 wins";
    }
    else if(player2.toString()=="Scissors" && player1.toString()=="Rock")
    {
        document.getElementById("result").innerHTML = "Player 1 wins";
    }
    else if(player2.toString()=="Rock" && player1.toString()=="Paper")
    {
        document.getElementById("result").innerHTML = "Player 1 wins";
    }
    else if(player2.toString()=="Paper" && player1.toString()=="Paper")
    {
        document.getElementById("result").innerHTML = "No one wins";
    }
    else if(player2.toString()=="Scissors" && player1.toString()=="Scissors")
    {
        document.getElementById("result").innerHTML = "No one wins";
    }
    else if(player2.toString()=="Rock" && player1.toString()=="Rock")
    {
        document.getElementById("result").innerHTML = "No one wins";
    }
    //document.getElementById("result").innHTML = "Player 2 wins";
}