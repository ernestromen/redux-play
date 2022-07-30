<?php
require 'cors.php';



$_POST  = json_decode(file_get_contents("php://input"), true);
$conn = mysqli_connect("localhost", "root", "", "reduxdb");

for($x = 0; $x< count($_POST['data']); $x++){

    $name = filter_var($_POST['data'][$x]['name'], FILTER_SANITIZE_STRING);
    $name = mysqli_real_escape_string($conn, $_POST['data'][$x]['name']);

    $city = filter_var($_POST['data'][$x]['address']['city'], FILTER_SANITIZE_STRING);
    $city = mysqli_real_escape_string($conn, $_POST['data'][$x]['address']['city']);


    $company = filter_var($_POST['data'][$x]['company']['name'], FILTER_SANITIZE_STRING);
    $company = mysqli_real_escape_string($conn, $_POST['data'][$x]['company']['name']);
    


$query = "insert into users (name,city, company)
values(
'" . $name . "',
'" . $city . "',
'" . $company . "'
)";


$result = @mysqli_query($conn, $query);
if ($result) {
    echo json_encode(["sent" => 1, ]);
} else {
    echo json_encode(["sent" => 0, ]);
}

}


// echo json_encode(count($_POST['data']));
// echo $_POST;

