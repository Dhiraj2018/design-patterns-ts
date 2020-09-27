import { StastsTracker } from "./singelton";

export const execApp = () => {
  let tracker = StastsTracker.instance;
  tracker.buttonClicks = 90;
  tracker.facebookShares = 50;
  tracker.twitterShares = 100;
  tracker.widgetViews = 10;

  console.log(`button clickes :${tracker.buttonClicks}`);
  console.log(`button facebookShares :${tracker.facebookShares}`);
  console.log(`button twitteorShares :${tracker.twitterShares}`);
  console.log(`button widgetViews :${tracker.widgetViews}`);
};
