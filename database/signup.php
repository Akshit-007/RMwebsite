

<?php
$servername = "localhost";
$username = "username";
$password = "";
$dbname = "rentmitro";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$id = NULL;
$fullname = $_REQUEST['fullname'];
$email = $_REQUEST['email'];
$password1 = $_REQUEST['password1'];
$password2 = $_REQUEST['password2'];




$sql = "SELECT * from customers WHERE email='$email'";

$res = mysqli_query($conn, $sql);

if (mysqli_num_rows($res) > 0) {
    // output data of each row
    $row = mysqli_fetch_assoc($res);

    if ($email == $row['email']) {
        echo '<script type="text/javascript">
    
    alert("EMAIL already exist !");
    window.location.href = "../index.html";
    </script>';
    }
} else { // if condition ends here if it is new entry, echo will work

    // Validate password strength
    $uppercase = preg_match('@[A-Z]@', $password1);
    $lowercase = preg_match('@[a-z]@', $password1);
    $number    = preg_match('@[0-9]@', $password1);
    $specialChars = preg_match('@[^\w]@', $password1);

    if (!$uppercase || !$lowercase || !$number || !$specialChars || strlen($password1) < 8) {
        echo '<script type="text/javascript">
    
    alert("Please select valid password!");
    window.location.href = "../index.html";
    </script>';
    } else {

        $sql = "INSERT INTO customers  VALUES ('$id','$fullname', '$email', '$password1','$password2')";
        if (mysqli_query($conn, $sql)) {

            echo '<script type="text/javascript">
        
        alert(" You are successfully registered now , You can login !");
        window.location.href = "../index.html";
        </script>';
        }
    }
}
echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);

$conn->close();
?>
