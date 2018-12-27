import React, { Fragment } from "react"
import { Paper, Typography, List, IconButton } from "material-ui"
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "material-ui/List"
import { Delete } from "material-ui-icons"

export default ({ styles, category, exercises, onSelect, onDelete }) => (
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
                <ListItemSecondaryAction>
                  <IconButton>
                    <Delete onClick={() => onDelete(id)} />
                  </IconButton>
                </ListItemSecondaryAction>
              </List>
            ))}
          </Fragment>
        )
      }
      return null
    })}
  </Paper>
)
