import * as React from "react";
import { AppBar, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";


const HomePageNavbar = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  let link;

  if (user?.userInf?.role === 'passenger') {
    if (user?.userInf?.user?.isAdmin) {
      link = '/admindashboard'
    }
    else {
      link = '/userinfo'
    }
  }
  else {

    link = '/driverinfo'
  }
  const pages = [
    {
      link: "/#section1",
      name: "Features",
    },
    {
      link: "/#section2",
      name: "Our Team",
    },
    {
      link: localStorage.length? "/":"/login",
      name: localStorage.length?"Logout":"Login",
    },
  ]
  const settings = [
    {
      link: "/profile",
      name: "Profile",
    },
    {
      link: link,
      name: "Dashboard",
    },
    {
      link: "/",
      name: "Logout",
    },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (e) => {
    if (e.name === "Logout") {
      localStorage.clear();
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "inherit",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <img height={"70px"} src={require("./logo.png")}/>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", maxWidth: "fit" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", mx: "auto" },
              }}
            >
              {pages.map((page) => (
                <Link 
                  href={page.link}
                  sx={{ textDecoration: "none", color: "black" }}
                >
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: "auto",
              ml: "auto",
              display: { xs: "flex", md: "none" },
              flexGrow: 5,
              fontFamily: "inherit",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
          <Link href="/">
            <img height={"70px"} src={require("./logo.png")}/>
          </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 0.75,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#E8E4E4",
                borderRadius: "30px",
                pl: "30px",
                pr: "30px",
                pt: "10px",
                pb: "10px",
              }}
            >
              <Link
                href="/#section1"
                sx={{
                  fontFamily: "inherit",
                  mr: 2,
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Features
              </Link>
              <Link
                href="/#section2"
                sx={{
                  fontFamily: "inherit",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Our Team
              </Link>
            </Box>
          </Box>
          {user? <Box sx={{ flexGrow: 0, marginLeft: 'auto', alignItems:"flex-end" }}>
            <Tooltip title="Open settings">
              <IconButton  onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>{user?.userInf?.user?.name.substring(0,1).toUpperCase()}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link 
                  href={setting.link}
                  sx={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem key={setting}  onClick={() =>
                  {
                    handleCloseUserMenu(setting)
                  }}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>: 
          <Box sx={{ flexGrow: 0, marginLeft: 'auto', alignItems:"flex-end" ,
          display: ['none', 'none', 'flex']}}>
              <Link href="/login" sx={{textDecoration:'none'}}>
                <Button
                  sx={{
                    border: 1,
                    fontFamily: "inherit",
                    fontWeight: "500",
                    backgroundColor: "#8330C2",
                    color: "white",
                    borderRadius: "30px",
                    width: "100px",
                    ":hover": {
                      backgroudColor: "white",
                      color: "#8330C2",
                      border: 1,
                      borderColor: "#8330C2",
                    },
                  }}
                >
                  Login
                </Button>
              </Link>
            </Box>
          }
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HomePageNavbar;
