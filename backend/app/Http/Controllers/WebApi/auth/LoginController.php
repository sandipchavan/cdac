<?php

namespace App\Http\Controllers\WebApi\auth;

use Illuminate\Http\Request;
use App\Http\Controllers\WebApi\auth\Controller;

class LoginController extends Controller
{
    public function login( Request $request ){
        $credentials=$request->only(['email','password']);

        try {
            $token=auth()->attempt($credentials);
            $user=auth()->userOrFail();
        } catch (\Tymon\JWTAuth\Exceptions\UserNotDefinedException $exception ) {
            return response()->json(['error'=>$exception]);
        }
        return response()->json(['token'=>$token,'user'=>$user]);
    }
}
