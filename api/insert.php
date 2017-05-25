<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";

$sql = "INSERT INTO cars ( brand, model, engine, yearOfProduction, inspectionDate)
VALUES ('$data->brand', '$data->model', '$data->engine', '$data->yearOfProduction', '$data->inspectionDate');";

if($data->brand){
    $qry = $conn->query($sql);
}
$conn->close();
?>