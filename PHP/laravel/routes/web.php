<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Route parameters are passed straight into the closure.
Route::get('/hello/{name}', fn (string $name) => ['message' => "Hello, $name"]);
