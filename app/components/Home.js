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

  render() {
    return (
      <div>
        <p>Component is ready.</p>

        {this.state.note &&
          <div>
            <p>
              Working note title: <strong>{this.state.note.content.title}</strong>
            </p>
            <p>
              Working note content: <strong>{this.state.note.content.text}</strong>
            </p>
          </div>
        }
      </div>
    )
  }

}
