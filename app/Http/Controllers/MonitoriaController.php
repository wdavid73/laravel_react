<?php

namespace App\Http\Controllers;

use App\Monitoria;
use Illuminate\Http\Request;

class MonitoriaController extends Controller
{
    public function index(){
        return Monitoria::all();
    }

    public function show($id){
        return Monitoria::find($id);
    }

    public function store(Request $request){
        return Monitoria::create($request->all());
    }

    public function update(Request $request , $id){
        $monitoria = Monitoria::findOrFail($id);
        $monitoria->update($request->all());

        return $monitoria;
    }

    public function delete(Request $request, $id){
        $monitoria = Monitoria::findOrFail($id);
        $monitoria->delete();

        return 204;
    }
}
