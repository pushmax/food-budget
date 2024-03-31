export default class MediaQueryListener {
  private cancellableListener: () => void;
  private nativeMediaQueryList: MediaQueryList;
  private active: boolean = false;
  matches: boolean = false;

  constructor(targetWindow: Window, query: string, listener: () => void) {
    this.nativeMediaQueryList = targetWindow.matchMedia(query);
    this.active = true;

    // Safari doesn't clear up listener with removeListener
    // when the listener is already waiting in the event queue.
    // Having an active flag to make sure the listener is not called
    // after we removeListener.
    this.cancellableListener = () => {
      this.matches = this.nativeMediaQueryList.matches;

      if (this.active) {
        listener();
      }
    };

    this.nativeMediaQueryList.addListener(this.cancellableListener);
    this.matches = this.nativeMediaQueryList.matches;
  }

  cancel() {
    this.active = false;
    this.nativeMediaQueryList.removeListener(this.cancellableListener);
  }
}