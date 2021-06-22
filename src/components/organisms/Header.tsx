import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

export interface Props {
  children: React.ReactNode
  title: string
}

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
