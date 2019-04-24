require('polyfill');
require('es5-shim');
require("expose-loader?$!jquery-compat");
require ('!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require ('bootstrap/dist/js/bootstrap.min');
require("../css/entry.css");
window.onload =function () {
           //创建table
            var $content=$("<div></div>");
            $content.addClass("content table-responsive");
            var $table=$("<table class='table'></table>");
            var $tbody=$("<tbody></tbody>");
            var tableValues=[{heading:"验证<br/>结果",worth:"通过"},
                {heading:"作业<br/>名称",worth:"XX医院检查检验报告单"},
                {heading:"签名<br/>时间",worth:"2019-4-18"},
                {heading:"哈希<br/>值",worth:"d9b8xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}];
            for(var i=0;i<tableValues.length;i++){
                var $tr=$("<tr></tr>");
                var $tdName=$("<td></td>");
                var heading=tableValues[i].heading;
                $tdName.html(heading);
                var worth=tableValues[i].worth;
                var $tdValue=$("<td></td>");
                if(i===0){
                   var  $spanValue=$("<span></span>") ;
                    var  $spanTag=$("<span></span>") ;
                  $spanValue.text(worth);
                    if(worth==='通过'){
                        $spanTag.removeClass().addClass("glyphicon glyphicon-ok-circle tag");
                    }else{
                        $spanTag.removeClass().addClass("glyphicon glyphicon-remove-circle tag");
                    }
                    $tdValue.append($spanValue,$spanTag);
                }else{
                    $tdValue.html(worth);
                }
                $tr.append($tdName,$tdValue);
                $tbody.append($tr);

            }
            $table.append($tbody);
            $content.append($table);
            $("#title").append($content);

}