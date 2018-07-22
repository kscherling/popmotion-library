import React, { Component } from 'react'
import moment from 'moment'

class Clock extends Component {
  timer = null

  state = {
    time: this.getTime()
  }

  getTime() {
    return moment()
  }

  tick = () => {
    this.setState({ time: this.getTime() })
    this.scheduleTick()
  }

  scheduleTick() {
    this.timer = setTimeout(this.tick, 1000)
  }

  componentDidMount() {
    this.scheduleTick()
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { time } = this.state

    return this.props.render({
      hours: moment(time).format('h'),
      minutes: moment(time).format('mm'),
      seconds: moment(time).format('ss')
    })
  }
}

export default Clock
