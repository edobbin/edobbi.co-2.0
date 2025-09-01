import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import data from "./Experiences.json";
import { IoSchool } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import "./Experience.css";
export const Experience = () => {
  return (
    <div className="containerE">
      <VerticalTimeline animate={true} lineColor="white">
        {data
          .sort((a, b) => b.id - a.id)
          .map((item) => {
            if (item.type === "education") {
              return (
                <VerticalTimelineElement
                  key={item.id}
                  icon={<IoSchool size={20} />}
                  iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                  date={`${item.startDate} - ${item.endDate}`}
                >
                  <h3 className="vertical-timeline-element-title">
                    {item.company}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.title}
                  </h4>
                </VerticalTimelineElement>
              );
            } else if (item.type === "work") {
              return (
                <VerticalTimelineElement
                  key={item.id}
                  icon={<MdOutlineWork size={20} />}
                  iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                  date={`${item.startDate} - ${item.endDate}`}
                  dateClassName={"vertical-timeline-element-date"}
                >
                  <h3 className="vertical-timeline-element-title">
                    {item.company}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.title}
                  </h4>
                  <br />
                  <h5 className="vertical-timeline-element-summary">
                    {item.summary}
                  </h5>
                </VerticalTimelineElement>
              );
            }
          })}
      </VerticalTimeline>
    </div>
  );
};
