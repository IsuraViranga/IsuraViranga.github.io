import React from 'react';
import './MyWorks.css';
import sampleImage from '../../assets/workSample.jpg';
import Snake from '../../assets/snakeOne.png';
import Dream from '../../assets/dream.png';
import Article from '../../assets/article.png';
import arrow from '../../assets/arrow2.svg';

 
const workList=[
    {
        workNo:'01',
        workName:'Mobile Design',
        w_img:Snake
    },
    {
        workNo:'02',
        workName:'Web Design',
        w_img:Dream
    },
    {
        workNo:'03',
        workName:'Arduino Project',
        w_img:Article
    },
   
]

const listMap = workList.map((work,index)=>{
    return <img src={work.w_img} alt='imageWork' key={index}/>
})

const MyWorks = () => {
  return (
    <div className="myWork" id='work'>
     <div className="myWork-title">
        <h1>My Latest Work</h1>
        <div></div>
     </div>
     <div className="myWork-container">
        {listMap}
     </div>
     <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt='arrow' />
     </div>

   </div>
  )
}

export default MyWorks