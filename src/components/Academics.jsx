import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, List } from "@mui/material";
import React from "react";
import { LocationOn } from "@mui/icons-material";
import { ACADEMICS_DATA } from "../Utils/otherDetails";
import "../resources/css/academics.css";
import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

function Academics() {
  const [expanded, setExpanded] = React.useState(false);
  const [activeCard, setActiveCard] = React.useState(null);

  const handleExpandClick = (index) => (event, newExpanded) => {
    setActiveCard(index);
    setExpanded(!expanded);
  };
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "transparent",
          display: "flex",
          flexDirection: "column",
          ml:'20px',
          gap: "20px",
        }}
      >
        {ACADEMICS_DATA.map((data, index) => (
          <Card
            className="containerAcademics"
            sx={{
              width: "80%",
              background: "transparent",
              borderRadius: "10px",
              border:'1px solid #a79248'
            }}
            key={index}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ background: "transparent", color: "black" }}>
                  <SchoolIcon />
                </Avatar>
              }
              sx={{ color: "black",  }}
              title={<Typography sx={{fontSize:'20px', fontWeight:800}}>
                {data.name}
              </Typography>}
              
              subheader={data.startDate + " - " + data.EndDate}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {data.course}
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{background:'white'}}>
              <Link to={data.location} style={{textDecoration:'none', color:'black'}} >
                <IconButton
                  aria-label="location"
                  sx={{ color: "black", ml: "7px" }}
                >
                  <LocationOn />
                </IconButton>
                <Typography sx={{textDecoration:'none', display:'inline'}}>
                  {data.address}
                </Typography>
              </Link>
              <ExpandMore
                expand={activeCard === index ? expanded : false}
                onClick={handleExpandClick(index)}
                aria-expanded={activeCard === index ? expanded : false}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse
              in={activeCard === index ? expanded : false}
              timeout="auto"
              unmountOnExit
            >
              <CardContent sx={{background:'white', color:'gray'}}>
                {data.details.map((detail, ind) => (
                  <Typography key={ind} sx={{ marginBottom: 2, color:'gray' }}>
                    {detail.detail}
                  </Typography>
                ))}
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </List>
    </>
  );
}

export default Academics;


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import { ACADEMICS_DATA } from '../Utils/otherDetails';

// const steps = [
//   {
//     label: 'Select campaign settings',
//     description: `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`,
//   },
//   {
//     label: 'Create an ad group',
//     description:
//       'An ad group contains one or more ads which target a shared set of keywords.',
//   },
//   {
//     label: 'Create an ad',
//     description: `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`,
//   },
// ];

// export default function VerticalLinearStepper() {
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <Box sx={{ maxWidth: '80vw' }}>
//       <Stepper activeStep={activeStep} orientation="vertical">
//         {ACADEMICS_DATA.map((data, index) => (
//           <Step key={index}>
//             <StepLabel
//               optional={
//                 index === data.length - 1 ? (
//                   <Typography variant="caption" >Last step</Typography>
//                 ) : null
//               }
//             >
//             {data.name}
//             </StepLabel>
//             <StepContent>
//               <Typography>
//                 {data.details.map((text, ind)=>(
//                   <Typography>
//                     {text.detail}
//                   </Typography>
//                 ))}
//               </Typography>
//               <Box sx={{ mb: 2 }}>
//                 <Button
//                   variant="contained"
//                   onClick={handleNext}
//                   sx={{ mt: 1, mr: 1, background:'#a79248' }}
//                 >
//                   {index === data.length - 1 ? 'Finish' : 'Next'}
//                 </Button>
//                 <Button
//                   disabled={index === 0}
//                   onClick={handleBack}
//                   sx={{ mt: 1, mr: 1 , color:'black'}}
//                 >
//                   Back
//                 </Button>
//               </Box>
//             </StepContent>
//           </Step>
//         ))}
//       </Stepper>
//       {/* {activeStep === ACADEMICS_DATA.length && (
//         <Paper square elevation={0} sx={{ p: 3 }}>
//           <Typography>All steps completed - you&apos;re finished</Typography>
//           <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
//             Reset
//           </Button>
//         </Paper>
//       )} */}
//     </Box>
//   );
// }
