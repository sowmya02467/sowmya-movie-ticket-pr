import {React,useEffect, useState } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"
import { Row,Col, Button } from "react-bootstrap"


const IMAGE_API='https://image.tmdb.org/t/p/w500'



const TIMINGS=['10:30 AM',"12:00 PM","3:30 PM","9:00 PM"]

const Movie = () => {

    
    const location=useLocation()
    const {title,overview,poster_path}=location.state
    const navigate=useNavigate()
    const [latLng,setLatLng]=useState({})
    const[theatres,setTheatres]=useState([])

    useEffect(()=>{
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position)=>{
               setLatLng({
                    lat:position.coords.latitude,
                    lng:position.coords.longitude
                })
            })
        }
    },[]);

    useEffect(()=>{
       if(Object.keys(latLng).length>0){
        
    
      const geoAPI=`https://api.geoapify.com/v2/places?categories=entertainment&filter=place:513d88ae554ca5534059371e67118a6b3140f00103f901ffcbf0ae00000000920308426f64757070616c&limit=20&apiKey=aed055fbddf9499ab23d570a8dcb6acd`
      
      axios.get(geoAPI).then(res=>{
        const featuresArray=res.data.features;
        const names=[];
        featuresArray.map((feature)=>names.push(feature.properties.name))
        setTheatres(names)

      } 
        
    )}
    
    },[latLng]);


    


      
        

    
    
    
    return(
        <div>
            <Row>
                <Col>
                <div style={{padding:70}}>
                   <img style={{borderRadius:8,marginBottom:24}} src={IMAGE_API+poster_path} height={400} width={400}></img>
                     <h4>{title}</h4>
                
                    <div>
                    {overview}
                    </div>
                </div>
                </Col>
                <Col>
                   <div>
                   {theatres.map((theatre,index)=>{
                    return(
                        <div key={index} style={{marginBottom:20}} >
                            <div style={{marginBottom:20}}>
                                <h5>{theatre}</h5>
                               </div>
                               {TIMINGS.map((time)=>{
                                return<Button onClick={()=>{navigate('/select',{state:{title:title}})}} key={time} style={{marginRight:7}}>{time}</Button>
                               })} 
                        </div>
                    )
                   })}
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Movie