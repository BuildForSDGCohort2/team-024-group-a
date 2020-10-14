import React from "react";
import "./ratings.css";

import { Rate, Carousel } from "antd";

const contentStyle = {
  height: "100vh",
  color: "#f2f2f2",
  textAlign: "center",
  background: "#1e90ff",
};

const Ratings = () => {
  return (
    <Carousel autoplay>
      <div>
        <div style={contentStyle}>
          <img
            alt="personal avartar"
            className="margin-bottom"
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <br />
          <Rate disabled defaultValue={2} />

          <blockquote className="comments">
            <p>
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-
            </p>
            <footer>
              <cite>- John Doe</cite>
            </footer>
          </blockquote>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            alt="personal avartar"
            className="margin-bottom"
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <br />
          <Rate disabled defaultValue={3} />

          <blockquote className="comments">
            <p>
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-
            </p>
            <footer>
              <cite>- Jane Doe</cite>
            </footer>
          </blockquote>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            alt="personal avartar"
            className="margin-bottom"
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <br />
          <Rate disabled defaultValue={1} />

          <blockquote className="comments">
            <p>
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-
            </p>
            <footer>
              <cite>- Jean Doe</cite>
            </footer>
          </blockquote>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            alt="personal avartar"
            className="margin-bottom"
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <br />
          <Rate disabled defaultValue={5} />

          <blockquote className="comments">
            <p>
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-
            </p>
            <footer>
              <cite>- Jonathan Doe</cite>
            </footer>
          </blockquote>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            alt="personal avartar"
            className="margin-bottom"
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <br />
          <Rate disabled defaultValue={4} />

          <blockquote className="comments">
            <p>
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-
            </p>
            <footer>
              <cite>- Janelle Doe</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </Carousel>
  );
};

export default Ratings;
