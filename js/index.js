$(document).ready(function(){

    

})

function signin(){
    // alert("lajskd")
    var usermail=document.getElementById("floatingInput")
    var password=document.getElementById("floatingPassword")
    console.log("login")
    $.ajax({
        method:"GET",
        url:"127.0.0.1/userctrl?action=login&username="+ usermail +"&password="+ password,
        complete(){
            console.log("跳转")
            window.location.href="pages/videoUpload.html"
        }
    })
}