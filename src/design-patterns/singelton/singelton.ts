export class StastsTracker {
  buttonClicks: number = 0;
  facebookShares: number = 0;
  twitterShares: number = 0;
  widgetViews: number = 0;
  constructor() {
    if (StastsTracker._instance) {
      throw new Error("Cannot Instantiate Singleton class using new");
    }
    StastsTracker._instance = this;
  }

  private static _instance: StastsTracker = new StastsTracker();
  public static get instance(): StastsTracker {
    return this._instance;
  }
}
