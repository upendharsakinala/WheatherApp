var Time =setInterval(function () {
    let currentTime = new Date().toTimeString();
    let currentDate = new Date().toDateString();
    document.getElementById("time").innerHTML = currentTime;
  }, 1000); 

let input=document.getElementById('text')
let form=document.getElementById('form')
let option= document.getElementById('select')
let place=document.getElementById("place")
let temp=document.getElementById("temp")
let min=document.getElementById("temp-min")
let max=document.getElementById("temp-max")
let humidity=document.getElementById('humidity')
let pressure=document.getElementById("pressure")
let reset=document.getElementById("reset")
let time=document.getElementById('time')


form.addEventListener('submit',function (e){
  e.preventDefault()
     
  time.textContent=Time;
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=103dac38b79616e18a19b29baac046cf`)
  .then(response=>response.json())
  .then(data =>{
    
    if(`${data.main.temp}`<20){
      console.log("hello");
     }
  
    if(option.value==='temperature'){
      place.textContent=`Place : ${data.name}`
      temp.textContent=`Temperature:${data.main.temp}°C`
      min.textContent=`Min-Temperature : ${data.main.temp_min}°C`
      max.textContent=`Max-Temperature : ${data.main.temp_max}°C`
      pressure.textContent=""
      humidity.textContent=""
    }
    else if(option.value==='humidity'){
      place.textContent=`Place : ${data.name}`
      humidity.textContent=`Humidity : ${data.main.humidity}%`
      temp.textContent=""
      min.textContent=""
      max.textContent=""
      pressure.textContent=""
    }
    
    else if(option.value==='pressure'){
      place.textContent=`Place : ${data.name}`
      pressure.textContent=`Pressure : ${data.main.pressure}Pa`
      temp.textContent=""
      min.textContent=""
      max.textContent=""
      humidity.textContent=""
    }
    else{
      humidity.textContent=`Humidity : ${data.main.humidity}%`
      place.textContent=`Place : ${data.name}`
      temp.textContent=`Temperature : ${data.main.temp}°C`
      min.textContent=`Min-Temperature : ${data.main.temp_min}°C`
      max.textContent=`Max-Temperature : ${data.main.temp_max}°C`
      pressure.textContent=`Pressure : ${data.main.pressure}Pa`
    }  
   })
    .catch(()=> alert("Please enter correct details.."))   
})  


reset.addEventListener('click',()=> {
  input.value=""
  place.textContent=""
  temp.textContent=""
  min.textContent=""
  max.textContent=""
  pressure.textContent=""
  humidity.textContent=""
      })

  var T=new Date().getHours();

  if(6==T<=8){
    document.body.style.backgroundColor="grey"
  }
  else if(6<T<17){
    document.body.style.backgroundColor="yellow"
  }else if(T==17){
    document.body.style.backgroundColor='orange' 
  }else{
    document.body.style.background='black'
  }



  