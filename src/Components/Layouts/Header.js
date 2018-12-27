import React from "react"
import { AppBar, Toolbar, Typography } from "material-ui"
import Create from "../Exercises/Dialogs/Create"

export default ({ muscles, onExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        component="h2"
        variant="headline"
        color="inherit"
        style={{ flex: 1 }}
      >
        Fitness App
      </Typography>
      <Create muscles={muscles} onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>
)
