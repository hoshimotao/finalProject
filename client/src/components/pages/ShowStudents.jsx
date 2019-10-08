import React, { Component } from 'react'
import axios from 'axios'
import api from '../../api'

export default class ShowStudents extends Component {
  state = {
    allStudents: [],
  }

  componentDidMount() {
    // axios
    //   .get('http://localhost:5000/api/all-the-students')
    api.getStudents().then(allStudents => {
      console.log(allStudents)
      this.setState({ allStudents: allStudents.allStudentsFromDB })
    })
  }

  showTheStudentsOnThePage = () => {
    return this.state.allStudents.map((eachStudent, i) => {
      return (
        <li key={i}>
          {eachStudent.name} || {eachStudent.grade}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        Students
        {this.showTheStudentsOnThePage()}
      </div>
    )
  }
}
