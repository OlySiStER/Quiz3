$(function(){
  $('#btnsearch').click(function(){
    var fname = document.getElementById("fnamesearch").value; 
    console.log("fname : " + fname);

    axios.get('http://localhost:3000/users/search?fname='+ fname)
    .then(function (response) {
      console.log(response.data.length);
      if(response.data.length > 0){
        $('#panel').empty();
        for(i=0; i<response.data.length; i++){
          $('#panel').append(
            '<tr><th scope="row" id="num"><center>'+ response.data[i].id +'</center></th>'+
            '<td id="fname">'+ response.data[i].fname +'</td>'+
            '<td id="lname">'+ response.data[i].lname +'</td>'+
            '<td id="role">'+ response.data[i].role +'</td>'+
            '<td id="exp">'+ response.data[i].exp +'</td></tr>'
          );
        }
      }else{
        $('#panel').empty();
        $('#panel').append(
          '<tr><th scope="row" id="num"><center>No data</center></th>'+
          '<td id="fname">No data</td>'+
          '<td id="lname">No data</td>'+
          '<td id="role">No data</td>'+
          '<td id="exp">No data</td></tr>'
        );
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  });
  
  
  
});

