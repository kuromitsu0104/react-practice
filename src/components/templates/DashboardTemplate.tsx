import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import Header from '../organisms/Header'

const DashboardTemplate = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }
  return (
    <div>
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */}
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          <ListItem component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="TopPage" />
          </ListItem>
          <ListItem component={Link} to="/about">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>
      <Container>
        <h2>DashboardTemplate</h2>
      </Container>
    </div>
  )
}

export default DashboardTemplate
