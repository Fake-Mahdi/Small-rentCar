<template>
    <div style="margin-top:20px" class="carsgroup">
        <div class="container">
            <div class="title">
                <h1>Cars Catalogue</h1>
                <p>Explore the Cars you might Like</p>
            </div>
            <div class="search-container">
    <div class="here">
        <input type="text" v-model="searchQuery" @input="filtres" placeholder="Volkswagen" class="search-input" id="search-input" />
        <div class="input__image"><img src="/assets/car-logo.svg" height="25px" width="25px" alt="" srcset=""></div>
        <div  v-if="filterSuggestions.length && searchQuery" class="dropdown-menu">
            <div class="dropdown-item"
            v-for="suggestion in filterSuggestions" 
            :key="suggestion"
            @click="selectSugest(suggestion)">
                <strong>{{ suggestion }}</strong>
            </div>
        </div>
    </div>
    <div class="here">
        <input type="text" v-model="mat" placeholder="Tiguan..." class="search-input" />
        <div class="input__image"><img src="/assets/street.svg" height="25px" width="25px" alt="" srcset=""></div>
    </div>
    <button class="search-button">
        <i class="fa fa-search" @click="updateSearchParams(this.searchQuery.toLowerCase() , this.mat.toLowerCase() )"></i> <!-- Font Awesome Search Icon -->
    </button>
</div>
            <div  class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12" v-for="car in cars" :key="car.id">
                    <div class="car-card" @click="toggle">
                        <div class="titre">
                            <h4>{{ car.make }} {{ car.model }}</h4>
                        </div>
                        <div class="price-container">
                            <span class="dollar">$</span>
                            <span class="amount">{{ car.estimatedRent }}</span> <!-- Use estimated rent from the car object -->
                            <span class="per-day">/day</span>
                        </div>
                        <div class="card-img">
                            <img src="/assets/hero.png" class="img-responsive" fill priority alt="" srcset="">
                        </div>
                        <div class="flex">
                            <div class="item">
                                <div><img src="/assets/car-logo.svg" width='20px' height="20px" alt=""></div>
                                <div class="text-center">{{ car.transmission }}</div>
                            </div>
                            <div class="item">
                                <div><img src="/assets/gas.svg" width='20px' height="20px" alt=""></div>
                                <div class="text-center">{{ car.drive }}</div>
                            </div>
                            <div class="item">
                                <div><img src="/assets/tire.svg" width='20px' height="20px" alt=""></div>
                                <div class="text-center">{{ car.city_mpg }} MPG</div>
                            </div>
                        </div>
                        <div><button class="btn btn-primary betss">View More</button></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isVisibility"><HomePageDisplayInfo  @close="isVisibility = false"
            v-for="car in cars" 
            :key="car.year" 
            :carclass="car.class" 
            :cylinders="car.cylinders" 
            :displacement="car.displacement" 
            :drive="car.drive" 
            :fuel="car.fuel_type" 
            :rent="Number(car.estimatedRent)" 
            :model="car.model" 
            :transmission="car.transmission" 
            :year="car.year"
        /></div>

        <footer class="footer">
    <div class="container-fluid">
        <div class="row text-center">
            <!-- First Column -->
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 center">
                <div style="margin-left : 40px ; margin-top : 50px">
                <img src="/assets/logo.svg" width="60%" height="50px" alt="Logo">
                <p class="hidden-xs">Mahdi Boukhouima</p>
                <p class="hidden-xs">All Rights Reserved</p>
                </div>
            </div>

            <!-- Second Column -->
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <h1>Company</h1>
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Careers</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <!-- Third Column -->
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <h1>About</h1>
                <ul>
                    <li>Our Story</li>
                    <li>Our Team</li>
                    <li>Testimonials</li>
                    <li>Blog</li>
                </ul>
            </div>

            <!-- Fourth Column -->
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <h1>Society</h1>
                <ul>
                    <li>Membership</li>
                    <li>Events</li>
                    <li>Community</li>
                    <li>Support Us</li>
                </ul>
            </div>
        </div>
    </div>
</footer>
        
    </div>
</template>

<script>
import { fetchAndEstimateCarsRent } from '~/utils/index';

export default {
    name: 'CarsGroup',
    data() {
        return {
            cars: [],
            isVisibility : false,
            searchQuery : '',
            mat : '',
            suggestions :[],
            filterSuggestions:[]
        };
    },

     async mounted() {
        try {
            this.cars = await fetchAndEstimateCarsRent(); // Fetch cars and their estimated rent
            console.log(this.cars);
            this.suggestions = this.cars.map(car => car.model);
            document.addEventListener('click', this.handleClickOutside);
        } catch (err) {
            this.error = err.message;
        }
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    
     methods: {
        toggle()
        {
            if(!this.isVisibility)
            {
                this.isVisibility = true;
            }
            else
            {
                this.isVisibility = false;
            }
        },
        filtres()
        {
            const query = this.searchQuery.toLowerCase();
            this.filterSuggestions = this.suggestions.filter(sugest =>
                sugest.toLowerCase().includes(query)
            );
            console.log('Here',this.filterSegestion);
        },
        selectSugest(suggestion)
        {
            this.searchQuery = suggestion;
            this.filterSuggestions = [];
        },
        handleClickOutside()
        {
            if (!event.target.closest('.search-input')) {
                
                this.filterSuggestions = [];
            }
        },
        async updateSearchParams(model , facture)
        {
            const searchparam = new URLSearchParams(window.location.search);
            
            if(model)
            {
                searchparam.delete('model');
                searchparam.set('model' , facture);
            }
            else{
                searchparam.delete('model');
            }

            if(facture)
            {
                searchparam.delete('make');
                searchparam.set('make' , model);
            }
            else{
                searchparam.delete('make');
            }
            const newpath = `${window.location.search}?${searchparam.toString()}`;
            console.log(newpath)
            this.$router.push(newpath);
             this.cars = await fetchAndEstimateCarsRent(newpath); 
        }
     }
};
</script>

<style scoped>
.carsgroup
{
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-style: normal;
}
.title h1 {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-style: normal;
    color: black;
}
.title p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: gray;
}
.car-card {
    background-color: rgb(235 235 235);
    border-radius: 14px;
    padding: 18px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 5px;
    transition: 0.2 ease-out;
}

.price-container {
    display: flex;
    align-items: flex-start; /* Changed from left to flex-start */
}

.dollar {
    font-size: 12px; /* Smaller font for the dollar sign */
    align-self: flex-start;
}

.amount {
    font-size: 24px; /* Larger font for the amount */
    font-weight: bold;
}

.per-day {
    font-size: 12px; /* Smaller font for '/day' */
    align-self: flex-end;
}

.card-img img {
    object-fit: contain;
}

.betss {
    width: 100%;
 
}

.flex {
    padding-top: 12px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    justify-items: center;
    visibility: visible;
}



.item {
    display: flex;
    flex-direction: column; /* Stack image and text vertically */
    align-items: center; /* Center both horizontally */
    text-align: center;
}
.car-card:hover{
background-color: white;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
.search-container {
    display: flex;
    align-items: center;
    gap: 25px; /* Space between inputs and button */
    margin-bottom: 25px;
    flex-wrap: wrap;
}


.search-input {
    border: none;
    border-radius: 20px;
    padding: 10px 15px;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    transition: box-shadow 0.3s ease;
    background: #eeeeee;
    width: 320px;
    padding-left: 40px;
    font-weight: 600;
}
.search-input:focus {
    box-shadow: 0 0 5px rgba(0, 150, 255, 0.5); /* Box shadow on focus */
    outline: none; /* Remove default outline */
}

.search-button {
    border: none; /* No border */
    border-radius: 20px; /* Rounded corners */
    padding: 10px 15px;
    background: white; /* White background */
    background: linear-gradient(135deg, #ad2af3, #379bff); /* Gradient background */
    color: white; /* Text color */
    cursor: pointer; /* Pointer on hover */
    display: flex;
    align-items: center; /* Center icon vertically */
    transition: background-color 0.3s; /* Smooth transition */
}

.search-button:hover {
    opacity: 0.8; /* Slightly transparent on hover */
}

.search-button i {
    color: #fff; /* Icon color */
}
.here
{
    position: relative;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
    max-height: 200px; 
    overflow-y: auto;
    z-index: 1000;
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
  }
  
  .dropdown-item {
    padding: 10px;
    cursor: pointer;
  }
  
  .dropdown-item:hover {
    background-color: #f1f1f1;
  }
  .input__image
  {
    position: absolute;
    left: 10px;
    bottom: 7px;
  }
  .footer {
            background-color: #f8f8f8;
            padding: 20px 0;
            margin-top: 25px;
        }
        .footer h1 {
            color: black;
            font-size: 18px;
            margin-bottom: 10px;
        }
        .footer ul {
            list-style-type: none;
            padding: 0;
            color: gray;
        }
        .footer ul li {
            margin: 18px 0;
            font-weight: 400;
        }
        .footer img {
            margin-bottom: 10px;
        }
</style>
