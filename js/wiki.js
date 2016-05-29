 $(document).ready(function(){

  // Initialize search variable

    function search(){

       searchTerm="india";
       var url="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch="+searchTerm+"&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max";

       $.getJSON(url,function(json){

           console.log(JSON.stringify(json));

       });


    }

});

/*$(document).ready(function(){

   var searchTerm="India";
   var url='https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchTerm+'&limit=5&namespace=0&format=json&callback=?';

   $.getJSON(url,function(json){

       getUsefulInfo(json);

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
