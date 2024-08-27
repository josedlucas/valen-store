<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Mail\ContactMessageReceived;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{

    public function contact(StoreContactRequest $request){
        Mail::to('jsdlcs266@gmail.com')->send(new ContactMessageReceived($request->all()));
        return response()->json(['success' => true], 200);
    }

}
