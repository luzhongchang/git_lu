/**
 * Created by luzhongchang on 17/1/30.
 */

$(document).ready(function () {

    $("img").click(function () {


        $.get("demo_test.asp",function (data,status) {
            alert('Data:' + data +'\nstatus' + status);
        });
        $("#productCategory").width(200).height(300);


    })
});