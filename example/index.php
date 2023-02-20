<?php
require_once __DIR__ . '/helpers.php';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/svg+xml" href="/app/example/vite.svg" />
        <title>Vite + React</title>
        <?= vite('index.html') ?>
    </head>
    <body>
        <?= '<p class="message">PHP output here, potentially large HTML chunky monkey</p>' ?>
        <div id="root"></div>
    </body>
</html>