<?php

namespace App\Http\Controllers\WebApi\auth;

use Illuminate\Http\Request;
use App\Http\Controllers\WebApi\auth\Controller;

class LoginController extends Controller
{
    public function login( Request $request ){
        $credentials=$request->only(['email','password']);
        $token=auth()->attempt($credentials);
        return response()->json($token);
    }
}
