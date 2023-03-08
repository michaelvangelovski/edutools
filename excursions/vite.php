<?php

const VITE_HOST = 'http://127.0.0.1:5133';
const BASE_DIR = '/app/excursions';
const DIST_DIR = '/frontend/dist';

// Prints all the html entries needed for Vite
function vite(string $entry): string
{
    $vite_host = VITE_HOST;
    $base_dir = BASE_DIR;
    $output = '';
    if (isDev($entry)) {
        $output .= <<<HTML
            <script type="module">
                import RefreshRuntime from "{$vite_host}{$base_dir}/frontend/@react-refresh"
                RefreshRuntime.injectIntoGlobalHook(window)
                window.\$RefreshReg$ = () => {}
                window.\$RefreshSig$ = () => (type) => type
                window.__vite_plugin_react_preamble_installed__ = true
            </script>
            <script type="module" src="{$vite_host}{$base_dir}/frontend/@vite/client"></script>
            <script type="module" src="{$vite_host}{$base_dir}/frontend/src/main.jsx"></script>
        HTML;
    } else {
        $output .= "\n" . jsTag($entry)
        . "\n" . jsPreloadImports($entry)
        . "\n" . cssTag($entry);
    }

    return $output;
}


// Some dev/prod mechanism would exist in your project

function isDev(string $entry): bool
{
    // This method is very useful for the local server
    // if we try to access it, and by any means, didn't started Vite yet
    // it will fallback to load the production files from manifest
    // so you still navigate your site as you intended!

    static $exists = null;
    if ($exists !== null) {
        return $exists;
    }
    $handle = curl_init(VITE_HOST . '/' . $entry);
    curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($handle, CURLOPT_NOBODY, true);

    curl_exec($handle);
    $error = curl_errno($handle);
    curl_close($handle);

    return $exists = !$error;
}


// Helpers to print tags

function jsTag(string $entry): string
{
    $url = isDev($entry)
        ? VITE_HOST . BASE_DIR . '/frontend/src/main.jsx'
        : assetUrl($entry);

    if (!$url) {
        return '';
    }

    $tag = '<script type="module" crossorigin src="' . $url . '"></script>';
    return $tag;
}

function jsPreloadImports(string $entry): string
{
    if (isDev($entry)) {
        return '';
    }

    $res = '';
    foreach (importsUrls($entry) as $url) {
        $res .= '<link rel="modulepreload" href="'
            . $url
            . '">';
    }
    return $res;
}

function cssTag(string $entry): string
{
    // not needed on dev, it's injected by Vite
    if (isDev($entry)) {
        return '';
    }

    $tags = '';
    foreach (cssUrls($entry) as $url) {
        $tags .= '<link rel="stylesheet" href="'
            . $url
            . '">';
    }
    return $tags;
}


// Helpers to locate files
function getManifest(): array
{
    $content = file_get_contents(__DIR__ . DIST_DIR . '/manifest.json');
    return json_decode($content, true);
}

function assetUrl(string $entry): string
{
    $manifest = getManifest();

    $url = isset($manifest[$entry])
        ? BASE_DIR . DIST_DIR . '/' . $manifest[$entry]['file']
        : '';
        
    //echo "<pre>"; var_export($url); exit;
    return $url;
}

function importsUrls(string $entry): array
{
    $urls = [];
    $manifest = getManifest();

    if (!empty($manifest[$entry]['imports'])) {
        foreach ($manifest[$entry]['imports'] as $imports) {
            $urls[] = BASE_DIR . DIST_DIR . '/' . $manifest[$imports]['file'];
        }
    }
    return $urls;
}

function cssUrls(string $entry): array
{
    $urls = [];
    $manifest = getManifest();

    if (!empty($manifest[$entry]['css'])) {
        foreach ($manifest[$entry]['css'] as $file) {
            $urls[] = BASE_DIR . DIST_DIR . '/' . $file;
        }
    }
    return $urls;
}