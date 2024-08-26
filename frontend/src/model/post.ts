interface Post {
  id: string;
  ownerId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  likesCount: number;
  commentsCount: number;
  savedCount: number;
}
interface Comment {
  id: string;
  postId: string;
  ownerId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  likesCount: number;
  repliesCount: number;
}
interface Like {
  id: string;
  userId: string;
  targetId: string;
  targetType: "post" | "comment";
  createdAt: Date;
}

interface SavedPost {
  id: string;
  userId: string;
  postId: string;
  createdAt: Date;
}
