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
        complete: function (data) {
            console.log(data);
            //上传视频完成后跳转到视频编辑处
            window.location.href="./videoEdit.html"
        },
        error: function (e) {
            console.log(e);
        }
    })
}