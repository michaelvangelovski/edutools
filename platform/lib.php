<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @package   local_setup
 * @copyright 2023 Michael Vangelovski
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

function run_setup() {
	global $FULLME, $CFG;

	$url = new moodle_url($FULLME);
	//echo "<pre>"; var_export($url); exit;
	$hostmatch = $CFG->wwwroot == $url->get_scheme() . '://' . $url->get_host();
	$dashmatch = substr( $url->get_path(), 0, 15 ) === '/app/dashboard/';
	$appmatch  = substr( $url->get_path(), 0, 4 ) === '/app';
	$loginmatch  = substr( $url->get_path(), 0, 6 ) === '/login';
	$nologinajax = $url->get_path() == '/lib/ajax/service-nologin.php';
	$platformservice = $url->get_path() == '/app/setup/service.php';

	// If the user is attempting to access the default dashboard, allow it.
	if ( $hostmatch && ( $dashmatch || $loginmatch || $nologinajax || $platformservice ) ) {
		return;
	}

	// If user is not logged in, trigger auth flow.
	if (!isloggedin()) {
        require_login();
		//redirect_to_dashboard();
	}

	// If user is accessing a front end system, allow it.
	if ( $hostmatch && $appmatch ) {
		before_load_front_end();
		return;
	}

	// User is attempting to access something else in Moodle, check if they are an admin.
	$context = context_system::instance();
	if(has_capability('moodle/site:config', $context)) {
	    // Allow standard load with backend/moodle access.
	    before_load_back_end();
	    return;
	}

	redirect_to_dashboard();
}

function before_load_back_end() {
	// Allow user to pass through to backend/Moodle.
}

function before_load_front_end() {
	// Allow user to pass through to frontend.

}

function redirect_to_dashboard() {
	// Redirect to default dashboard.
	//echo "redirecting to dash"; exit;
	$dashboardurl = new moodle_url('/app/dashboard/', array());
    redirect($dashboardurl->out());
    exit;
}

function call_service_function($function, $args, $ajaxonly=false) {
    $response = array();

    try {
        $externalfunctioninfo = service_function_info($function);
        var_export($externalfunctioninfo);

        //$result = call_user_func($callable, $externalfunctioninfo->returns_desc, $result);

        //$response['error'] = false;
        //$response['data'] = $result;
    } catch (Exception $e) {
        $exception = get_exception_info($e);
        unset($exception->a);
        $exception->backtrace = format_backtrace($exception->backtrace, true);
        if (!debugging('', DEBUG_DEVELOPER)) {
            unset($exception->debuginfo);
            unset($exception->backtrace);
        }
        $response['error'] = true;
        $response['exception'] = $exception;
    }

    return $response;
}

/**
 * Returns detailed function information
 *
 * @param string|object $function name of external function or record from external_function
 * @param int $strictness IGNORE_MISSING means compatible mode, false returned if record not found, debug message if more found;
 *                        MUST_EXIST means throw exception if no record or multiple records found
 * @return stdClass description or false if not found or exception thrown
 */
function service_function_info($function, $strictness=MUST_EXIST) {
    global $CFG;

    $namespacefunc = explode("-", $function); // E.g. app_example, test_service
    $pathclass = explode("_", $namespacefunc[0]); // E.g. app, example

    $function = new stdClass();
    $function->namespace = $namespacefunc[0];
    $function->classname = '\API';
    $function->methodname = $namespacefunc[1];
    $function->classpath = $CFG->dirroot.'/'.$pathclass[0].'/'.$pathclass[1].'/backend/api.php';

    if (!file_exists($function->classpath)) {
        throw new coding_exception('Cannot find file with service function implementation '.$function->classpath);
    }

    require_once($function->classpath);

    if (!method_exists($function->namespace.$function->classname, $function->methodname)) {
        throw new coding_exception('Missing implementation method of '.$function->namespace.$function->classname.'::'.$function->methodname);
    }

    return $function;
}
