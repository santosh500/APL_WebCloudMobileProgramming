function playGame()
{
    var val = Math.random()*3+1;
    var val2 = Math.floor(val);

    var p1 = document.getElementById("p1");
    var player1= p1.options[p1.selectedIndex].value;
    var p2 = document.getElementById("p2");
    var player2= p2.options[p2.selectedIndex].value;
    if(val2==1)
    {
        player2="Rock";
    }
    else if(val2==2)
    {
        player2="Paper";
    }
    else if(val2==3)
    {
        player2="Scissors";
    }
    if(player1.toString()=="Rock" && player2.toString()=="Paper")
    {
        document.getElementById("result").innerHTML = "Player 2 got Rock " + val2 +" Player 2 wins";
    }
    else if(player1.toString()=="Paper" && player2.toString()=="Scissors")
    {
        document.getElementById("result").innerHTML = "Player 2 got Paper " + val2 +" Player 2 wins";
    }
    else if(player1.toString()=="Scissors" && player2.toString()=="Rock")
    {
        document.getElementById("result").innerHTML = "Player 2 got Scissors " + val2 +" Player 2 wins";
    }
    else if(player2.toString()=="Paper" && player1.toString()=="Scissors")
    {
        document.getElementById("result").innerHTML = "Player 2 got Paper " + val2 +" Player 1 wins";
    }
    else if(player2.toString()=="Scissors" && player1.toString()=="Rock")
    {
        document.getElementById("result").innerHTML = "Player 2 got Scissors " + val2 +" Player 1 wins";
    }
    else if(player2.toString()=="Rock" && player1.toString()=="Paper")
    {
        document.getElementById("result").innerHTML = "Player 2 got Rock " +"Player 1 wins";
    }
    else if(player2.toString()=="Paper" && player1.toString()=="Paper")
    {
        document.getElementById("result").innerHTML = "Player 2 got Paper " + val2 +"No one wins";
    }
    else if(player2.toString()=="Scissors" && player1.toString()=="Scissors")
    {
        document.getElementById("result").innerHTML = "Player 2 got Scissors " + val2 +"No one wins";
    }
    else if(player2.toString()=="Rock" && player1.toString()=="Rock")
    {
        document.getElementById("result").innerHTML = "Player 2 got Rock " + "No one wins";
    }

    //document.getElementById("result").innHTML = "Player 2 wins";
}