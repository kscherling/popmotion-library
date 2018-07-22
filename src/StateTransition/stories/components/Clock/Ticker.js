import React, { Component } from 'react'
import moment from 'moment'

class Clock extends Component {
  timer = null

  state = {
    time: moment()
  }

  tick = () => {
    this.setState({ time: moment() })
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
      seconds: moment(time).format('ss'),
      meridian: moment(time).format('A')
    })
  }
}

export default Clock
