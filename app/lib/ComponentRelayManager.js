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

  /**
    * Initiate the relay manager to communicate with Standard Notes.
    *
    * https://github.com/standardnotes/snjs/blob/640012e2aa0d956b9a7ffd92a1435e9bd072229f/packages/features/src/Domain/Component/ComponentPermission.ts#L4
    * https://github.com/standardnotes/snjs/blob/abccd1c451a5a5e26f7666df52996a792aca07bf/packages/common/src/Domain/Content/ContentType.ts#L2
    */

  initiateBridge() {
    // TODO: Find a way to import the enums directory from the component relay library. Or from snjs core
    // https://github.com/standardnotes/component-relay/blob/3715d242d40212cc6b909d0988660911b15dcd89/lib/snjsTypes.ts#L9
    const permissions = [
      { // TODO I think this is the only one I really need, but nothing is working!!!
        name: 'create-item',
        content_types: ['Note'],
      },
      {
        name: 'stream-items',
        content_types: ['Note'],
      }
    ];

    this.componentRelay = new ComponentRelay({
      targetWindow: window,
      permissions,
    });
  }

  /**
    * Create a note using the component relay.
    * The format for ItemPayload is quite simple
    * https://github.com/standardnotes/component-relay/blob/3715d242d40212cc6b909d0988660911b15dcd89/lib/componentRelay.ts#L92
    */
  createDailyNote() {
    // TODO: Find a way to import the enums directory from the component relay library. Or from snjs core
    this.componentRelay.createItem({
      content_type: 'Note',
      content: {
        title: 'Ideas',
        text: 'Coming soon.'
      }
    }, (item) => console.log(item));
  }
}
