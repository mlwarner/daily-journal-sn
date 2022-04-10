import ComponentRelay from '@standardnotes/component-relay';

export default class ComponentRelayManager {

  /* Singleton */
  static instance = null;
  static get() {
    if (this.instance === null) { 
      this.instance = new ComponentRelayManager();
    }
    return this.instance;
  }

  initiateBridge() {
    const permissions = [
      {
        name: 'stream-context-item'
      }
    ];

    this.componentRelay = new ComponentRelay({
      targetWindow: window,
      permissions,
      onReady: () => {
        this.onReady && this.onReady();
      }
    });

    this.componentRelay.streamContextItem((item) => {
      this.note = item;

      if (item.isMetadataUpdate) {
        return;
      }
    });
  }
}
