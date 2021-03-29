$(document).ready(function(){

})

function chooseVideos(){
    // alert("hi")
    document.getElementById("videos").click()
}

function uploadVideos(){
    // console.log(document.getElementById("videos").files[0])
    var formData=new FormData()
    formData.append('videos',document.getElementById("videos").files[0])
    console.log(formData)
    console.log(formData.get('videos'))
    $.ajax({
        url: "",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            console.log(data);
        },
        error: function (e) {
            console.log(e);
        }
    })
}