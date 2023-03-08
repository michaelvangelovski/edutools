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