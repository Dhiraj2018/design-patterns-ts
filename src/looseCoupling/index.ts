import { NewsFeed, PostService } from "../dependencyInversion/app";
import { JSONExportService } from "./json-export.service";
import { MockPostService } from "./MockPostService";

let mockPostService = new MockPostService();
mockPostService
  .export(new JSONExportService())
  .then((posts) => console.log(posts));
