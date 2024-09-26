<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="content" >
                        <h1 style="color: black ; font-weight : bold">
                            Find, book, or <br>
                            rent a car - <br>
                            quickly and <br>
                            easily !
                        </h1>
                        <p>Streamline Your Car Rental Experience with our effortiess booking process</p>
                        <div><button class="btn btn-primary">Explore Cars</button></div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <div class="elements">
                        <img src="/assets/hero.png" class="img-responsive" style="padding-right : 20px padding-bottom" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'HeroSection'
}
</script>
<style>
.container-fluid
{
    background: white;
  padding-right: 0px;  /* Default horizontal padding on the right */
  padding-left: 0px;
  min-width: 100%;
  height: auto;
  padding-bottom: 25px;
}

.content
{
    max-width: 450px;
    height: auto;
    background-color: white;
    margin: 50px auto;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-style: normal;
}
.content h1{
line-height: 1.5;
color: black;
font-size: 45px;
margin-left: 10px;
}
.content p 
{
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: normal;
    color: gray;
    font-size: 20px;
}
.btn-primary
{
    border-radius: 24px;
    margin-top: 15px;
}
.elements
{
    background:  url('/assets/hero-bg.png') no-repeat top center;
     background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    max-width: 90%;
    height: fit-content;
    position: relative;
}
@media screen and (max-width : 768px) {
    .elements
    {
        height: 250px;
        margin-left : 15px
    }
    .container-fluid{
        margin-bottom:80px ;
    }
    .elements
{
    background:  url('/assets/hero-bg.png') no-repeat top center;
     background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    max-width:fit-content;
    height: fit-content;
    position: relative;
}
}
</style>