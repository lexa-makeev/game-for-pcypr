<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;
$id = $_POST["id"];
$id_usluga = $_POST["id_usluga"];

if (isset($id)) {
    $result = $db->deleteWork($id, $id_usluga);
    echo json_encode($result);
} else {
    return 0;
}