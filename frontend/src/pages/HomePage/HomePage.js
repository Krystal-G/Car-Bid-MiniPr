import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomePageNavbar from "./HomePageNavbar";
import SocialMediaComponent from "./SocialMediaIcons";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import AddRoadOutlinedIcon from "@mui/icons-material/AddRoadOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import Avatar from "@mui/material/Avatar";
import { Link } from "@mui/material";
const features = [
  {
    componenet: (
      <CorporateFareOutlinedIcon
        sx={{
          fontSize: { xs: "20px", sm: "40px", md: "50px" },
          mr: "1rem",
        }}
      />
    ),
    link: "/corpac",
    name: "Corporate Accounts",
  },
  {
    componenet: (
      <AddRoadOutlinedIcon
        sx={{
          fontSize: { xs: "20px", sm: "40px", md: "50px" },
          mr: "1rem",
        }}
      />
    ),
    link: "/",
    name: "Road Side Assistance",
  },
  {
    componenet: (
      <Groups2OutlinedIcon
        sx={{
          fontSize: { xs: "20px", sm: "40px", md: "50px" },
          mr: "1rem",
        }}
      />
    ),
    link: "/",
    name: "Group Rides",
  },
];
const HomePage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box>
        <HomePageNavbar />
      </Box>
      <Box
        sx={{
          mt: "10px",
          mx: "30px",
          borderRadius: "50px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            mt: "2px",
            fontFamily: "revert",
            fontWeight: "400",
            fontSize: { xs: "30px", md: "70px", sm: "50px" },
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          "Your Commute, Our Priority ,
          <br />
          <Typography
            sx={{
              mt: "2px",
              fontFamily: "revert",
              fontWeight: "300",
              fontSize: { xs: "30px", md: "70px", sm: "50px" },
              textAlign: "center",
              lineHeight: 1.2,
              color: "#8330C2",
            }}
          >
            The hassle-free way to book cabs
          </Typography>
          for your employees!"
        </Typography>
      </Box>
      <Box
        id="section1"
        sx={{
          mt: "20px",
        }}
      >
        <Box
          sx={{
            mt: "100px",
            fontSize: { xs: "30px", sm: "50px", md: "70px" },
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "black",
            fontFamily: "inherit",
            fontWeight: "700",
            fontSize: { xs: "40px", md: "70px" },
          }}
        >
          Features
        </Box>
        <Box
          sx={{
            mt: "100px",
            mx: "auto",
            borderRadius: { xs: "30px", md: "70px" },
            display: "flex",
            height: {xs:"70vh", md:"50vh"},
            backgroundColor: "#F1F6F9",
            fontSize: { xs: "30px", sm: "50px", md: "70px" },
            width: { xs: "100%", md: "100%", sm: "100%" }, // Set width to 100% on small screens and 50% on medium screens
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            // margin: { xs: "20px", md: "30px" },
          }}
        >
          {" "}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {features.map((feature) => (
              <Link href={feature.link} sx={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    border: "2px solid #FFF",
                    borderRadius: "15px",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#FFF",
                    marginTop: "20px",
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
                    maxWidth: { xs: "100%", md: "100%" },
                    margin: { xs: "20px", md: "30px" },
                    borderRadius: { xs: "40px", md: "60px" },
                  }}
                >
                  {feature.componenet}
                  <Typography
                    sx={{
                      color: "black",
                      fontFamily: "inherit",
                      fontWeight: "500",
                      lineHeight: "1.5",
                      // marginLeft: "20px",
                      fontSize: { xs: "20px", sm: "30px", md: "30px" },
                    }}
                  >
                    {feature.name}
                  </Typography>
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
      <Box id="section2" sx={{
      }}>
        <Box
          sx={{
            mt: "200px",
            fontSize: { xs: "30px", sm: "50px", md: "70px" },
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "black",
            fontFamily: "inherit",
            fontWeight: "700",
            fontSize: { xs: "40px", md: "70px" },
          }}
        >
          <Typography
            sx={{
              ml: "auto",
              mr: "auto",
              mb: "80px",
              fontFamily: "inherit",
              fontWeight: "700",
              fontSize: { xs: "40px", md: "70px" },
            }}
          >
            Our Team
          </Typography>
        </Box>
        <Box sx={{
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          flexDirection:"column"
        }}>
          <Box
            sx={{
              borderRadius: "50%",
              overflow: "hidden",
              width: { xs: "150px", md: "350px" },
              maxWidth: { xs: "100%", md: "100%" },
              height: { xs: "150px", md: "350px" },
              mx: { xs: "20px", md: "40px" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Avatar
              sx={{ width: "100%", height: "100%" }}
              alt="Person 1"
              src={require("./ImagesOfGrpMembers/Supervisor.jpeg")}
            />
          </Box>
          <Box sx={{ textAlign: "center", mt: "10px" }}>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontWeight: "400",
                fontSize: { xs: "20px", md: "30px" },
              }}
            >
              Niharika Anand
              <Typography sx={{
                fontFamily: "inherit",
                fontWeight: "400",
                fontSize: { xs: "20px", md: "30px" },
                color:"#8330C2"
              }}>
                Supervisor
              </Typography>
              
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "0px",
            ml: { xs: "10px", md: "20px" },
            mr: { xs: "10px", md: "20px" },
            borderRadius: "40px",
            display: "flex",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              mt: "50px",
            }}
          >
            <Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: { xs: "150px", md: "200px" },
                  maxWidth: { xs: "100%", md: "100%" },
                  height: { xs: "150px", md: "200px" },
                  mx: { xs: "30px", md: "50px" },
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Avatar
                  sx={{ width: "100%", height: "100%" }}
                  alt="Person 1"
                  src={require("./ImagesOfGrpMembers/person2.jpeg")}
                />
              </Box>
              <Box sx={{ textAlign: "center", mt: "10px" }}>
                <Typography
                  sx={{
                    fontFamily: "inherit",
                    fontWeight: "400",
                    fontSize: { xs: "20px", md: "30px" },
                  }}
                >
                  Ayushman Bajpayee
                  <Typography sx={{
                fontFamily: "inherit",
                fontWeight: "400",
                fontSize: { xs: "20px", md: "30px" },
                color:"#8330C2",
                mb:{xs:"50px"},
              }}>
                Team Member
              </Typography>
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: { xs: "150px", md: "200px" },
                  maxWidth: { xs: "100%", md: "100%" },
                  height: { xs: "150px", md: "200px" },
                  mx: { xs: "30px", md: "50px" },
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Avatar
                  sx={{ width: "100%", height: "100%" }}
                  alt="Person 1"
                  src={require("./ImagesOfGrpMembers/person1.jpeg")}
                />
              </Box>
              <Box sx={{ textAlign: "center", mt: "10px" }}>
                <Typography
                  sx={{
                    fontFamily: "inherit",
                    fontWeight: "400",
                    fontSize: { xs: "20px", md: "30px" },
                  }}
                >
                  Gyanendra Gupta
                  <Typography sx={{
                fontFamily: "inherit",
                fontWeight: "400",
                fontSize: { xs: "20px", md: "30px" },
                color:"#8330C2",
                mb:{xs:"50px"},
              }}>
                Team Member
              </Typography>
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: { xs: "150px", md: "200px" },
                  maxWidth: { xs: "100%", md: "100%" },
                  height: { xs: "150px", md: "200px" },
                  mx: { xs: "30px", md: "50px" },
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Avatar
                  sx={{ width: "100%", height: "100%" }}
                  alt="Person 1"
                  src={require("./ImagesOfGrpMembers/person4.jpeg")}
                />
              </Box>
              <Box sx={{ textAlign: "center", mt: "10px" }}>
                <Typography
                  sx={{
                    fontFamily: "inherit",
                    fontWeight: "400",
                    fontSize: { xs: "20px", md: "30px" },
                  }}
                >
                  Jai Mehta
                  <Typography sx={{
                fontFamily: "inherit",
                fontWeight: "400",
                fontSize: { xs: "20px", md: "30px" },
                color:"#8330C2",
                mb:{xs:"50px"},
              }}>
                Team Member
              </Typography>
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: { xs: "150px", md: "200px" },
                  maxWidth: { xs: "100%", md: "100%" },
                  height: { xs: "150px", md: "200px" },
                  mx: { xs: "30px", md: "50px" },
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Avatar
                  sx={{ width: "100%", height: "100%" }}
                  alt="Person 1"
                  src={require("./ImagesOfGrpMembers/person3.jpeg")}
                />
              </Box>
              <Box sx={{ textAlign: "center", mt: "10px" }}>
                <Typography
                  sx={{
                    fontFamily: "inherit",
                    fontWeight: "400",
                    fontSize: { xs: "20px", md: "30px" },
                  }}
                >
                  Manas Agarwal
                  <Typography sx={{
                fontFamily: "inherit",
                fontWeight: "400",
                fontSize: { xs: "20px", md: "30px" },
                color:"#8330C2",
                mb:{xs:"50px"},
              }}>
                Team Member
              </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          mt: { xs: "50px", md: "250px" },
          borderRadius: { xs: "30px", md: "70px" },
          display: "flex",
          backgroundColor: "black",
          height: { xs: "50vh", md: "50vh" },
          alignItems: "center",
          flexDirection: "column",
          mb: { xs: "200px", md: "0px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            mt: "20px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "inherit",
              fontWeight: "700",
              fontSize: { xs: "30px", md: "70px", sm: "50px" },
              ml: "20px",
            }}
          >
            Contact Us
          </Typography>
        </Box>
        <SocialMediaComponent />
      </Box>
    </Box>
  );
};

export default HomePage;