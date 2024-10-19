import { Card } from "antd";
import { PROJECTS_DETAILS } from "../Utils/otherDetails";
import "../resources/css/projects.css";
import { HeartFilled, GithubFilled, CodeFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { List, Typography } from "@mui/material";
const { Meta } = Card;

function Projects() {
  return (
    <>
      <List className="list">
        {PROJECTS_DETAILS.map((data, index) => (
          <Card
          className="listItem"
          key={index}
            style={{ width: 300, background:'transparent', border:'1px solid #a79248'}}
            cover={
              <div className="codeIcon">
                <CodeFilled />
              </div>
            }
            actions={[
              <HeartFilled key="heart"/>,
              <Link to={data.gitLink}>
                <GithubFilled key="git" />
              </Link>,
            ]}
          >
            <Meta
              style={{height:'10vh', fontWeight:400, background:'transparent'}}
              title={<Typography sx={{fontWeight:800}}>
                {data.name}
              </Typography>}
              description={data.description}
            />
          </Card>
        ))}
      </List>
    </>
  );
}

export default Projects;
