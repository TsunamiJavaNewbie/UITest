/**
 * Created by CodingTest on 2017/7/19.
 */
$(function () {
    //删除操作
    $("input[name='del']").click(function() {
        // 遍历选中的checkbox
        $("input[name='checkbox']:checked").each(function() {
            // 获取checkbox所在行的顺序
            var n = $(this).parents("tr").index();
            $("table#table").find("tr:eq("+n+")").remove();
        });
    });

    //隐藏添加栏
    $("#add").hide();
    $("#divsave").hide();

    //显示添加
    $("input[name='add']").click(function () {
        $("#add").toggle(2000);
    });


    //显示保存页面
    $("input[name='save']").click(function () {
        $("#divsave").toggle(2000);
    });

    //添加操作
    $("#AddUser").click(function () {
        //获取信息
        var name = $("#name").val();
        var sex=$("#sex").val();
        var password=$("#password").val();
        var address=$("#address").val();
        var add=$("<tr><td><input type='checkbox' name='checkbox'></td><td>"
            +name+"</td><td>"+sex+"</td><td>"+password+"</td><td>"+address+"</td></tr>");
        //表格尾部出现
       // $("#table").append(add);
        //表格首行出现
        $("#table tbody tr:first").after(add);
    });

    //获取焦点
    $("input[name='addinput']").focus(function(){
        $(this).css("background-color","#cccccc");
    });
    $("input[name='addinput']").blur(function(){
        $(this).css("background-color","#ffffff");
    });

    //全选
    $("#btn1").click(function () {
        $("input[name='checkbox']").each(function () {
            ($(this).attr("checked"))?$(this).removeAttr("checked"):$(this).attr("checked","true");
        });
    });

    //保存数据
    $("input[name='save']").click(function() {
        var html = '';
        $('#table').find('tr').each(function () {
            $(this).find('td').each(function () {
                html += $(this).text() + ' ';
            });
            html += '<br/>';
        });
        $("#showSave").html(html);
    });

});