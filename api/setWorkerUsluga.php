<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;
$id = $_POST["id"];
$id_worker = $_POST["id_worker"];
if (isset($id) && isset($id_worker)) {
    $result = $db->setWorkerUsluga($id,$id_worker);
    echo json_encode($result);
} else {
    return 0;
}