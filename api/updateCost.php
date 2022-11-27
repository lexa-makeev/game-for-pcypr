<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;
$cost = $_POST["cost"];

if (isset($cost)) {
    $result = $db->updateCost($cost);
    echo json_encode($result);
} else {
    return 0;
}