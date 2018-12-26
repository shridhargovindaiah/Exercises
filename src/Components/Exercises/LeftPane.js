import React, { Fragment } from "react"
import { Paper, Typography, List } from "material-ui"
import { ListItem, ListItemText } from "material-ui/List"

export default ({ styles, category, exercises, onSelect }) => (
  <Paper style={styles.Paper}>
    {exercises.map(([name, exercises]) => {
      if (!category || category === name) {
        return (
          <Fragment>
            <Typography
              style={{ textTransform: "capitalize" }}
              variant="headline"
            >
              {name}
            </Typography>
            {exercises.map(({ id, title }) => (
              <List component="ul">
                <ListItem button onClick={() => onSelect(id)}>
                  <ListItemText primary={title} />
                </ListItem>
              </List>
            ))}
          </Fragment>
        )
      }
      return null
    })}
  </Paper>
)
