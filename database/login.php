<?php
include('connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $password = $_POST['password1'];
  $sql = "SELECT * from customers WHERE email='$email' AND password1='$password'";
  $results = $connect->query($sql) or die( mysqli_error($connect));
  $row = mysqli_fetch_array($results, MYSQLI_ASSOC);
  $count = mysqli_num_rows($results);

  if ($count == 1) {
    echo '<script type="text/javascript">
    
    alert("WELCOME!");
    window.location.href = "../index.html";
    </script>';
  } else {
    echo '<script type="text/javascript">
    
    alert("Invalid username or password!");
    window.location.href = "../index.html";
    </script>';
  }
}

?>