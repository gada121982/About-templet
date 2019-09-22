

var navHome = document.querySelector('.nav1') ; 
var navAbout = document.querySelector('.nav2') ; 
var navResume = document.querySelector('.nav3') ; 


var resume = document.querySelector('.resume') ; 
var about  = document.querySelector('.about'); 
var home   = document.querySelector('#home'); 

navHome.classList.add('active') ; 



function navActive(nav){

   
    if(nav === 'home'){
      
        if( navHome.className.indexOf('active') != -1){
            console.log('home is acting'); 
            return ; 
        }
        else{
            console.log('add active on home'); 
            navHome.classList.add('active') ; 
            navAbout.classList.remove('active') ; 
            navResume.classList.remove('active') ; 
            return ; 
        }
    }
    if(nav === 'about'){
        
        if(navAbout.className.indexOf('active') != -1){
            
            console.log('about is acting'); 
            return ; 
        }
        else{

            console.log('add active on about'); 
            navAbout.classList.add('active') ; 
            navHome.classList.remove('active') ; 
            navResume.classList.remove('active') ; 
            return ; 
        }
    }
    if(nav === 'resume'){
        if(navResume.className.indexOf('active') != -1){
            console.log('resume is acting'); 
            return ; 
        }
        else{

            console.log('add active on about'); 
            navResume.classList.add('active') ; 
            navHome.classList.remove('active') ; 
            navAbout.classList.remove('active') ; 
            return ; 
        }
    }

}

window.addEventListener('scroll' , ()=>{

     var r = resume.clientHeight ; 
     var h = home.clientHeight ; 
     var a = about.clientHeight ; 
     var zone = window.pageYOffset + window.innerHeight ; 
     
   
     if(zone > 0 && zone < h + a/6){

        console.log('home'); 
        navActive('home')
     }
     if(zone >=  h + a/6 && zone < h + a + r/6 ){
        console.log('about'); 
        navActive('about')
     }
     if(zone >=  h + a + r/6 ){
        console.log('resume'); 
        navActive('resume')
     }
     
   
})


