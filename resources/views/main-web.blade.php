@php
    $config = [
        'appName' => config('app.name'),
        'locale' => $locale = app()->getLocale(),
        'locales' => config('app.locales'),
    ];
@endphp
    <!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-bs-theme="light">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicoin -->
    <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Valen</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
    <script async defer src="https://buttons.github.io/buttons.js"></script>
    <script>
        window.config = @json($config);
    </script>
    <!-- Scripts -->
    @vite([
        'resources/sass/app.scss',
        'resources/valenweb/scss/bootstrap-valen.scss',
        'resources/valenweb/scss/style.scss',
        'resources/js/app.js',
    ])
</head>
<body class="bg-white">
    <div id="app" class="g-sidenav-show">
        <router-view></router-view>
    </div>
</body>
</html>
