import {
  FacebookFilled,
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import "../resources/css/socialprofiles.css";
import Typewriter from "typewriter-effect";
import React from "react";
import { Typography } from "@mui/material";

function SocialProfiles() {
  return (
    <div className="socialContainer">
      <Typography
        variant="h2"
        sx={{
          mt:'6rem',
          fontFamily: "Source Code Pro",
          WebkitTextStroke: "0.05rem black",
          color: "#544600",
        }}
      >
        CONNECT WITH ME IN...
        <Typography
          variant="h1"
          sx={{
            color: "#a79248",
            fontFamily: "Source Code Pro",
            fontWeight: "400",
          }}
        >
          <Typewriter
            options={{
              strings: ["LINKEDIN", "GITHUB", "FACEBOOK", "INSTAGRAM"],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
      </Typography>
      <div className="socialMediaIcons">
        <LinkedinFilled className="mediaIcon" />
        <GithubFilled className="mediaIcon" />
        <FacebookFilled className="mediaIcon" />
        <InstagramFilled className="mediaIcon" />
      </div>
    </div>
  );
}

export default SocialProfiles;

// import React from "react";
// import "../resources/css/home.css";
// import { Avatar, Button, Typography } from "@mui/material";
// import { SOCIAL_MEDIA_ICONS, userProfileDefaultData } from "../Utils/Constants";
// import Typewriter from "typewriter-effect";
// import { Link } from "react-router-dom";

// function Home() {
//   const userName = userProfileDefaultData.Name;
//   const dpImage = userProfileDefaultData.Photo;
//   return (
//     < div className="mainContainer">
//       <div className="details">
//         <Typography
//           variant="h3"
//           sx={{
//             fontFamily: "Source Code Pro",
//             WebkitTextStroke: "0.05rem black",
//             color: "#544600",
//           }}
//         >
//           <Typography
//             variant="h1"
//             sx={{
//               color: "#a79248",
//               fontFamily: "Source Code Pro",
//               fontSize: "4.5rem",
//               fontWeight: "400",
//               flex: "1 1 45%",
//             }}
//           >
// CONNECT WITH ME IN...
//           </Typography>
//           <Typography
//             variant="h2"
//             sx={{
//               fontFamily: "Source Code Pro",
//               WebkitTextStroke: "0.05rem black",
//               fontSize: "4.25rem",
//               fontWeight: "400",
//               display: "flex",
//             }}
//           >
//             {/* CONNECT WITH ME IN...&nbsp; */}
//             <Typewriter
//               options={{
//                 strings: ["LINKEDIN", "GITHUB", "FACEBOOK", "INSTAGRAM"],
//                 autoStart: true,
//                 loop: true,
//               }}
//             />
//           </Typography>
//         </Typography>
//       </div>
//         <div className="socialMediaIcons">
//           <LinkedinFilled className="mediaIcon" />
//           <GithubFilled className="mediaIcon" />
//           <FacebookFilled className="mediaIcon" />
//           <InstagramFilled className="mediaIcon" />
//         </div>
//     </div>
//   );
// }

// export default Home;
