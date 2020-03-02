<?php

use Illuminate\Http\Request;

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

Route::get('monitores' , 'MonitorController@index');
Route::get('monitor/{id}' , 'MonitorController@show');
Route::post('monitores' , 'MonitorController@store');
Route::put('monitor/{id}' , 'MonitorController@update');
Route::delete('monitor/{id}' , 'MonitorController@delete');

Route::get('monitorias' , 'MonitoriaController@index');
Route::get('monitoria/{id}' , 'MonitoriaController@show');
Route::post('monitorias' , 'MonitoriaController@store');
Route::put('monitoria/{id}' , 'MonitoriaController@update');
Route::delete('monitoria/{id}' , 'MonitoriaController@delete');
