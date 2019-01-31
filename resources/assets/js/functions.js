
// infinite scrolling
 
        




$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});



$(document).ready(function(){
    $('#unfinished').removeClass('col-lg-4');
    $('#btn_unfinished').hide();  // remove butto on load                  // in write view for unfinished articles
    $('div.search-cat').hide(); 
});
$(document).ready(function(){
    setTimeout(function() {
      $('#msg').fadeOut('fast');
    }, 4000); // <-- time in milliseconds
});



$(document).ready(function(){

$('#like').on('click',function(event){
  var articleId = 0;   
  var userId = 0;   
  //articleId =  $(this).parents('div.box').attr('data-articleid');
                 articleId = $(this).attr('data-articleid');
                 userId = $('button.fol').attr('data-userid');
        if($('#like').text()=="Wow"){
            $.post(urlLike,{
                articleId:articleId,
                userId:userId,
                _token :token
            },
            function(data){
               $('#like').text('Thanks');
               $('#wow').text(data.wows);
                            }
                 ); 
          }
      else  if($('#like').text()=="Thanks"){
        $.post(urlUnlike,{
            articleId:articleId,
            userId:userId,
            _token :token
        },
        function(data){
                $('#like').text('Wow');
                $('#wow').text(data.wows);
                    }
                );    
            }
         });
       });

$(document).ready(function(){
       $('button.fol').on('click',function(){
       var userId = 0;
       userId = $(this).attr('data-userid');
       if($('button.fol').text()=="Follow"){
        $.post(urlFollow,{
            userId:userId,
            _token :token
           },
           function(){
               $('button.fol').text('Following');
           }
         );
       }
       else if($('button.fol').text()=="Following"){
        $.post(urlUnfollow,{
            userId:userId,
            _token :token
           },
           function(){
               $('button.fol').text('Follow');
           }
         );

       }
      
   });
});



$(document).ready(function(){

    $('button.bookmark').on('click',function(event){
      event.preventDefault();
        var articleId = 0;      
      articleId =  $(this).attr('data-articleId');
           
            if($('button.bookmark').text()=="Bookmark"){
                $.post(urlBookmark,{
                    articleId:articleId,
                    _token :token
                },
                function(){
                        $('button.bookmark').text('Bookmarked');
                        
                            }
             ); 
            }
          else  if($('button.bookmark').text()=="Bookmarked"){
            $.post(urlUnmark,{
                articleId:articleId,
                _token :token
            },
            function(){
                    $('button.bookmark').text('Bookmark');
                  
            }
         );    
          }
      });
    });
    
// bookmark in feed
    $(document).ready(function(){

        $('button.feed').on('click',function(event){
          event.preventDefault();
           // console.log('pressed');
           var articleId = $(this).attr('data-articleId');
           var id = $(this).attr('id');
           //console.log(id);
           if($('#'+id).text()=="Bookmark"){
            $.post(urlBookmark,{
                articleId:articleId,
                _token :token
            },
            function(){
                    $('#'+id).text('Bookmarked');
                    
                        }
         );  
                }
         
         else if($('#'+id).text()=="Bookmarked")     {
            $.post(urlUnmark,{
                articleId:articleId,
                _token :token
            },
            function(){
                    $('#'+id).text('Bookmark');
                    
                        }
              );  
           }

        });
    });  

    $(document).ready(function(){
        $('button.userbookmark').on('click',function(event){
 event.preventDefault();
        var id = $(this).attr('id');
        var articleId = $(this).attr('data-articleId');
        var count = $('#bookmark-row').attr('data-count');
        $.post(urlUnmark,{
            articleId:articleId,
            _token :token
        },
        function(){
                $('#'+id).parents('div.bookmarked').hide();
                count = count-1;
                
                $('#bookmark-row').attr('data-count',count);
                console.log(count);
                if(count==0){
                    $('div.nobook').css({"margin-top":"22%","text-align":"center"});
                    $('#nobookmark').text("No bookmarks left !");
                    $('#readnow').text("Read now");
                }
                    }
          );  
        });
    });
        
 $(document).ready(function(){

  $('#save').on('click',function(event){
      event.preventDefault();
   
    //var title = $('div.form-group').eq(0).children('.form-control').val();
       // var content =$('div.form-group').eq(2).children('#content').val();
       var title = $('#title').val();
       var content = CKEDITOR.instances['editor'].getData();
        var genre = $('#genre').val();
    
           $.post(urlSave,{
               title:title,
               content:content,
               genre:genre,
              _token :token

           },function(data){
             
            alert(data.message);
          
          
           }
         );
    });
});


$(document).ready(function(){
    $('button.complete').on('click',function(){
        var articleId = 0; 
         articleId = $(this).attr('data-articleId');
         $.post(urlComplete,{

            articleId:articleId,
            _token:token
         },
            
            function(data){
                $('#title').val(data.article_title);
                CKEDITOR.instances['content'].setData(data.article_content);
                $('#genre').val(data.article_genre);

            });
    });
});



         $(document).ready(function(){
             $('#commentSubmit').on('click',function(event){
                 event.preventDefault();
                
                var articleId = $('button.bookmark').attr('data-articleId');
                 var comment = $('#commentarea').val();
                 $.post(urlComment,{
                    articleId:articleId,
                    comment:comment,
                    _token:token
                 },
                 function(data){
                        $('#user_pic').attr('src',data.profile_pic);
                    
                       
                        $('#user').text(data.commented_by);
                        $('#user_abt').text(data.about);
                        $('#words').text(data.comment_content);
                 });
             });
         });

     
// genre selection
$(document).ready(function(){
      
    
    $('a.chooseGenre').on('click',function(event){
             event.preventDefault();
            
             var genre = $(this).attr('data-name');
            var genreId = $(this).attr('data-genreId');
          
           if( $('#'+genre).attr("data-val")=="someval"){
            $('#'+genre).css("border","5px solid black");
           
           
        
            $.post(urlGenre,{
                genreId:genreId,
               
                _token:token
                 },function(data){
                   var id = data.id;
                   
                    $('#'+genre).attr("data-val","newval"+id);
                    
                    //console.log($('#'+genre).attr("data-val"));
                 }
           );
        }
           else if($('#'+genre).attr("data-val")=="newval"+genreId){

          $('#'+genre).css("border","none");
            
            $.post(urlGenreRem,{
                genreId:genreId,
               
                _token:token
                 },function(data){
                  $('#'+genre).attr("data-val","someval");
                 }
           );
         }
     });
 });

$(document).ready(function(){
    $('a.chooseGenre').dblclick(function(event){
        event.preventDefault();
        var genre = $(this).attr('data-name');
       
        $('#'+genre).css("border","none");
        $.post(urlGenreRem,{
            genreId:genreId,
           
            _token:token
             }
       );
    });
});

 $(document).ready(function(){
     $('#nextPage').on('click',function(event){
        event.preventDefault();
        $.post(urlCreateProfile,{
                _token:token,
         },
            
            function(data){
               $('div.container').html(data.view);
               // console.log(data.view);
            });
     });
 });
  // search
 
$(document).ready(function(){
	$("#search").on("keyup",function(){
		var query = $(this).val();
		$.get(urlSearchSug,{
			query:query,
			_token: token
		},
		function(data){
		if(data.output2||data.output1){
			$("#ur").html(data.output2);
			$("#sy").html(data.output1);
		}	
		else{
			$("#ur").html(data.nores);
			$("#sy").html(data.nores);
		}
		}
		);
	});
});