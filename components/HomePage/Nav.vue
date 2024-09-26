<template>
  <div>
    <div class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#toggle"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="/assets/logo.svg" alt="" srcSet="" />
          </a>
        </div>
        <div class="collapse navbar-collapse" id="toggle">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Sign-in</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
   
<script>
export default {
    name : 'Nav'
}
</script>
<style>
*{
    padding: 0px;
    margin: 0px;
}
.navbar {
  margin-bottom: 0px;
  margin-top:5px ;
  border: none;
}

.navbar-inverse {
  background-color: white;
  color: black;
}

.navbar-inverse .navbar-toggle {
  border: none;
}

.navbar-inverse .navbar-toggle:focus,
.navbar-inverse .navbar-toggle:hover {
  background-color: transparent; /* No background color on hover */
}

.navbar-inverse .navbar-nav > li > a {
  font-size: 16px;
  color: white; /* Default text color */
  background-color: blue;
  border-radius: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  transition: 0.2s ease-out; 
}

.navbar-inverse .navbar-nav > li > a:hover {
    border: 1px solid transparent;
    color: white;
    background-color: blue;
    border-radius: 14px;
    padding: none;
}

.navbar-brand {
  float: left;
  height: 50px; /* Default height */
  padding: 8px;
  color: #ffffff; /* White text color for the brand */
}

.navbar-brand img {
  max-height: 30px; /* Adjust to fit your design */
  height: auto; /* Maintain aspect ratio */
  width: 124px;
  padding-top: 6px;
}

.navbar-inverse .navbar-toggle:focus,
.navbar-inverse .navbar-toggle:hover {
  background-color: transparent; /* No background color on hover */
}
.btn-primary
{
  background-color: blue;
  border-color :blue
}
.btn-primary:hover
{
  background-color: blue;
  border-color :blue
}
</style>
