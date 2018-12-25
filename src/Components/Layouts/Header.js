import React from "react"
import { AppBar, Toolbar, Typography } from "material-ui"

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography component="h2" variant="headline" color="inherit">
        h1. Heading
      </Typography>
    </Toolbar>
  </AppBar>
)
