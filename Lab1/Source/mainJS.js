function myFunction() {
    var EL = document.getElementById("edLevel");
    var el = EL.options[EL.selectedIndex].value;
    var SEM = document.getElementById("sem");
    var sem = SEM.options[SEM.selectedIndex].value;
    var DEG = document.getElementById("degree");
    var deg = DEG.options[DEG.selectedIndex].value;
    if(el.toString()=="master" && deg.toString()=="CS")
    {
        document.getElementById("img1").src = "prg1.jpg";
        document.getElementById("name1").innerHTML = "Course: Data Science I";
        document.getElementById("ins1").innerHTML = "Instructor: Paul Charles";
        document.getElementById("desc1").innerHTML = "Description: This is a great class about Data Science for MS students.";
        document.getElementById("pre1").innerHTML = "Prerequisties: Programming";
        document.getElementById("ch1").innerHTML = "Credit Hours: 3";
        document.getElementById("dur1").innerHTML = "3 hours";
        document.getElementById("but1").href = "class1.html";
        document.getElementById("but1").class = "btn btn-info";
        document.getElementById("but1").role = "button";
        document.getElementById("but1").innerHTML = "Register";
        document.getElementById("img2").src = "prog.jpg";
        document.getElementById("name2").innerHTML = "Course: Programming I";
        document.getElementById("ins2").innerHTML = "Instructor: Tom Brady";
        document.getElementById("desc2").innerHTML = "Description: This is a great class about programming for MS students.";
        document.getElementById("pre2").innerHTML = "Prerequisties: none";
        document.getElementById("ch2").innerHTML = "Credit Hours: 3";
        document.getElementById("dur2").innerHTML = "3 hours";
        document.getElementById("but2").href = "class1.html";
        document.getElementById("but2").class = "btn btn-info";
        document.getElementById("but2").role = "button";
        document.getElementById("but2").innerHTML = "Register";
        document.getElementById("img3").src = "netser.jpg";
        document.getElementById("name3").innerHTML = "Course: Networking I";
        document.getElementById("ins3").innerHTML = "Instructor: Winnie the Pooh";
        document.getElementById("desc3").innerHTML = "Description: This is a great class about networking for MS students.";
        document.getElementById("pre3").innerHTML = "Prerequisties: none";
        document.getElementById("ch3").innerHTML = "Credit Hours: 3";
        document.getElementById("dur3").innerHTML = "3 hours";
        document.getElementById("but3").href = "class1.html";
        document.getElementById("but3").class = "btn btn-info";
        document.getElementById("but3").role = "button";
        document.getElementById("but3").innerHTML = "Register";
        //href="class1.html" class="btn btn-info" role="button"

    }
    if(el.toString()=="master" && deg.toString()=="Law")
    {
        document.getElementById("img1").src = "blaw.jpg";
        document.getElementById("name1").innerHTML = "Course: Business Law";
        document.getElementById("ins1").innerHTML = "Instructor: Paul Charles";
        document.getElementById("desc1").innerHTML = "Description: This is a great class about Business Law for MS students.";
        document.getElementById("pre1").innerHTML = "Prerequisties: Accounting, Business";
        document.getElementById("ch1").innerHTML = "Credit Hours: 3";
        document.getElementById("dur1").innerHTML = "3 hours";
        document.getElementById("but1").href = "class1.html";
        document.getElementById("but1").class = "btn btn-info";
        document.getElementById("but1").role = "button";
        document.getElementById("but1").innerHTML = "Register";
        document.getElementById("img2").src = "lgov.png";
        document.getElementById("name2").innerHTML = "Course: Government Law";
        document.getElementById("ins2").innerHTML = "Instructor: Peyton manning";
        document.getElementById("desc2").innerHTML = "Description: This is a great class about government law for MS students.";
        document.getElementById("pre2").innerHTML = "Prerequisties: Political Science";
        document.getElementById("ch2").innerHTML = "Credit Hours: 3";
        document.getElementById("dur2").innerHTML = "3 hours";
        document.getElementById("but2").href = "class1.html";
        document.getElementById("but2").class = "btn btn-info";
        document.getElementById("but2").role = "button";
        document.getElementById("but2").innerHTML = "Register";
        document.getElementById("img3").src = "";
        document.getElementById("name3").innerHTML = "";
        document.getElementById("ins3").innerHTML = "";
        document.getElementById("desc3").innerHTML = "";
        document.getElementById("pre3").innerHTML = "";
        document.getElementById("ch3").innerHTML = "";
        document.getElementById("dur3").innerHTML = "";
        document.getElementById("but3").href = "";
        document.getElementById("but3").class = "";
        document.getElementById("but3").role = "";
        document.getElementById("but3").innerHTML = "";
        //href="class1.html" class="btn btn-info" role="button"

    }

    if(el.toString()=="bachelor" && deg.toString()=="CS")
    {
        document.getElementById("img1").src = "progBS.jpg";
        document.getElementById("name1").innerHTML = "Course: Basic Programming";
        document.getElementById("ins1").innerHTML = "Instructor: Paul Charles";
        document.getElementById("desc1").innerHTML = "Description: This is a great class about Basic Programming for BS students.";
        document.getElementById("pre1").innerHTML = "Prerequisties: none";
        document.getElementById("ch1").innerHTML = "Credit Hours: 3";
        document.getElementById("dur1").innerHTML = "3 hours";
        document.getElementById("but1").href = "class1.html";
        document.getElementById("but1").class = "btn btn-info";
        document.getElementById("but1").role = "button";
        document.getElementById("but1").innerHTML = "Register";
        document.getElementById("img2").src = "algoBS.jpg";
        document.getElementById("name2").innerHTML = "Course: Algorithms";
        document.getElementById("ins2").innerHTML = "Instructor: Peter Griffin";
        document.getElementById("desc2").innerHTML = "Description: This is a great class about Algorithms for BS students.";
        document.getElementById("pre2").innerHTML = "Prerequisties: Calculus I, Linear Algebra";
        document.getElementById("ch2").innerHTML = "Credit Hours: 3";
        document.getElementById("dur2").innerHTML = "3 hours";
        document.getElementById("but2").href = "class1.html";
        document.getElementById("but2").class = "btn btn-info";
        document.getElementById("but2").role = "button";
        document.getElementById("but2").innerHTML = "Register";
        document.getElementById("img3").src = "";
        document.getElementById("name3").innerHTML = "";
        document.getElementById("ins3").innerHTML = "";
        document.getElementById("desc3").innerHTML = "";
        document.getElementById("pre3").innerHTML = "";
        document.getElementById("ch3").innerHTML = "";
        document.getElementById("dur3").innerHTML = "";
        document.getElementById("but3").href = "";
        document.getElementById("but3").class = "";
        document.getElementById("but3").role = "";
        document.getElementById("but3").innerHTML = "";
        //href="class1.html" class="btn btn-info" role="button"

    }

    if(el.toString()=="bachelor" && deg.toString()=="Law")
    {
        document.getElementById("img1").src = "lawBS.jpg";
        document.getElementById("name1").innerHTML = "Course: PreLaw: LSAT";
        document.getElementById("ins1").innerHTML = "Instructor: Darth Vader";
        document.getElementById("desc1").innerHTML = "Description: This is a great class about Pre-Law for BS students.";
        document.getElementById("pre1").innerHTML = "Prerequisties: none";
        document.getElementById("ch1").innerHTML = "Credit Hours: 3";
        document.getElementById("dur1").innerHTML = "3 hours";
        document.getElementById("but1").href = "class1.html";
        document.getElementById("but1").class = "btn btn-info";
        document.getElementById("but1").role = "button";
        document.getElementById("but1").innerHTML = "Register";
        document.getElementById("img2").src = "";
        document.getElementById("name2").innerHTML = "";
        document.getElementById("ins2").innerHTML = "";
        document.getElementById("desc2").innerHTML = "";
        document.getElementById("pre2").innerHTML = "";
        document.getElementById("ch2").innerHTML = "";
        document.getElementById("dur2").innerHTML = "";
        document.getElementById("but2").href = "";
        document.getElementById("but2").class = "";
        document.getElementById("but2").role = "";
        document.getElementById("but2").innerHTML = "";
        document.getElementById("img3").src = "";
        document.getElementById("name3").innerHTML = "";
        document.getElementById("ins3").innerHTML = "";
        document.getElementById("desc3").innerHTML = "";
        document.getElementById("pre3").innerHTML = "";
        document.getElementById("ch3").innerHTML = "";
        document.getElementById("dur3").innerHTML = "";
        document.getElementById("but3").href = "";
        document.getElementById("but3").class = "";
        document.getElementById("but3").role = "";
        document.getElementById("but3").innerHTML = "";
        //href="class1.html" class="btn btn-info" role="button"

    }


    // The function returns the product of p1 and p2
}

