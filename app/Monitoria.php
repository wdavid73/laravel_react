<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Monitoria extends Model
{
    protected $fillable = [ 'asignature' , 'classroom' , 'date' , 'monitor_id'];

    protected $table = 'monitoring';

    /**
     * Get monitor for the monitoring.
     */

    public function Monitores(){
        return $this->hasMany('App\Monitor');
    }
}
