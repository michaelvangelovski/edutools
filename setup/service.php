<?php
define('AJAX_SCRIPT', true);

require(__DIR__.'/../../config.php');
require_once(__DIR__.'/lib.php');

// Check session.
require_sesskey();

$arguments = optional_param('args', '', PARAM_RAW);
// Either we are not allowing GET parameters or we didn't use GET because
// we did not pass a cache key or the URL was too long.
if (empty($arguments)) {
    $arguments = file_get_contents('php://input');
}

$request = json_decode($arguments, true);

if ($request === null) {
    $lasterror = json_last_error_msg();
    throw new coding_exception('Invalid json in request: ' . $lasterror);
}

echo "<pre>"; var_export($request); exit;

$haserror = false;
$response = array();
$methodname = clean_param($request['methodname'], PARAM_ALPHANUMEXT);
$args = $request['args'];
$response = call_service_function($methodname, $args, true);
if ($response['error']) {
    $haserror = true;
}

if (!$haserror) {
    // 90 days only - based on Moodle point release cadence being every 3 months.
    $lifetime = 60 * 60 * 24 * 90;

    header('Expires: '. gmdate('D, d M Y H:i:s', time() + $lifetime) .' GMT');
    header('Pragma: ');
    header('Cache-Control: public, max-age=' . $lifetime . ', immutable');
    header('Accept-Ranges: none');
}

echo json_encode($response);