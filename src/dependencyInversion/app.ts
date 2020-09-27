import * as fs from "fs";
import * as path from "path";
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostService {
  getAll(): Promise<IPost[]>;
  save(post: IPost): Promise<void>;
}

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
}

export class NewsFeed {
  constructor(private _service: IPostService) {}
  show() {
    this._service.getAll().then((posts) => {
      posts.forEach((post) => {
        console.log(`${post.title} -- ${post.body}`);
      });
    });
  }
}
