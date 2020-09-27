// import { SmartPhone } from "./intefaceSeggregation/interfaceSeggregation";
// let iphone = new SmartPhone();
// iphone.call("john");

// import { PostService, NewsFeed } from "./dependencyInversion/app";

// const newsFeed1 = new NewsFeed(new PostService());
// newsFeed1.show();
import { execApp } from "./design-patterns/singelton/app";
import { execTest } from "./design-patterns/singelton/test";
execApp();
execTest();
