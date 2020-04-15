import React, { Component, Fragment } from "react";
import Appbar from "./components/Appbar";
import Grid from "./components/Grid";
import Toggle from "./components/Toggle";
import { subjects, tutorials } from "./store";

export class App extends Component {
  state = {
    tutorials,
    tutorial: {}
  };
  getTutorialsBySubjects() {
    return Object.entries(
      this.state.tutorials.reduce((tutorials, tutorial) => {
        const { subjects } = tutorial;
        tutorials[subjects] = tutorials[subjects]
          ? [...tutorials[subjects], tutorial]
          : [tutorial];

        return tutorials;
      }, {})
    );
  }

  handleCategory = category => {
    this.setState({
      category
    });
  };

  handleSelect = id => {
    this.setState(({ tutorials }) => ({
      tutorial: tutorials.find(tu => tu.id === id)
    }));
  };
  handleTutorialCreate = tutorial => {
    this.setState(({ tutorials }) => ({
      tutorials: [...tutorials, tutorial]
    }));
  };
  render() {
    const { category, tutorial } = this.state;
    const tutorials = this.getTutorialsBySubjects();
    return (
      <Fragment>
        <Appbar
          subjects={subjects}
          onTutorialCreate={this.handleTutorialCreate}
        />

        <Toggle  subjects={subjects}
          category={category}
          onSelect={this.handleCategory}
        />
        <Grid
          tutorial={tutorial}
          tutorials={tutorials}
          category={category}
          onSelect={this.handleSelect}
        />
      </Fragment>
    );
  }
}

export default App;
