import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  crossorigin="anonymous"
/>
const Profile =()=>{
return(


<div class="contaner d-flex p-3 ">

<div class="card mx-auto my-3 mr-3 shadow p-3 mb-5 bg-white rounded" style={{width: "18rem"}}>
<div class="text-center"><img style={{width:"160px",height:"160px",borderRadius:"80px"}} src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="" /></div>
  <div class="card-body">
      <div class="container text-center">
  <table class="table">
<tr class="p-6">
<tr><th>Name :</th><td>Aish</td></tr>
<tr><th>Mobile :</th><td>7894561230</td></tr>
<tr><th>Address :</th><td>Morshi</td></tr>

</tr>

</table>
</div>
  <div class="text-center"> <a href="EditProfile" class="btn btn-primary">Edit Profile</a></div>
  </div>

  </div>
</div>





    
    
/* <div class="container">
<div >
<div class="container mt-3 mb-3 ">
    <img style={{width:"160px",height:"160px",borderRadius:"80px"}} src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="" />
</div>
<div class="container">
    <div class="mr-12">
<table class="table">
<tr class="p-6">
<tr><th>Name :</th><td>Aish</td></tr>
<tr><th>Mobile :</th><td>7894561230</td></tr>
<tr><th>Address :</th><td>Morshi</td></tr>

</tr>

</table><br></br>
</div>
<div><a href="#" class="btn btn-primary">Edit Profile</a></div>
</div>

</div>

</div> */


)

}
export default Profile