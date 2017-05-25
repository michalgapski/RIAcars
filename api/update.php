<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "UPDATE cars SET
brand ='$data->brand',  model ='$data->model',
engine ='$data->engine',yearOfProduction ='$data->yearOfProduction', inspectionDate = '$data->inspectionDate'
WHERE id = $data->id ";
$qry = $conn->query($sql);
if($data->name){
}
$conn->close();
?>