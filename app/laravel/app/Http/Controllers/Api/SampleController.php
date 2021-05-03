<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SampleController extends Controller
{
    public function index() {
        return response()->json([
            'sample' => 'Laravel APIから取得したsampleデータ'
        ]);
    }
}
