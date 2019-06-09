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

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    protected function all(){
        try {
            $user=auth()->userOrFail();
            return response()->json([$user,auth()->payload()->toArray()],200);
        } catch (\Throwable $th) {
             return response()->json('exception occured', 200);
        }
    }
}
