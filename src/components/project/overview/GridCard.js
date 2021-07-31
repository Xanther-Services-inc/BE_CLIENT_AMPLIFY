import React from "react";
import { Progress, Tag } from "antd";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Cards } from "../cards/frame/cards-frame";
import { Dropdown } from "../dropdown/dropdown";
// import { textRefactor } from '../../../components/utilities/utilities';
import { ProjectCard } from "../style";

const GridCard = ({ values }) => {
  // const { id, title, status, content, percentage } = value;
  const { id, product_id, status, dueDate, endDate, startDate, emp_assigned } =
    values;
  return (
    <ProjectCard>
      <Cards headless>
        <div className="project-top">
          <div className="project-title">
            <h1>
              <Link to={`/myorders/${id}`}>{product_id}</Link>
              <Tag className="status">{status}</Tag>
            </h1>
          </div>
          <div className="project-timing">
            <div>
              <span>Start Date</span>
              <strong>{startDate}</strong>
            </div>
            {/* <div>
              <span>Deadline</span>
              <strong>{endDate.length !==0 ? endDate : "NA" }</strong>
            </div> */}
          </div>
        </div>
        <div className="project-bottom">
          <div className="project-assignees">
            <p>Assigned To</p>
            <ul>
              <li>
                <p>{emp_assigned ? emp_assigned : "NA"}</p>
              </li>
            </ul>
          </div>
        </div>
      </Cards>
    </ProjectCard>
  );
};

GridCard.propTypes = {
  value: PropTypes.object,
};

export default GridCard;
