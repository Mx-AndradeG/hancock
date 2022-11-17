<?php

namespace App\Http\Controllers\Lead;

use App\Http\Controllers\Controller;
use App\Http\Requests\Lead\StoreLeadRequest;
use App\Models\Lead\Lead;
use App\Models\User;
use App\Notifications\SendLeadNotify;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    public function store(StoreLeadRequest $request){
        $lead = new Lead();
        $lead->fill($request->all());
        $lead->save();
        $this->sendLead($lead);
    }

    public function sendLead(lead $lead){
        $user = User::findOrFail(1);
        $user->notify(new SendLeadNotify($lead));
    }
}
