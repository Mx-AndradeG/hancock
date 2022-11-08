<?php

use App\Http\Controllers\Lead\LeadController;
use Illuminate\Support\Facades\Route;

Route::apiResource('lead', LeadController::class, ['names' => 'lead'])->only('store');