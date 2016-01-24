/**
 * Created by Administrator on 2016/1/20.
 */
$(function(){
    var nameList;
    var passList;
    var original = "庄培隆,梁羽,曾韩,李婷婷,许志刚,缪文志,骆満玉,袁菊花,叶盛峰,曾晓敏";

    var resName = "";
    var isPlaying = false;
    var index = 0;
    var names;//用于播放特效的时候所有人名都播放

    init();//初始化所有

    function init(){
        $("#btn").click(function(e){
            if(isPlaying == false)
            {
                lottery();
            }
            else{
                stopAndShowResult();
            }
        });
        initData();
    }

    function initData(){
        nameList = original.split(",");
        names = original.split(",");
        passList = [];
    }

    function lottery(){
        if(nameList == null)return;
        if(nameList.length <= 0){
            confirme(restart,null,"全部人员都已获得奖品，是否重新开始？");
            return;
        }
        $("#btn").css("background-image","url("+'images/btn2.png'+")");
        var random = Math.floor(Math.random() * nameList.length);
        var tmp = nameList.splice(random,1);
        resName = passList[passList.length] = tmp[0];
        if(resName.length == 2)
        {
            resName = tmp[0].charAt(0) + " " + tmp[0].charAt(1);
        }
        else if(resName.length > 3 || resName.length < 2)
        {
            lottery();
            return;
        }
        playEff();
    }

    var intervalId = 0;
    var nameIndex = 0;
    function playEff(){
        isPlaying = true;
        index = 0;
        nameIndex = 0;
        intervalId = setInterval(changeName,100);
    }

    function changeName(){
        if(nameIndex >= names.length)nameIndex = 0;
        var tmp = names[nameIndex];
        var name = tmp;
        if(tmp.length == 2)
        {
            name = tmp.charAt(0) + " " + tmp.charAt(1);
        }
        else if(tmp.length > 3 || tmp.length < 2) {
            nameIndex++;
            changeName();
            return;
        }
        setName(name);
        index ++;
        nameIndex ++;
    }

    function stopAndShowResult(){
        clearInterval(intervalId);
        setName(resName);
        isPlaying = false;
        $("#btn").css("background-image","url("+'images/btn1.png'+")");
    }

    function restart(){
        initData();
        lottery();
    }
    /**
     * 统一设置姓名方法
     * @param name
     */
    function setName(name){
        $("#first").html(name.charAt(0));
        $("#second").html(name.charAt(1));
        $("#third").html(name.charAt(2));
    }

    function confirme(okFunc,cancleFunc,msg){
        alertify.confirm(msg, function (e) {
            if (e) {
                if(okFunc != null)
                {
                    okFunc.call(null);
                }
            } else {
                if(cancleFunc != null)
                {
                    cancleFunc.call(null);
                }
            }
        });
        return false;
    }
})