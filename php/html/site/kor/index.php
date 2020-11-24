<?php
    $param = $_GET['pageCode'];
    if(file_exists($param.'.php')){
        $pageCode = $param;
    }else{
        $pageCode = "content";
    }

    include_once('head.php');
    include_once($pageCode.'.php');
    include_once('foot.php');
?>