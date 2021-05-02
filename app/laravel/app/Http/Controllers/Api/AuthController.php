<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller {

    public function createToken(Request $request) {

        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        $accessToken = Auth::user()->createToken('authToken')->plainTextToken;
        return response()->json([
            'access_token' => $accessToken
        ]);
    }

    public function deleteToken(Request $request) {
        $res = $request->user()->currentAccessToken()->delete();
        return response()->json([
            'logoutRes' => $res,
        ]);
    }
}
