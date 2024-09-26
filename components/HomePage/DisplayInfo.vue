<template>
    <div class="confirm-overlay">
        <div class="car__info">
            <div class="try">
                <img src="/assets/close.svg" height="20px" width="20px"  @click="$emit('close')" alt="Close" />
            </div>
            <div class="back">
                <img src="/assets/hero.png" class="img-responsive" alt="Car Image" />
            </div>
            <div class="info">
                <h3>{{ model }} ({{ year }})</h3>
                <div class="info-item">
                    <span>Class:</span>
                    <span class="values">{{ carclass }}</span>
                </div>
                <div class="info-item">
                    <span>Cylinders:</span>
                    <span class="values" >{{ cylinders }}</span>
                </div>
                <div class="info-item">
                    <span>Displacement:</span>
                    <span class="values" >{{ displacement }}</span>
                </div>
                <div class="info-item">
                    <span>Drive:</span>
                    <span class="values" >{{ drive }}</span>
                </div>
                <div class="info-item">
                    <span>Fuel Type:</span>
                    <span class="values" >{{ fuel }}</span>
                </div>
                <div class="info-item">
                    <span>Estimated Rent:</span>
                    <span class="values" >${{ rent.toFixed(2) }}</span>
                </div>
                <div class="info-item">
                    <span>Model:</span>
                    <span class="values">{{ model }}</span>
                </div>
                <div class="info-item">
                    <span>Transmission:</span>
                    <span class="values" >{{ transmission }}</span>
                </div>
                <div class="info-item">
                    <span>Year:</span>
                    <span class="values" >{{ year }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'DisplayInfo',


        props: {
        carclass : String,
        cylinders : Number,
        displacement : Number,
        drive : String,
        fuel : String,
        rent : Number,
        model : String,
        transmission : String,
        year: Number,

    }

}
</script>

<style scoped>



.confirm-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure it appears above other content */
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  .back
  {
    background-color:rgb(38, 38, 218) ;
    border-radius: 24px;
  }
  .car__info
    {
        max-width: 350px;
        background-color: #f5f4f4;
        height: auto;
        display: flex;
        border-radius: 8px;
        padding: 20px;
        flex-direction:column ;
        position: relative;
    }
    .try
    {
    position: absolute;
    right: 15px;
    top: 10px;
    padding: 5px;
    background: white;
    border-radius: 50%;
    }

    .info {
    display: flex;
    flex-direction: column;
}

.info-item {
    display: flex;
    justify-content: space-between;
    padding: 5px 0; /* Add some spacing between items */
}

.info-item span {
    flex: 1; /* Allow both spans to take equal space */
}

.info-item span:last-child {
    text-align: right; /* Align the value to the right */
}
.values
{
    font-weight: 600;
    color: black;
}
</style>