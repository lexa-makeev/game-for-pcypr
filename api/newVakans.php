<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "hrlib.php";
$db = new DB;
$otv = $_POST["otv"];
$jumor = $_POST["jumor"];
$kommun = $_POST["kommun"];
$new = $_POST["new"];
if (isset($otv) && isset($jumor) && isset($kommun)&& isset($new)) {
    $result = $db->newVakans($otv, $jumor, $kommun, $new);
    echo json_encode($result);
} else {
    return 0;
}