import React, { useState, useEffect, useRef } from 'react';
import './MyWorks.css';
import Snake from '../../assets/snakeOne.png';
import Dream from '../../assets/dream.png';
import Article from '../../assets/article.png';
import arrow from '../../assets/arrow2.svg';
import closeIcon from '../../assets/close.svg';

const workList = [
  {
    workNo: 0,
    workName: 'Mobile Design',
    w_img: Snake,
    details: "My first game development project. Snake game developed which we played in our childhood",
  },
  {
    workNo: 1,
    workName: 'Web Design',
    w_img: Dream,
    details: "It is a Chat bot application. It is an ongoing project.",
  },
  {
    workNo: 2,
    workName: 'Arduino Project',
    w_img: Article,
    details: "Medium Article related to chat applications",
  },
];

const MyWorks = () => {
  const [indetail, setIndetail] = useState(false);
  const [showIndex, setShowIndex] = useState(0);
  const popupRef = useRef(null);

  const ShowDetails = (workNo) => {
    setIndetail(true);
    setShowIndex(workNo);
  };

  const CloseDetails = () => {
    setIndetail(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      CloseDetails();
    }
  };

  useEffect(() => {
    if (indetail) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [indetail]);

  const listMap = workList.map((work, index) => (
    <img
      src={work.w_img}
      alt={`Work related to ${work.workName}`}
      key={index}
      onClick={() => ShowDetails(work.workNo)}
    />
  ));

  return (
    <>
      <div className="myWork" id="work">
        <div className="myWork-title">
          <h1>My Latest Works</h1>
          <div></div>
        </div>
        <div className="myWork-container">{listMap}</div>
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow} alt="arrow" />
        </div>
        {indetail && (
          <div className="popupTwo" ref={popupRef}>
            <img src={closeIcon} alt="close" className="close-btn" onClick={CloseDetails} />
            <p>{workList[showIndex].details}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MyWorks;
