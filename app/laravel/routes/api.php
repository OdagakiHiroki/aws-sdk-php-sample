<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'Api\AuthController@createToken');

Route::middleware('auth:sanctum')->post('/logout', 'Api\AuthController@deleteToken');

Route::middleware('auth:sanctum')->get('/sample', 'Api\SampleController@index');
