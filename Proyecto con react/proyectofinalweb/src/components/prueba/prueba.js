import React from "react"
import "./prueba.css"
import $ from 'jquery'; 

const prueba = () => (
    

<div class="container">
	<div class="">
		<h2>Filtering divs</h2>
	</div>
    
    <div>
        <button class="btn btn-primary filter-button" data-filter="all">All</button>
        <button class="btn btn-default filter-button" data-filter="photo">foto</button>
        <button class="btn btn-default filter-button" data-filter="graphic">Graphic</button>
        <button class="btn btn-default filter-button" data-filter="webdesign">Web design</button>
    </div>
    <br/>
    
    <div class="row">
        <div class="col-md-3 filter photo">
            <div class="each-item">
                <img class="port-image" src="http://www.templates4all.com/wp-content/uploads/2011/09/Engon-Joomla-Corporate-Portfolio-Template.jpg"/>
                <div class="cap1">
                    <h3>Car show</h3>
                    <p>A car showroom for all verities of cars to display</p>
                </div>
                <div class="cap2">
                    <p class="text-center">Visit</p>
                </div>
                
            </div>
            
        </div>
        
        
        
        <div class="col-md-3 filter webdesign">
            <div class="each-item">
                <img class="port-image" src="http://danielsitek.cz/pic/small/daniel-sitek-portfolio_small.jpg"/>
                <div class="cap1">
                    <h3>Car show</h3>
                    <p>A car showroom for all verities of cars to display</p>
                </div>
                <div class="cap2">
                    <p class="text-center">Visit</p>
                </div>
            </div>
        </div>
        
       
        
        <div class="col-md-3 filter webdesign graphic">
            <div class="each-item">
                <img class="port-image" src="http://paperhaus.com/images/products/shrapnel-design-handmade-double-thick-screwpost-portfolio-cover-11x14-landscape-black-anodized-aluminum-14231_detail.jpg"/>
                <div class="cap1">
                    <h3>Car show</h3>
                    <p>A car showroom for all verities of cars to display</p>
                </div>
                <div class="cap2">
                    <p class="text-center">Visit</p>
                </div>
            </div>
        </div>
        
        <div class="col-md-3 filter photo">
            <div class="each-item">
                <img class="port-image" src="http://4.bp.blogspot.com/_IDQ_mBDYk9I/SsON_Or-mGI/AAAAAAAAAEs/0AchAjEekYU/s400/Portfolio-idea-3.jpg"/>
                <div class="cap1">
                    <h3>Car show</h3>
                    <p>A car showroom for all verities of cars to display</p>
                </div>
                <div class="cap2">
                    <p class="text-center">Visit</p>
                </div>
            </div>
        </div>
    </div>
</div>
   

    );

 

    $(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
    
            $('.filter').show('1000');
        }
        else
        {

            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

});

export default prueba;