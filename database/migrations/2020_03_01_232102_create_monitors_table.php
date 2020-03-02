<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMonitorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::enableForeignKeyConstraints();

        Schema::create('monitors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->char('first_name', 100);
            $table->char('second_name', 100)->nullable();
            $table->char('first_lastname', 100);
            $table->char('second_lastname', 100)->nullable();
            $table->string('academic_program', 100);
            $table->smallInteger('semester');
            $table->string('document', 100);
            $table->string('cellphone', 100)->nullable();
            $table->string('email', 100);
            $table->tinyInteger('state')->default(1);
            $table->timestamps();
        });

        Schema::create('monitoring', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->char('asignature' , 50);
            $table->string('classroom');
            $table->date('date');
            $table->tinyInteger('state')->default(1);
            $table->timestamps();
        });

        Schema::table('monitoring', function (Blueprint $table) {
            $table->unsignedBigInteger('monitor_id');
            $table->foreign('monitor_id')->references('id')->on('monitors')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('monitors');
        Schema::dropIfExists('monitorias');
    }
}
