import { IPost } from "./IPost";

export interface IExportPostsService {
  export(post: IPost[]): string;
}
