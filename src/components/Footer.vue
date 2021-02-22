<template>
<div class="footer">
<div class="row d-flex justify-content-around">
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-youtube"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
</div>

<div class="row">
<ul>
<li><a href="../views/About.vue">Contact us</a></li>
<li><a href="#">Our Services</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="../views/TermsConditions.vue">Terms & Conditions</a></li>
</ul>
</div>

<div class="row d-flex justify-content-center">
MAEWA Copyright © 2021 Maewa - All rights reserved 
</div>
</div>

</template>

<script>
export default {
    name:"Footer",
};

</script>

<style scoped>
.footer {
  background: rgb(52, 54, 54);
  padding: 30px 0px;
  font-family: "Play", sans-serif;
  text-align: center;
}
.footer .row {
  margin: 1% 0%;
  padding: 0.6% 0%;
  color: rgb(114, 155, 179);
  font-size: 0.8em;
}
.footer .row a {
  text-decoration: none;
  color: rgb(114, 155, 179);
}
.footer .row a:hover {
  color: #fff;
}
.footer .row ul {
  width: 100%;
}
.footer .row ul li {
  display: inline-block;
  margin: 0px 30px;
}
.footer .row a i {
  font-size: 2em;
  margin: 0% 1%;
}
@media (max-width: 720px) {
  .footer {
    text-align: left;
    padding: 5%;
  }
  .footer .row ul li {
    display: block;
    margin: 10px 0px;
    text-align: left;
  }
  .footer .row a i {
    margin: 0% 3%;
  }
}
</style>