function myFunction() {
    var EL = document.getElementById("edLevel");
    var el = EL.options[EL.selectedIndex].value;
    var SEM = document.getElementById("sem");
    var sem = SEM.options[SEM.selectedIndex].value;
    var DEG = document.getElementById("degree");
    var deg = DEG.options[DEG.selectedIndex].value;
    if(el.toString()=="master" )
    {
        document.getElementById("img1").src = "prg1.jpg";
        document.getElementById("ins1").innerHTML = "Instructor: Paul Charles";
        document.getElementById("desc1").innerHTML = "Description: This is a great class about programming.";
        document.getElementById("pre1").innerHTML = "Prerequisties: none";
        document.getElementById("ch1").innerHTML = "Credit Hours: 3";
        document.getElementById("dur1").innerHTML = "3 hours";
        document.getElementById("but1").href = "class1.html";
        document.getElementById("but1").class = "btn btn-info";
        document.getElementById("but1").role = "button";
        document.getElementById("but1").innerHTML = "Register";
        //href="class1.html" class="btn btn-info" role="button"

    }


    // The function returns the product of p1 and p2
}

