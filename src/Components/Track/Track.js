import React, { Component } from 'react'
import "./Track.css"

export class Track extends Component {
  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-action">-</button>
    } else {
      return <button className="Track-action">+</button>
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          {/* <h3><!-- track name will go here --></h3>
              <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
        </div>
        {/* ToDo: Task 27 */}
        {/* <button class="Track-action"><!-- + or - will go here --></button> */}
        {this.renderAction()};
      </div>
    )
  }
}

export default Track
