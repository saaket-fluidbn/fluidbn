@extends('layouts.main2')

@section('title')
@if($slug!=NULL)
Manage story choices | fluidbN
@else
Signup - choose-category | fluidbN
@endif
@endsection
 
@section('content')
 
<div class="container">
  
<div class="box lower-margin w3-hide-small w3-hide-medium" style="margin-top:5%;">
   @if($slug!=NULL)
    <h1 class="w3-xxxlarge" style="font-weight:bold;font-color:black;">Hi {{ucfirst(Auth::user()->fname)}}, manage your story choices</h1> 
   @else
    <h1 class="w3-xxxlarge" style="font-weight:bold;font-color:black;">Hi {{ucfirst(Auth::user()->fname)}}, choose categories you <i class="fa fa-heart" style="font-size:40px;color:red;"></i></h1> 
   <p class="w3-xlarge">Select at least 3 to continue</p>
   @endif 
  
  </div>
  <div class="box lower-margin w3-hide-large" style="margin-top:15%;">
     @if($slug!=NULL)
<h1 class="w3-xlarge" style="font-weight:bold;font-color:black;">Hi {{ucfirst(Auth::user()->fname)}}, manage your story choices</h1> 
   
     @else
<h1 class="w3-xlarge" style="font-weight:bold;font-color:black;">Hi {{ucfirst(Auth::user()->fname)}}, choose categories you <i class="fa fa-heart" style="font-size:25px;color:red;"></i></h1> 
   <p class="w3-xlarge">Select at least 3 to continue</p> 
    @endif
     
  </div>
</div>
<div class="container">
  <div class="row">
   
@foreach ($genre as $g)
@php

if(Auth::user())
$exists = Auth::user()->hasGenre()->wherePivot('user_id',Auth::user()->id)->wherePivot('genre_id',$g->id)->first();
if($exists!=NULL){
  $c="card-genre lower-margin w3-opacity-max";
  $v = "newval".$g->id;
}

else{
  $c="card-genre lower-margin";
  $v = "someval";
}

@endphp

    <div class="col-md-3 "  data-genreId="{{$g->id}}">
        <a href="/{{$g->name}}" class="chooseGenre" data-genreId="{{$g->id}}" data-name="{{$g->id}}">

          <div class="{{$c}}" id="{{$g->id}}" data-val="{{$v}}">
          <img class="featurette-image img-fluid mx-auto " style="box-shadow:5px 5px 5px #888888;" src="/storage/genere/{{$g->image}}" alt="">
      
        </div>
     
        </a>
    </div>

@endforeach

  </div>
<div>
   @if($slug!=NULL)
  <button class="w3-button w3-flat-pomegranate w3-padding-large" onclick="location.href='{{route('user-categories',['user'=>Auth::user(),'slug'=>str_slug(Auth::user()->fname.".".Auth::user()->lname)])}}'">Save Choices</button>
  @else
  <button class="w3-button w3-flat-pomegranate w3-padding-large"onclick="location.href='{{route('create-profile')}}'" id="">Continue</button>
@endif
</div>
</div>
<script>
    var token = "{{Session::token()}}";
   
    var urlGenre = "{{route('store-genre')}}";
    var urlCreateProfile = "{{route('NewProfile')}}";
    var urlGenreRem = "{{route('rem-genre')}}";
</script>
@endsection