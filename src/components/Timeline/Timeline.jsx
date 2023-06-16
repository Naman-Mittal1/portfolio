import React from "react";
import {  VerticalTimeline,   VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase as WorkIcon } from 'react-icons/fa';
import { FaSchool as SchoolIcon } from 'react-icons/fa';
import { FaCode as CodeIcon } from 'react-icons/fa';
import { FaUsers as GroupIcon } from 'react-icons/fa';

import './Timeline.css'

const Timeline = () => {
  return (
    <>
    <div className="bg-primary">
      <p className="base-text sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        Education and
      </p>
      <h2 className="experience-text text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Work Experience.
      </h2>
    </div>
    
    <VerticalTimeline>

    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="May 2023 - present"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<GroupIcon />}
      >
        <h3 className="vertical-timeline-element-title">Chitzy - A Chat Application</h3>
        <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
        <p>
          Building a chat application that helps user connect to their contacts and also random people. and an application that includes unique features like Special Event Planner, Virtual Gifts, Chatbot Assistance and many more premium features.   
        </p>
      </VerticalTimelineElement>  

    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="March 2023"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<CodeIcon />}
      >
        <h3 className="vertical-timeline-element-title">Rajasthan IT Hackathon</h3>
        <h4 className="vertical-timeline-element-subtitle">Jaipur, Rajasthan</h4>
        <p>
          Participated in Rajasthan IT Day Hackathon, and build a solution for reducing the food wastage by creating an application to minimize food wastage.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="Nov 2022 - Apr 2023"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Developer Intern at MetaBlock Technologies</h3>
        <h4 className="vertical-timeline-element-subtitle">Jaipur, Rajasthan</h4>
        <p>
        Worked as an Intern for 6 months, and Managed, Designed & Developed a complete responsive company's website using HTML, CSS, Javascript and JQuery.
        </p>
      </VerticalTimelineElement>  

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="Oct 2022"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<CodeIcon />}
      >
        <h3 className="vertical-timeline-element-title">Code Red 2.0 - VGU Hackathon</h3>
        <h4 className="vertical-timeline-element-subtitle">Jaipur, Rajasthan</h4>
        <p>
          Participated in 72 Hours Hackathon, and built a solution of Low Productivity and lack of visibility in supply chain for farmers.
        </p>
      </VerticalTimelineElement> 


      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="2020 - present"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Swami Keshvanand Institute of Technology, Management and Gramothan</h3>
        <h4 className="vertical-timeline-element-subtitle">Jaipur, Rajasthan</h4>
        <p>
        Pursuing Bachleor's of Technology in Computer Science with an aggregate of 9.55 CGPA
        </p>
      </VerticalTimelineElement> 
      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(13 55 76)", color: "#fffeee" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(13 55 76)" }}
        date="2014 - 2020"
        iconStyle={{ background: "#081b29", color: "#f8efef" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">KMD Public Sr. Sec. School</h3>
        <h4 className="vertical-timeline-element-subtitle">Jaipur, Rajasthan</h4>
        <p>
        Finished secondary and senior secondary education
        </p>
      </VerticalTimelineElement> 

      {/* <VerticalTimelineElement
        iconStyle={{ background: "lightgray", color: "#fff" }}
        icon={<StarIcon />}
      /> */}
    </VerticalTimeline>
    </>
  );
};

export default Timeline;
