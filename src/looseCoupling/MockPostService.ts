import * as path from "path";
import { IExportPostsService } from "./IExportPostsService";
import { IPost } from "./IPost";
import { IPostService } from "./IPostService";

export class MockPostService implements IPostService {
  private _fileName: string = path.resolve(__dirname, "../assets/posts.json");
  posts: IPost[] = [];
  constructor() {
    this.posts = [
      {
        userId: 1,
        id: 7,
        title: "magnam facilis autem",
        body:
          "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
      },
      {
        userId: 2,
        id: 8,
        title: "dolorem dolore est ipsam",
        body:
          "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
      },
      {
        userId: 3,
        id: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        body:
          "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
      },
    ];
  }
  getAll(): Promise<IPost[]> {
    return Promise.resolve(this.posts);
  }
  save(post: IPost): Promise<void> {
    this.posts.push(post);
    return Promise.resolve();
  }
  export(service: IExportPostsService): Promise<string> {
    return this.getAll().then((posts) => service.export(posts));
  }
}
