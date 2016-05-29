 $(document).ready(function(){

  // Initialize search variable

    var searchTerm='';

    function search(){

       console.log(searchTerm);

       var url="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch="+searchTerm+"&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&callback=?";

       $.getJSON(url,function(json){

           handleMyJSON(json);

       });

       function handleMyJSON(json){

          console.log(JSON.stringify(json));
          var temp=json.query.pages;
          for(i in temp){

             var pageId=temp[i].pageid;
             var title=temp[i].title;
             var extract=temp[i].extract;
             var link="http://en.wikipedia.org/wiki/?curid="+pageId;
             var html="<div class='well'><a href="+link+" target='_blank'><h2>"+title+"</h2><p>"+extract+"</p></a></div>";
             $('.container').append(html);

          }

       }

    }

    $('#search').keypress(function(e){

         console.log(e.which);

         if(e.which==13){

            searchTerm=$('#search').val();
            console.log(searchTerm);
            // Reset container
            $('.container').empty();

            search();
         }

    });


});


/*$(document).ready(function(){

   var searchTerm="India";
   var url='https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchTerm+'&limit=5&namespace=0&format=json&callback=?';

   $.getJSON(url,function(json){

       getUse fulInfo(json);

   });

   function getUsefulInfo(json){

      var html="";
      for(var i=0;i<5;++i){

         html+="<a href='"+json[3][i]+"'><p>"+json[2][i]+"</p></a><br><br>";

      }

      displayHtml(html);


   }

   function displayHtml(html){

    //   $('.results').html(html);

   }


});   */
