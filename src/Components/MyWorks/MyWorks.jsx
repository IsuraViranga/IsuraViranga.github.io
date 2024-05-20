import React from 'react';
import './MyWorks.css';
import sampleImage from '../../assets/workSample.jpg';
import arrow from '../../assets/arrow2.svg';


const workList=[
    {
        workNo:'01',
        workName:'Mobile Design',
        w_img:sampleImage
    },
    {
        workNo:'02',
        workName:'Web Design',
        w_img:sampleImage
    },
    {
        workNo:'03',
        workName:'Arduino Project',
        w_img:sampleImage
    },
    {
        workNo:'04',
        workName:'UI Design',
        w_img:sampleImage
    },
    {
        workNo:'05',
        workName:'Web Design',
        w_img:sampleImage
    },
    {
        workNo:'06',
        workName:'Mobile Design',
        w_img:sampleImage
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