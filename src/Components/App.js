import React, { Component, Fragment } from "react"
import { Header, Footer } from "./Layouts"
import Exercises from "./Exercises"
import { muscles, exercises } from "../store"

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercises() {
    return Object.entries(
      this.state.exercises.reduce((acc, exercise) => {
        const { muscles } = exercise
        acc[muscles] = acc[muscles] ? [...acc[muscles], exercise] : [exercise]
        return acc
      }, {})
    )
  }

  handleSelect = category => {
    this.setState({ category })
  }

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(exercise => exercise.id === id)
    }))
  }

  render() {
    const exercises = this.getExercises()
    const { category, exercise } = this.state
    return (
      <Fragment>
        <Header />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelect}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleSelect}
        />
      </Fragment>
    )
  }
}
