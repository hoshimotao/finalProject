import React, { Component } from 'react'
import axios from 'axios'

export default class AddStudent extends Component {
  state = {
    student: '',
    grade: 0,
  }

  addTheStudent = e => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/api/add-student', {
        student: this.state.student,
        grade: this.state.grade,
      })
      .then(result => console.log(result))
  }

  getStudentsName = e => {
    this.setState({
      student: e.target.value,
    })
  }

  addGrade = e => {
    this.setState({
      grade: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.addTheStudent}>
        <label> Student Name: </label>
        <input onChange={this.getStudentsName} type="text" name="student" />
        <input onChange={this.addGrade} type="number" name="grade" />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
