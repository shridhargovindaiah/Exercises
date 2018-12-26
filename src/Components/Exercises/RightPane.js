import React from "react"
import { Paper, Typography } from "material-ui"

export default ({
  styles,
  exercise: {
    id,
    title = "Welcome",
    description = " Please select exercise from left pane."
  }
}) => (
  <Paper style={styles.Paper}>
    <Typography variant="display3">{title}</Typography>
    <Typography variant="subheading" style={{ paddingTop: 20 }}>
      {description}
    </Typography>
  </Paper>
)
