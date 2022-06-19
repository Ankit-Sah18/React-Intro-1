
import navbar from "../components/navbar.js";
import '../styles/style.css'

import axios from 'axios'

document.getElementById("navbar").innerHTML=navbar()


async function fetchData(){
        let data = await axios.get("https://grocery-masai.herokuapp.com/items")
        console.log("data:",data)
        
        let res = await data.data
        //return res
        console.log("res:",res)
        append(res)
    
    }
    fetchData();

    function append(data){


     
        data.map(function(el,index){
            
            let div=document.createElement("div")
            div.setAttribute("id","box")
    
        let image=document.createElement("img")
    
        image.src= el.image
    
        let name=document.createElement("h4")
    
        name.innerText=el.name
    
        let price= document.createElement("p")
    
        price.innerText=el.price
    
        let add_cart= document.createElement("button")
        add_cart.innerText="Add To Cart"
    
        add_cart.setAttribute("id","add")
    
        add_cart.addEventListener("click",function(){
             
                productADD(el,index)
    
        })
        // console.log(data[0].name)
    
        div.append(image,name,price,add_cart)
    
        document.querySelector("#items").append(div)
        })
    
      
     
     }








