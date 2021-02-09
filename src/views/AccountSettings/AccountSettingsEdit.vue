<template>
<main>

<!--categories cards -->
<div class="row">
    <div class="col-3">
    <AsideSettingMenu/>
    </div>

    <!-- slider -->
    <div class=" col-9 align-items-center d-flex flex-wrap justify-content-around mb-5">
        <div class="col-12">

            Add nombre campo bbdd
            <form class="d-flex flex-column">
            <div class="form-group row">
                <div class="col-4">
                    <label><strong>Name</strong></label>
                    <input type="text"  name="name" placeholder="Name..."/>
                </div>

                <div class="col-4">
                    <label><strong>Surname</strong></label>
                    <input type="text"  name="surname" placeholder="Surname..."/>
                </div>

                <div class="col-4 ">
                    <img src='@/assets/userImg.png' class='profilePhoto' />
                </div>
            </div>

            <div class="form-group row">
                <div class="col-6">
                    <label><strong>Mobile phone</strong></label>
                    <input type="text"  name="surname" placeholder="Mobile phone..."/>
                </div>

                <div class="col-6">
                    <label><strong>Postal Code</strong></label>
                    <input type="text" name="cp" placeholder="Postal Code..."/>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-12">
                    <label><strong>Address</strong></label>
                    <input type="text" name="address" placeholder="Address..."/>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-12">
                    <label><strong>Email</strong></label>
                    <input type="email" name="email" placeholder="Email..."/>
                </div>
            </div>

            <div class="d-flex justify-content-center">
            <button class="btn mt-5 col-sm-6"  type="submit"><strong>Update</strong> </button>
            </div>
        </form>
            
            






        </div>

        
        <!-- end slider -->

    </div>
</div>
    <!-- end categories card -->

    
</main>
</template>



<script>
import AsideSettingMenu from "../../components/AsideSettingMenu";
export default {

components: { AsideSettingMenu },

};
</script>

<style scope>
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
.card img {
  width: 250px;
  height: 250px;
}

.profilePhoto {
    width:150px;
    height:150px;
    border-radius:150px;
}


button{
    color:#38d3b0; 
    background:'#FFF';
    border-color:#38d3b0; 
    font-weight:bold
}

button:hover{
    background: #38d3b0;
    color: #FFF;
}









form {
  min-width: 300px;
  max-width: 800px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: rgb(37, 190, 183);;
  display: inline-block;
  margin: 25px 0 15px;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgb(37, 190, 183);;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 16px;
  position: relative;
  top: 2px;
}

input::placeholder{
  color: rgb(148, 165, 164);
}


input:focus {
  outline: none;
  border-bottom: 2px solid rgb(37, 190, 183);;
}
</style>