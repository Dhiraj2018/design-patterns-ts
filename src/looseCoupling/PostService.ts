import * as fs from "fs";
import * as path from "path";
import { IExportPostsService } from "./IExportPostsService";
import { IPost } from "./IPost";
import { IPostService } from "./IPostService";

export class PostService implements IPostService {
  private _fileName: string = path.resolve(__dirname, "../assets/posts.json");
  constructor() {}
  getAll(): Promise<IPost[]> {
    return new Promise((resolve, reject) => {
      fs.readFile(this._fileName, "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  }
  save(post: IPost): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getAll().then((posts) => {
        posts.push(post);
        fs.writeFile(this._fileName, JSON.stringify(posts), (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    });
  }
  export(service: IExportPostsService): Promise<string> {
    return this.getAll().then((posts) => service.export(posts));
  }
}
