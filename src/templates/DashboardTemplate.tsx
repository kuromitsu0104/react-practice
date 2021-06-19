import React from 'react'
import { Link } from 'react-router-dom'
// import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton' // 追加

// const useStyles = makeStyles((theme: Theme) => ({
//   link: {
//     margin: theme.spacing(1, 1.5),
//   },
// }));

export interface DashboardTemplateProps {
  children: React.ReactNode
  title: string
}

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  children,
  title,
}) => {
  // const classes = useStyles();
  // 追加: Drawer の開閉状態（フックを利用）
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  // 追加: Drawer の開閉
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen) // Drawer の開閉状態を反転
  }
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
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
        <h1>{title}</h1>
        <div>{children}</div>
      </Container>
    </div>
  )
}

export default DashboardTemplate
