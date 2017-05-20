<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Applicant;
use App\Job;

class ApplicantController extends Controller
{
    //
    public function getJobs(){
        return Job::all();
    }
    public function submitApplication(Request $request){
        Applicant::create($request->all());
        print_r($request->all());
        return ['status'=>true,'data'=>$request->all()];
    }
}
