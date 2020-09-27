// import { SmartPhone } from "./interfaceSeggregation";
// let iphone = new SmartPhone();
// iphone.call("john");

import { PostService, NewsFeed } from "./dependencyInversion/app";

const newsFeed1 = new NewsFeed(new PostService());
newsFeed1.show();
