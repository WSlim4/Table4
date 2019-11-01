<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function register(Request $request){

        $user = new User;
        $user->email = $request->email;
        $user->save();

        return response()->success($user);
    }

}
