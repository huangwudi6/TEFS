$(document).ready(function(){

    var option = {
        // controls: false,
        // fluid: true,
        // liveui: true,
        // poster: '../videos/p3.jpg'
    }
    
    var startTime=0
    var endTime=0
    var totalTime
    // 初始化videojs，第一个参数为video标签的ID，第二个参数是videojs接收的参数，第三个videojs初始化成功后执行的方法
    var player = videojs('myVideo', option, function onReady(){
        var a = player.currentTime()
        // console.log(a)
        // console.log(videojs.browser)
        this.on('loadedmetadata',function(){
            totalTime=player.duration()
            console.log(player.duration())
            endTime=totalTime
        })
        
        
    })

    var progress_length=$(".progress").width()
    // console.log($(".progress").width())
    var l_progress_length=$(".l-progress").width()
    // console.log(l_progress_length)
    var r_progress_length=$(".r-progress").width()
    // console.log(r_progress_length)
    var l_circle_offset=$(".l-circle").offset()
    // console.log(l_circle_offset)
    var r_circle_offset=$(".r-circle").offset()
    // console.log(r_circle_offset)
    
    //l-circle绑定鼠标事件
    $(".l-circle").on("mousedown",function(e1){
        // console.log(e1)
        //初始位置
        var x1=e1.pageX
        // console.log(x1)
        document.onmousemove=function(e2){
            var change_lengh=e2.pageX-x1
            $(".l-progress").width(l_progress_length+change_lengh)
            var temp=($(".l-progress").width()/progress_length)*totalTime
            startTime=parseInt(temp)
            console.log(startTime)
            player.currentTime(startTime)

            document.onmouseup = function () {
                l_progress_length=$(".l-progress").width()
                // console.log(l_progress_length)
                l_circle_offset=$(".l-circle").offset()
                // console.log(change_lengh)
                document.onmousemove = false //解绑移动事件
                
                return false
            }
            return false
        }
    })

    //r-circle绑定鼠标事件
    $(".r-circle").on("mousedown",function(e1){
        // console.log(e1)
        //初始位置
        var x1=e1.pageX
        // console.log(x1)
        document.onmousemove=function(e2){
            var change_lengh=x1-e2.pageX
            $(".r-progress").width(r_progress_length+change_lengh)
            var temp=totalTime-($(".r-progress").width()/progress_length)*totalTime
            endTime=parseInt(temp)
            console.log(endTime)

            document.onmouseup = function () {
                r_progress_length=$(".r-progress").width()
                // console.log(r_progress_length)
                r_circle_offset=$(".r-circle").offset()
                // console.log(change_lengh)
                document.onmousemove = false //解绑移动事件
                
                return false
            }
            return false
        }
    })

    player.on('timeupdate', function() {//播放时间改变
        console.log("播放时间改变")
        console.log(parseInt(player.currentTime())+"--"+endTime)
        if(parseInt(player.currentTime())>=endTime){
            player.currentTime(startTime)
            player.pause()
        }
    });

})