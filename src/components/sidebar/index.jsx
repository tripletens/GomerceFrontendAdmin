import * as React from 'react';
import { Link } from 'react-router-dom';
import { sideBarListArray } from '../../sidebarData'
import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import { alpha } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import {Person2, ManageAccounts} from '@mui/icons-material';
// import { InputBase } from '@mui/material'
import { grey } from '@mui/material/colors';
import "./index.css";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   backgroundColor: theme.palette.common.white,
//   color: 'black',
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar(props) {
  const theme = useTheme();

  return (
    <>
      <Drawer variant="permanent" open={props.open}>
        <DrawerHeader>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sideBarListArray.map((value, index) => {
            return (
              <ListItem key={index} disablePadding sx={{ display: 'block' }}>


                {/* VENDORS,USERS,CATEGORIES,PRODUCTS,ORDERS,REVIEWS,BRANDS */}

                {/* handleOpenVendorsClick, handleOpenUsersClick, handleOpenCategoriesClick
                handleOpenProductsClick, handleOpenOrdersClick, handleOpenReviewsClick, 
                handleOpenBrandsClick */}

                {
                  value.title === 'DASHBOARD' ? <>
                    <Link to={value.url} className="sidebar_links">
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: props.open ? 'initial' : 'center',
                          px: 2.5,
                        }}
                      >
                        <value.component
                          sx={{
                            minWidth: 0,
                            mr: props.open ? 3 : 'auto',
                            justifyContent: 'center',
                            color: grey[500],
                          }}>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </value.component>
                        <ListItemText primary={value.title} sx={{ opacity: props.open ? 1 : 0, color: grey[600] }} />
                      </ListItemButton>
                    </Link>
                  </> : ""
                }

                {value.title === 'DASHBOARD' && <Divider/>}

                {
                  value.title === 'VENDORS' ? <>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: props.open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                      onClick={props.handleOpenVendorsClick}
                    >
                      <value.component
                        sx={{
                          minWidth: 0,
                          mr: props.open ? 3 : 'auto',
                          justifyContent: 'center',
                          color: grey[500],
                        }}>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </value.component>
                      <ListItemText primary={value.title} sx={{ opacity: props.open ? 1 : 0, color: grey[600] }} />

                      {/* {props.openVendors ? (
                        <CloseIcon style={{ width: "32px" }} />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )} */}
                    </ListItemButton>

                    {props.openVendors ? <Collapse in={props.handleOpenVendorsClick} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <Link to={value.url} className="sidebar_links">
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                              <ManageAccounts />
                            </ListItemIcon>
                            <ListItemText primary="View Vendors" />
                          </ListItemButton>
                        </Link>
                      </List>
                      <List component="div" disablePadding>
                        <Link to={value.url2} className="sidebar_links">
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                              <Person2 />
                            </ListItemIcon>
                            <ListItemText primary="Vendor Profile" />
                          </ListItemButton>
                        </Link>
                      </List>
                    </Collapse> : ""}
                  </> : ""
                }
                {
                  value.title === 'USERS' ? <>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: props.open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                      onClick={props.handleOpenUsersClick}
                    >
                      <value.component
                        sx={{
                          minWidth: 0,
                          mr: props.open ? 3 : 'auto',
                          justifyContent: 'center',
                          color: grey[500],
                        }}>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </value.component>
                      <ListItemText primary={value.title} sx={{ opacity: props.open ? 1 : 0, color: grey[600] }} />

                      {/* {props.openUsers ? (
                        <CloseIcon style={{ width: "32px" }} />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )} */}
                    </ListItemButton>

                    {props.openUsers ? <Collapse in={props.handleOpenUsersClick} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <Link to={value.url} className="sidebar_links">
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                              <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="View Users" />
                          </ListItemButton>
                        </Link>
                      </List>
                    </Collapse> : ""}
                  </> : ""
                }

                {value.title === 'USERS' && <Divider/>}
                
                {
                  value.title === 'CATEGORIES' ? <>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: props.open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                      onClick={props.handleOpenCategoriesClick}
                    >
                      <value.component
                        sx={{
                          minWidth: 0,
                          mr: props.open ? 3 : 'auto',
                          justifyContent: 'center',
                          color: grey[500],
                        }}>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </value.component>
                      <ListItemText primary={value.title} sx={{ opacity: props.open ? 1 : 0, color: grey[600] }} />
                    </ListItemButton>

                    {props.openCategories ? <Collapse in={props.handleOpenCategoriesClick} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <Link to={value.url} className="sidebar_links">
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                              <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="View Categories" />
                          </ListItemButton>
                        </Link>
                        
                        <Link to={value.menu1.url} className="sidebar_links">
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                              <StarBorder />
                            </ListItemIcon>
                            
                            <ListItemText primary="Manage Categories" />
                          </ListItemButton>
                        </Link>
                      </List>
                    </Collapse> : ""}
                  </> : ""
                }

                {
                  value.title === 'PRODUCTS' ? <>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: props.open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                      onClick={props.handleOpenProductsClick}
                    >
                      <value.component
                        sx={{
                          minWidth: 0,
                          mr: props.open ? 3 : 'auto',
                          justifyContent: 'center',
                          color: grey[500],
                        }}>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </value.component>
                      <ListItemText primary={value.title} sx={{ opacity: props.open ? 1 : 0, color: grey[600] }} />
                    </ListItemButton>

                    {props.openProducts ? <Collapse in={props.handleOpenProductsClick} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <Link to={value.url} className="sidebar_links">
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                              <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="View Products" />
                          </ListItemButton>
                        </Link>
                      </List>
                    </Collapse> : ""}

                  </> : ""
                }

                {
                  value.title === 'ORDERS' ? <>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: props.open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                      onClick={props.handleOpenOrdersClick}
                    >
                      <value.component
                        sx={{
                          minWidth: 0,
                          mr: props.open ? 3 : 'auto',
                          justifyContent: 'center',
                          color: grey[500],
                        }}>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </value.component>
                      <ListItemText primary={value.title} sx={{ opacity: props.open ? 1 : 0, color: grey[600] }} />
                    </ListItemButton>

                    {props.openOrders ? <Collapse in={props.handleOpenOrdersClick} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <Link to={value.url} className="sidebar_links">
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                              <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="View Orders" />
                          </ListItemButton>
                        </Link>
                      </List>
                    </Collapse> : ""}

                  </> : ""
                }

                {
                  value.title === 'REVIEWS' ? <>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: props.open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                      onClick={props.handleOpenReviewsClick}
                    >
                      <value.component
                        sx={{
                          minWidth: 0,
                          mr: props.open ? 3 : 'auto',
                          justifyContent: 'center',
                          color: grey[500],
                        }}>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </value.component>
                      <ListItemText primary={value.title} sx={{ opacity: props.open ? 1 : 0, color: grey[600] }} />
                    </ListItemButton>

                    {props.openReviews ? <Collapse in={props.handleOpenReviewsClick} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <Link to={value.url} className="sidebar_links">
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                              <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="View Reviews" />
                          </ListItemButton>
                        </Link>
                      </List>
                    </Collapse> : ""}

                  </> : ""
                }

                {
                  value.title === 'BRANDS' ? <>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: props.open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                      onClick={props.handleOpenBrandsClick}
                    >
                      <value.component
                        sx={{
                          minWidth: 0,
                          mr: props.open ? 3 : 'auto',
                          justifyContent: 'center',
                          color: grey[500],
                        }}>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </value.component>
                      <ListItemText primary={value.title} sx={{ opacity: props.open ? 1 : 0, color: grey[600] }} />
                    </ListItemButton>

                    {props.openBrands ? <Collapse in={props.handleOpenBrandsClick} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <Link to={value.url} className="sidebar_links">
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                              <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="View Brands" />
                          </ListItemButton>
                        </Link>
                      </List>
                    </Collapse> : ""}

                  </> : ""
                }


                {/* VENDORS,USERS,CATEGORIES,PRODUCTS,ORDERS,REVIEWS,BRANDS */}
                {/* users  */}
              </ListItem>

            )
          })}
        </List>
      </Drawer>
    </>
  );
}
