import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import ListItem from "@mui/material/ListItem";
import BarChartIcon from "@mui/icons-material/BarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import SpeedIcon from '@mui/icons-material/Speed';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import WarningAmberIcon from '@mui/icons-material/WarningAmber'; 
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Slider from '@mui/material/Slider';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


const drawerWidth = 240;

export default function App(props) {
  const options = {
    chart: {
      type: "spline"
    },
    title: {
      text: "My chart"
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  };

  const [oppen, setOppen] = React.useState(false);

  const handleClick = () => {
    setOppen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOppen(false);
  };

  const styles = {
    position: 'absolute',
    top: 42,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
    width:'300px',
    height:'400px'
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [openss, setOpenss] = React.useState(false);

  const drawer = (
    <div>
      <div className="sbadmin">
      <SentimentSatisfiedAltIcon 
       />
      SB Admin
      </div>
      <Toolbar />
      <Divider />
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <SpeedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <List>
        <ListItemButton
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Components" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit
        sx={{
          backgroundColor:'white',
          color:'black',
          margin:'10px',
          borderRadius:'5px'
        }}>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Buttons" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Cards" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          onClick={() => {
            setOpens(!opens);
          }}
        >
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Utilities" />
          {opens ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={opens} timeout="auto" unmountOnExit
        sx={{
          backgroundColor:'white',
          color:'black',
          margin:'10px',
          borderRadius:'5px'
        }}>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Colors" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Borders" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Animations" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Others" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider />
      <ListItemButton
        onClick={() => {
          setOpenss(!openss);
        }}
      >
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Pages" />
        {openss ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openss} timeout="auto" unmountOnExit
       sx={{
        backgroundColor:'white',
        color:'black',
        margin:'10px',
        borderRadius:'5px'
      }}>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Login" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Register" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Forget Password" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="404 Pages" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Blank Pagess" />
            </ListItemButton>
        </List>
      </Collapse>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Charts" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <TableChartIcon />
          </ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItemButton>
      </ListItem>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex",
    backgroundColor:"rgb(237, 237, 237)"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:'white'
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <div>
              <input type="search" id="search" placeholder="Search for..."/>
              <button id="btn">
                <SearchIcon />
              </button></div>
              <div className="navbar-icons">
                {/* <NotificationsIcon 
                className="notification"/> */}
                <ClickAwayListener onClickAway={handleClickAway}>
                <Box sx={{ position: 'relative' }}>
                <NotificationsIcon onClick={handleClick}/>
                {oppen ? (
                <Box sx={styles}>
                <div >
                <h4 style={{backgroundColor:'blue',
                color:'white',
                margin:'-8px',
                fontSize:'small',
                textAlign:'center'}}>ALERTS CENTER</h4>
                <h3><ReceiptIcon/><span className="note">Monthly report is ready to <br />download!</span></h3><hr/>
                <h3><MonetizationOnIcon/><span className="note">$290.29 has been deposited <br/>into your account!</span></h3><hr/>
                <h3><WarningAmberIcon /><span className="note">Spending Alert: We've noticed <br/>unusally high spending <br/>for your account.</span></h3>
                </div>
                </Box>
                ) : null}
                </Box>
              </ClickAwayListener>
              <EmailIcon className="email"/>
              <AccountCircleIcon className="avatar"/></div>
              <div className="names">Douglas McGee</div>
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              color:'white',
              backgroundColor:'  rgb(71, 139, 255)'
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
        <div className="dashboard">Dashboard</div>
        <div id='flex-item'>
          <div className="cardss">
        <div><h5 className="erninigs">ERNINIGS (MONTHLY)</h5><br/>
        <h4 className="money"><strong>$40,000</strong></h4>
        </div>
        <div className="calen">
        <CalendarTodayIcon/></div>
        </div>
        
        <div className="cardss">
        <div><h5 className="erninigs">ERNINIGS (ANNUAL)</h5><br/>
        <h4 className="money"><strong>$215,000</strong></h4>
        </div>
        <div className="calen">
        <AttachMoneyIcon/></div>
        </div>

        <div className="cardss">
        <div><h5 className="erninigs">ERNINIGS (MONTHLY)</h5><br/>
        <h4 className="money"><strong>50% <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"  className='slider'/></strong></h4>
        </div>
        <div className="calen">
        <AssignmentIcon/></div>
        </div>

        <div className="cardss">
        <div><h5 className="erninigs">PENDING REQUEST</h5><br/>
        <h4 className="money"><strong>18</strong></h4>
        </div>
        <div className="calen">
        <ChatIcon/></div>
        </div>
        </div>
        <div className="chart">
          <h4 className="chartname">Earnings Overview</h4>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </Box>
    </Box>
  );
}

