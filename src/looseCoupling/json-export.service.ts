import { IExportPostsService } from "./IExportPostsService";
import { IPost } from "./IPost";

export class JSONExportService implements IExportPostsService {
  export(posts: IPost[]): string {
    return JSON.stringify(posts);
  }
}
