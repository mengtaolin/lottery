/**
 * Created by Administrator on 2016/1/20.
 */
$(function(){
    var nameList;
    var passList;
    var original = "庄培隆,梁羽,曾韩,李婷婷,许志刚,缪文志,骆満玉,袁菊花,叶盛峰,曾晓敏";

    var result1 = "";
    var result2 = "";

    init();//初始化所有

    function init(){
        $("#btn").click(function(e){
            lottery();
        });
        initData();
    }

    function initData(){
        nameList = original.split(",");
        passList = [];
    }

    function lottery(){
        if(nameList == null || nameList.length <= 0)return;
        var random = Math.floor(Math.random() * nameList.length);
        var tmp = nameList.splice(random,1);
        var name = passList[passList.length] = tmp[0];
        if(name.length == 2)
        {
            name = tmp[0].charAt(0) + " " + tmp[0].charAt(1);
        }
        else if(name.length > 3 || name.length < 2)
        {
            lottery();
            return;
        }
        playEff();
    }

    function playEff(){

    }
})