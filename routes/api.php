<?php

use App\Http\Controllers\Api\CarController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CategoryGrouperController;
use App\Http\Controllers\Api\ColorController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\PermissionController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\SizeController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Auth\ResetPasswordController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\ForgotPasswordController;


Route::post('forget-password', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('forget.password.post');
Route::post('reset-password', [ResetPasswordController::class, 'reset'])->name('password.reset');

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::apiResource('users', UserController::class);
    Route::apiResource('products', ProductController::class);
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('categorygroupers', CategoryGrouperController::class);
    Route::apiResource('colors', ColorController::class);
    Route::apiResource('sizes', SizeController::class);
    Route::apiResource('roles', RoleController::class);
    Route::apiResource('orders', OrderController::class);
    Route::get('role-list', [RoleController::class, 'getList']);
    Route::get('role-permissions/{id}', [PermissionController::class, 'getRolePermissions']);
    Route::put('/role-permissions', [PermissionController::class, 'updateRolePermissions']);
    Route::apiResource('permissions', PermissionController::class);
    Route::get('category-list', [CategoryController::class, 'getList']);
    Route::get('categorygrouper-list', [CategoryGrouperController::class, 'getList']);
    Route::get('color-list', [ColorController::class, 'getList']);
    Route::get('size-list', [SizeController::class, 'getList']);
    Route::get('/user', [ProfileController::class, 'user']);
    Route::put('/user', [ProfileController::class, 'update']);

    Route::get('abilities', function(Request $request) {
        return $request->user()->roles()->with('permissions')
            ->get()
            ->pluck('permissions')
            ->flatten()
            ->pluck('name')
            ->unique()
            ->values()
            ->toArray();
    });
});

Route::post('orders', [OrderController::class, 'createOrder']);
Route::get('category-list', [CategoryController::class, 'getList']);
Route::get('categorygrouper-list', [CategoryGrouperController::class, 'getList']);
Route::get('color-list', [ColorController::class, 'getList']);
Route::get('size-list', [SizeController::class, 'getList']);
Route::get('get-products', [ProductController::class, 'getProducts']);



Route::get('get-category-products/{id}', [ProductController::class, 'getCategoryByProducts']);
Route::get('get-product/{id}', [ProductController::class, 'getProduct']);
Route::get('get-products-interest/{id}', [ProductController::class, 'getProductsInterest']);


// Search Prod
Route::get('products/search/{search}', [ProductController::class, 'searchProduct']);

// Car
Route::apiResource('car', CarController::class);

// Car/deleteall
Route::delete('car/deleteall/{id}', [CarController::class, 'deleteAll']);
