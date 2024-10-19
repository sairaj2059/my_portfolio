import defaultImage from "../resources/images/dp_image.png";
import {
  CodeRounded,
  DraftsRounded,
  HomeRounded,
  SchoolRounded,
  ThumbUpAlt,
  ContactPageRounded,
  GitHub,
  Facebook,
  LinkedIn,
} from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from "@mui/icons-material/Call";
export const userProfileDefaultData = {
  Name: "Raj Guragain",
  UserName: "raj_guragain",
  DOB: "01-03-2003",
  Address: " Bangalore",
  EmailID: "raj@gmail.com",
  PhoneNo: "987665432",
  Description: "Sairam",
  Photo: defaultImage,
};

export const IconTitleMap = {
  Home: <HomeRounded className="icon" />,
  Academics: <SchoolRounded className="icon" />,
  Projects: <CodeRounded className="icon" />,
  "Social Profiles": <DraftsRounded className="icon" />,
  Resume: <ContactPageRounded className="icon" />,
  "Contact Us": <CallIcon className="icon" />,
  "All Mail": <MailIcon className="icon" />,
  Trash: <DeleteIcon className="icon" />,
  Spam: <ErrorIcon className="icon" />,
  Subscribers: <ThumbUpAlt className="icon" />,
  GitHub: <GitHub className="icon" />,
  Facebook: <Facebook className="icon" />,
  LinkedIn: <LinkedIn className="icon" />,
};

export const DEFAULT_SIDE_MENU = [
  {
    title: "Home",
    icon: IconTitleMap.Home,
    link: "/home",
  },
  {
    title: "Academics",
    icon: IconTitleMap.Academics,
    link: "/academics",
  },
  {
    title: "Projects",
    icon: IconTitleMap.Projects,
    link: "/projects",
  },
  {
    title: "Social Profiles",
    icon: IconTitleMap["Social Profiles"],
    link: "/social-profile",
  },
  {
    title: "Resume",
    icon: IconTitleMap.Resume,
    link: "/resume",
  },
];

export const SOCIAL_MEDIA_ICONS = [
  {
    icon: IconTitleMap.GitHub,
    link: "https://github.com/sairaj2059",
  },
  {
    icon: IconTitleMap.LinkedIn,
    link: "https://www.linkedin.com/in/sairaj1926/",
  },
  {
    icon: IconTitleMap.Facebook,
    link: "/",
  },
];



export const DEFAULT_DRAWER_FLAG = true;
export const DEFAULT_ACTIVE_PAGE = DEFAULT_SIDE_MENU[0].title;

export const DarkTheme = "dark";
export const LightTheme = "light";
