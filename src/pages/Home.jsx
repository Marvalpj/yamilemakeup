import React from 'react';
import Header from '../components/Header'; 
import Frontcover from '../components/Frontcover';
import Biography from '../components/Biography';
import Course from '../components/Course';
import CourseItem from '../components/CourseItem';


class Home extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            indice: 1,
            data: [
              {
                id: 1,
                name: 'Automaquillaje Express',
                imgCourse: '/images/automaquillaje-express.jpg',
              },
              {
                id: 2,
                name: 'Automaquillaje y Estilismo',
                imgCourse: 'images/automaquillaje-y-estilismo.jpg',
              },
              {
                id: 3,
                name: 'Automaquillaje Kelly Texas',
                imgCourse: 'images/automaquillaje-texas.jpg',
              }
            ]
          };
          
          // this.nextSlide = this.nextSlide.bind(this);
          // this.showSlider = this.showSlider.bind(this);

              
    }
    // nextSlide(n){
          //     showSlider(indice+=n);
          // }






    render(){
        return(
            <>
            <Header/>
            <Frontcover/>
            <Biography/>
            <Course>
                {this.state.data.map(character => (
                    <CourseItem key={character.ref}{...character} />
                ))}
            </Course>
            </>
    )
    }
}

export default Home;