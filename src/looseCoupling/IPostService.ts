import { IExportPostsService } from "./IExportPostsService";
import { IPost } from "./IPost";

export interface IPostService {
  getAll(): Promise<IPost[]>;
  save(post: IPost): Promise<void>;
  export(service: IExportPostsService): Promise<string>;
}
