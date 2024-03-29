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

    // Show the note titles as proof our bridge works
    ComponentRelayManager.get().streamContextItem((item) => {
      this.setState({note: item});
    });
  }

  handleCreateDailyNote() {
    console.log('do some creatin..');
    ComponentRelayManager.get().createDailyNote();
    console.log('and.... done!');
  }

  render() {
    return (
      <div>
        <p>Component is ready.</p>
      {this.state.note && 
        <p>Note title: <strong>{this.state.note.content.title}</strong></p>
      }
        <button onClick={this.handleCreateDailyNote}>
          Create daily note
        </button>
      </div>
    )
  }

}
