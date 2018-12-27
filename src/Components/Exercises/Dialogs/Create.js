import React, { Component, Fragment } from "react"
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "material-ui"
import { withStyles } from "material-ui"
import { Add } from "material-ui-icons"

const styles = theme => ({
  FormControl: {
    width: 500
  }
})

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      exercises: {
        title: "",
        description: "",
        muscles: ""
      }
    }

    handleClose = () => {
      this.setState({ open: !this.state.open })
    }

    handleChange = e => {
      this.setState({
        exercises: {
          ...this.state.exercises,
          [e.target.name]: e.target.value
        }
      })
    }

    handleSubmit = () => {
      const { exercises } = this.state
      this.props.onCreate({
        ...exercises,
        id: Date.now()
      })
      this.setState({
        exercises: {
          title: "",
          description: "",
          muscles: ""
        },
        open: false
      })
    }

    render() {
      const {
        open,
        exercises: { title, description, muscles }
      } = this.state
      const { muscles: category, classes } = this.props
      return (
        <Fragment>
          <Button mini variant="fab" color="inherit" onClick={this.handleClose}>
            <Add />
          </Button>
          <Dialog open={open} onClose={this.handleClose}>
            <DialogTitle id="form-dialog-title">Create</DialogTitle>
            <DialogContent>
              <DialogContentText>Please add exercises here.</DialogContentText>
              <form>
                <TextField
                  name="title"
                  label="Title"
                  value={title}
                  onChange={this.handleChange}
                  margin="normal"
                  className={classes.FormControl}
                />
                <br />
                <FormControl className={classes.FormControl}>
                  <InputLabel htmlFor="muscle">Muscles</InputLabel>
                  <Select
                    value={muscles}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "muscles",
                      id: "muscles"
                    }}
                  >
                    {category.map(muscle => (
                      <MenuItem value={muscle}>{muscle}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
                <TextField
                  name="description"
                  label="Description"
                  multiline
                  rowsMax="4"
                  value={description}
                  onChange={this.handleChange}
                  margin="normal"
                  className={classes.FormControl}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={this.handleSubmit}
                variant="raised"
                color="primary"
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      )
    }
  }
)
