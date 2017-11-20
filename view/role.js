$(function(){
  $('#btnsearch').click(function(){
    var role = $( "select#rolesearch option:checked" ).val();
    console.log("role : " + role);

    axios.get('http://localhost:3000/user/role/'+ role)
    .then(function (response) {
      console.log(response.data.length);
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
    })
    .catch(function (error) {
      console.log(error);
    });
  });
});

