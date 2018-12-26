import React from "react"
import { Grid, Paper } from "material-ui"
import LeftPane from "./LeftPane"
import RightPane from "./RightPane"

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
}

export default ({ exercise, exercises, category, onSelect }) => (
  <Grid container>
    <Grid item sm>
      <LeftPane
        styles={styles}
        category={category}
        exercises={exercises}
        onSelect={onSelect}
      />
    </Grid>
    <Grid item sm>
      <RightPane styles={styles} exercise={exercise} />
    </Grid>
  </Grid>
)
