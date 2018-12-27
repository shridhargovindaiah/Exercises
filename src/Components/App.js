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
    const initialExercise = muscles.reduce(
      (acc, muscle) => ({
        ...acc,
        [muscle]: []
      }),
      {}
    )
    return Object.entries(
      this.state.exercises.reduce((acc, exercise) => {
        const { muscles } = exercise
        acc[muscles] = [...acc[muscles], exercise]
        return acc
      }, initialExercise)
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

  handleCreateExercise = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }))
  }

  handleDeleteExercise = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(exercise => exercise.id !== id)
    }))
  }

  render() {
    const exercises = this.getExercises()
    const { category, exercise } = this.state
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleCreateExercise}
        />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleDeleteExercise}
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
