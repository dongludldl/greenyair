<?php
session_start();
$con = mysqli_connect('localhost','root','');

mysqli_select_db($con,'usertime');

$starttime = $_POST['starttime'];
$endtime = $_POST['endtime'];

$reg = "insert into time(starttime, endtime) values ('$starttime','$endtime')";
mysqli_query($con,$reg);


?>
