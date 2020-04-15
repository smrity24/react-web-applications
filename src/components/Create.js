import React, { Fragment, Component } from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContentText,
  DialogTitle,
  DialogContent,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";

const style = theme => ({
  FormControl: {
    width: 500
  }
});

export default withStyles(style)(
  class Create extends Component {
    state = {
      open: false,
      tutorial: {
        title: "",
        topic: "",
        subjects: ""
      }
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        tutorial: { ...this.state.tutorial, [name]: value }
      });
    };

    handleSubmit = () => {
      const { tutorial } = this.state;
      this.props.onCreate({
        ...tutorial,
        id: tutorial.title.toLocaleLowerCase().replace(/ /g, "-")
      });
      this.setState({
        open: false,
        tutorial: {
          title: "",
          topic: "",
          subjects: ""
        }
      });
    };
    render() {
      const {
          open,
          tutorial: { title, topic, subjects }
        } = this.state,
        { classes, subjects: categories } = this.props;

      return (
        <Fragment>
          <Button
            variant="fab"
            color="secondary"
            mini
            onClick={this.handleToggle}
          >
            <Add />
          </Button>
          <Dialog open={open} onClose={this.handleToggle}>
            <DialogTitle id="form-dialog-title">
              Create a new tutorial
            </DialogTitle>
            <DialogContent>
              <DialogContentText>Please fill out form</DialogContentText>
              <form>
                <TextField
                  value={title}
                  label="Title"
                  onChange={this.handleChange("title")}
                  margin="normal"
                  className={classes.FormControl}
                />
                <br />
                <FormControl className={classes.FormControl}>
                  <InputLabel htmlFor="subjects"> Subjects</InputLabel>
                  <Select
                    value={subjects}
                    onChange={this.handleChange("subjects")}
                  >
                    {categories.map(category => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  multiline
                  rows="4"
                  value={topic}
                  label="Topic"
                  onChange={this.handleChange("topic")}
                  margin="normal"
                  className={classes.FormControl}
                />
                <br />
                <TextField
                  value={subjects}
                  label="Subjects"
                  onChange={this.handleChange("subjects")}
                  margin="normal"
                  className={classes.FormControl}
                />
              </form>
              <DialogActions>
                <Button
                  onClick={this.handleSubmit}
                  color="primary"
                  variant="raised"
                >
                  Create
                </Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </Fragment>
      );
    }
  }
);
