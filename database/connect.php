<?php
$host="localhost";
$user="root";
$password="";
$dbname="rentmitro";


$connect=mysqli_connect($host,$user,$password,$dbname);
if(mysqli_connect_errno()){
    echo "No connection";
}



?>