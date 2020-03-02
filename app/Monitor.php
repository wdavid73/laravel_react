<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Monitor extends Model
{
    protected $fillable = [
        'first_name',
        'second_name',
        'first_lastname',
        'second_lastname',
        'academic_program',
        'semester',
        'document',
        'cellphone',
        'email'
    ];

    protected $table = 'monitors';
}
