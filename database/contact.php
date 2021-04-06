<?php

$con=mysqli_connect("localhost","root","","rentmitro") or die(mysqli_error($con));


if((isset($_POST['submit'])))
{

$id = NULL;
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$msg = $_POST['msg'];

// Attempt insert query execution
$sql = "INSERT INTO contactus (id,name, email, phone, msg) VALUES ('$id','$name','$email', '$phone', '$msg')";
if(!$result = $con->query($sql)){
    die('Error occured [' . $conn->error . ']');
    }
    else
    echo '<script type="text/javascript">
    
    alert("Thank you! We will get in touch with you soon !");
    window.location.href = "../index.html";
    </script>';
       
    }
    


?>