@extends('layouts.main')
@section('title')
{{ucfirst($user->fname)."'s Stories"}} | fluidbN

@endsection

@section('content')

<div class="container">
                     <div class="lower-margin">
                     <h2 class="featurette-heading" style="font-size:50px;font-weight:bold;color:black;"> Stories from {{ucfirst($user->fname).' '.ucfirst($user->lname)}}</h2>
                     </div>
                  
                       
                      @if(count($stories)>0)
                     
                      <div class="box">

                        <div class="row featurette">
                            @foreach ( $stories as $ra )
                           
                              <div class="col-md-4">
                              <a href="{{route('show-article',['article'=>$ra,'slug'=>str_slug($ra->title)])}}">
                                <div class="card-related" style="width:100%;height:auto;">
                                  <img class="featurette-image img-fluid mx-auto img-card" src="/storage/article_images/{{$ra->title_image}}" alt="">
                                  <div class="container-related lower-margin" style="width:100%;height:auto;">
                                    <h2 class="featurette-heading-small" style="font-size:25px;font-weight:bold;">{{ucfirst($ra->title)}}</h2>
                                   
                                     @if($ra->views>0)<small class="views"> {{ '   '.$ra->views.' views'}}</small>@endif
                                 
                                </div>
                                </div>
                                </a>
                               
                                  <br/>
                                  
                                  
                           </div>
                        
                        
                            @endforeach
                        
                            
                              </div>
                               {{$stories->links()}}
         @elseif(Auth::user()->id == $user->id)
      
              <h2 class=""  style="color:mediumvioletred;">{{ucfirst($user->fname).' looks like you haven\'t created any article or a story...'}} <a href="{{route('write')}}">Create one !</a></h2>
         @else        
         <h2 class="" style="color:mediumvioletred;">{{'Sorry no articles from '.ucfirst($user->fname).' but sure to come till then...'}}</h2><a href="{{route('feed')}}">Explore fluidbN !</a>

                      </div>
                       <br/>
                        <h2 class="w3-xxlarge" style="color:black;font-weight:bold;">OR</h2>
                        <a href="{{ route('write') }}" class="w3-large w3-tag w3-card w3-flat-pomegranate">{{ "Create a new story" }}</a>
                     
           @endif
               


</div>


@endsection