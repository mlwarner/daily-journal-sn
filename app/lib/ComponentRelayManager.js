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
    const initialPermissions = [
      {
        name: 'create-item',
        //content_types: ['*'],
        // content_types: ['Note'],
      },
      {
        name: 'stream-items',
        content_types: ['*']
      },
      {
        name: 'stream-context-item',
      },
    ];

    this.componentRelay = new ComponentRelay({
      targetWindow: window,
      // initialPermissions: initialPermissions,
      options: {
        debug: true
      }
    });
  }

  /**
    * Create a note using the component relay.
    */
  createDailyNote() {
    // TODO: Find a way to import the enums directory from the component relay library. Or from snjs core
    // The format for ItemPayload can be found here
    // https://github.com/standardnotes/component-relay/blob/3715d242d40212cc6b909d0988660911b15dcd89/lib/componentRelay.ts#L92
    const noteItem = {
      content_type: 'Note',
      content: {
        title: 'My note',
        text: 'This is an ordinary Note item that will created from an extension.'
      }
    };

    /*
      * Error is coming from https://github.com/standardnotes/app/blob/main/packages/snjs/lib/Services/ComponentManager/ComponentManager.ts#L341-L378
      * It looks like only 3 specific feature-identifiers can access the `createItem` API
      * https://github.com/standardnotes/app/blob/main/packages/snjs/lib/Services/ComponentManager/Types.ts#L26-L30
      */
    this.componentRelay.createItem(noteItem);
  }

  streamContextItem(callback) {
    this.componentRelay.streamContextItem(callback);
  }
}
