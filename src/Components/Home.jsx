import {React, useEffect, useState } from "react"
import axios from "axios"
import { Card } from "react-bootstrap"
import '../App.css'
import { useNavigate } from "react-router-dom";


const MOVIE_API=  `https://api.themoviedb.org/3/movie/now_playing?api_key=56b021f2b39cceca3d3fb9de2827f635&language=en-US&page=1`;
const IMAGE_API='https://image.tmdb.org/t/p/w500'



const  Home = () =>{

    const [movies,setMovies]=useState([])
    const navigate=useNavigate()
    
    useEffect(()=>{
        axios.get(MOVIE_API).then((response)=>{
            console.log(response.data.results)
            setMovies(response.data.results)
        })

    },[])

    useEffect(()=>{

        const user=localStorage.getItem('userEmail');
        if(!user){
          navigate('/login')
        }

      })

    
    return(


        <div className="cards" style={{padding:20}}>
            {movies.map(movie=>{  

            return(
                <div key={movie.id}>
                <Card onClick={()=>navigate(`/movie/${movie.id}`,{state:movie})} style={{width:'20rem',padding:20,height:'auto',overflow:'hidden',margin:10}}>
                <Card.Img src={IMAGE_API+movie.poster_path}  width={200}></Card.Img>
                <Card.Text>{movie.title}</Card.Text>
                </Card>
                </div>
            )
            })}
            

        </div>


        
    )
}
export default Home;

