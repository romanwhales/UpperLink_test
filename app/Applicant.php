<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    protected $fillable = [
        'firstname','surname','phone_number','email_address','photo','job_id'
    ];
}
