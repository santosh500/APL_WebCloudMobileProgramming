function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    // Make request to Github
   // $('#things').html('<h2>'+'No User Info Found2'+user+' </h2>');
    $.ajax({url: 'https://api.github.com/users/'+username, success: function(result){
        var t = result.name;
        var y = result.login;
        var i = result.avatar_url;

        $("#things").html('<p>'+t+' '+y+'</p>'+'<img src='+i+' width="80" height="80"></img>');
            $('avatar').html('hi there');
           // $('avatar').html('<img src='+i+' width="80" height="80"></img>');
        }});


}

function showUser(user) {



}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed


}


$(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details

        }
    })
});
