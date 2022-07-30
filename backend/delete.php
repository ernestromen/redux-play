<?php
require 'cors.php';


$conn = mysqli_connect("localhost", "root", "", "reduxdb");
$query = "TRUNCATE TABLE users";

$result = @mysqli_query($conn, $query);
if ($result) {
    echo json_encode(["sent" => 1, ]);
} else {
    echo json_encode(["sent" => 0, ]);
}