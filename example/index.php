<?php

require(__DIR__.'/../../config.php');
require_once __DIR__ . '/vite.php';

//echo "<pre>"; var_export($_SERVER['REQUEST_URI']); exit;

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Example</title>
        <script>
            window.appdata = {}
            window.appdata.config = {
                "sesskey": "<?= sesskey() ?>"
            }
        </script>

        <?= vite('index.html') ?>
        
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>