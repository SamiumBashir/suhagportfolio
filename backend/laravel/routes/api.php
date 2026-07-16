<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\HealthController;

Route::get('/health', [HealthController::class, 'index']);

Route::get('/test', function (Request $request) {
    return response()->json(['message' => 'API ready']);
});
