import { StastsTracker } from "./singelton";
export const execTest = () => {
  let tracker = StastsTracker.instance;
  tracker.buttonClicks++;
  tracker.facebookShares++;
  tracker.twitterShares++;
  tracker.widgetViews++;
  console.log(`button clickes :${tracker.buttonClicks}`);
  console.log(`button facebookShares :${tracker.facebookShares}`);
  console.log(`button twitteorShares :${tracker.twitterShares}`);
  console.log(`button widgetViews :${tracker.widgetViews}`);
};
