/**
 * Created by CodingTest on 2017/7/20.
 */
$(function () {
    //全选
    $("#btn1").click(function(){
        $("input[name='checkbox']").attr("checked","true");
    });
    //取消全选
    $("#btn2").click(function () {
        $("input[name='checkbox']").removeAttr("checked");
    });
    //选中奇数
    $("#btn3").click(function () {
        $("input[name='checkbox']:even").attr("checked","true");
    })
    //选中偶数
    $("#btn4").click(function () {
        $("input[name='checkbox']:odd").attr("checked","true");
    })
    //反选
    $("#btn5").click(function () {
        $("input[name='checkbox']").each(function () {
            ($(this).attr("checked"))?$(this).removeAttr("checked"):$(this).attr("checked","true");
        });
    });
    //选一个
    $("#btn6").click(function () {
        $(":checkbox:not(:checked):first").prop("checked", true);
    });
    //取消一个
    $("#btn7").click(function () {
        $(":checkbox:checked:last").prop("checked", false);
    });
});