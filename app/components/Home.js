import React from 'react';
import ComponentRelayManager from '../lib/ComponentRelayManager';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // We don't need any data to render our UX. Bind after rendering
    ComponentRelayManager.get().initiateBridge();
  }

  handleCreateDailyNote() {
    console.log('do some creatin..');
  }

  render() {
    return (
      <div>
        <p>Component is ready.</p>
        <button onClick={this.handleCreateDailyNote}>
          Create daily note
        </button>
      </div>
    )
  }

}
