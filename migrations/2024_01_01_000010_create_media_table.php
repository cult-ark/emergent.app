<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('media', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Original filename
            $table->string('file_name'); // Stored filename
            $table->string('mime_type');
            $table->string('path'); // Storage path
            $table->string('disk')->default('public'); // Storage disk
            $table->unsignedBigInteger('size'); // File size in bytes
            $table->json('metadata')->nullable(); // Additional metadata (dimensions, alt text, etc.)
            $table->morphs('mediable'); // Polymorphic relationship
            $table->string('collection_name')->nullable(); // For organizing media
            $table->timestamps();
            
            // Indexes
            $table->index(['mediable_type', 'mediable_id']);
            $table->index('collection_name');
            $table->index('mime_type');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('media');
    }
};