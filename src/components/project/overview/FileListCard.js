import React from "react";
import { Link } from "react-router-dom";
import { Cards } from "../cards/frame/cards-frame";

const FileListCard = ({ doc }) => {
  const download = () => {
    window.location.href = doc;
  };

  return (
    <Cards>
      <div className="file-list">
        <div className="file-list__single d-flex">
          <div className="file-single-info d-flex">
            <div className="file-single-logo">
              <img src={doc} alt="File Logo" height={40} width={80} />
            </div>
            <div className="file-single__content">
              {/* <span className="file-name">PAN</span> */}

              <span className="file-content-action">
                <Link onClick={download}>Download</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Cards>
  );
};

export default FileListCard;
