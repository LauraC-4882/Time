import {db} from "../firebase/index";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  runTransaction,
  serverTimestamp,
  increment,
  getDocs,
  query,
  limit,
  orderBy,
} from "firebase/firestore";

export interface Post {
  id: string;
  ownerId: string;
  ownerDisplayName: string;
  ownerPhotoURL: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  likesCount: number;
  commentsCount: number;
  savedCount: number;
}

export async function createPost(userId: string, content: string): Promise<string> {
  const postRef = await addDoc(collection(db, "posts"), {
    ownerId: userId,
    content,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    likesCount: 0,
    commentsCount: 0,
    savedCount: 0,
  });
  return postRef.id;
}

export async function getPost(postId: string): Promise<Post | null> {
  const postDoc = await getDoc(doc(db, "posts", postId));
  if (!postDoc.exists()) return null;

  const postData = postDoc.data();
  const userDoc = await getDoc(doc(db, "users", postData.ownerId));
  const userData = userDoc.data();

  return {
    id: postDoc.id,
    ...postData,
    ownerDisplayName: userData?.displayName || "Unknown User",
    ownerPhotoURL: userData?.photoURL || "",
    createdAt: postData.createdAt?.toDate(),
    updatedAt: postData.updatedAt?.toDate(),
  } as Post;
}

export async function getPosts(limitCount: number = 10): Promise<Post[]> {
  const postsQuery = query(
    collection(db, "posts"),
    orderBy("createdAt", "desc"),
    limit(limitCount),
  );
  const querySnapshot = await getDocs(postsQuery);
  const posts = await Promise.all(
    querySnapshot.docs.map(async (document) => {
      const postData = document.data();
      const userDoc = await getDoc(doc(db, "users", postData.ownerId));
      const userData = userDoc.data();
      return {
        id: document.id,
        ...postData,
        ownerDisplayName: userData?.displayName || "Unknown User",
        ownerPhotoURL: userData?.photoURL || "",
        createdAt: postData.createdAt?.toDate(),
        updatedAt: postData.updatedAt?.toDate(),
      } as Post;
    }),
  );
  return posts;
}

export async function updatePost(postId: string, content: string): Promise<void> {
  await updateDoc(doc(db, "posts", postId), {
    content,
    updatedAt: serverTimestamp(),
  });
}

export async function deletePost(postId: string): Promise<void> {
  await deleteDoc(doc(db, "posts", postId));
}

export async function addComment(postId: string, userId: string, content: string): Promise<string> {
  const commentRef = await addDoc(collection(db, "comments"), {
    postId,
    ownerId: userId,
    content,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    likesCount: 0,
    repliesCount: 0,
  });

  await updateDoc(doc(db, "posts", postId), {
    commentsCount: increment(1),
  });

  return commentRef.id;
}

export async function likePost(postId: string, userId: string): Promise<void> {
  const likeRef = doc(db, "likes", `${postId}_${userId}`);
  await runTransaction(db, async (transaction) => {
    const likeDoc = await transaction.get(likeRef);
    if (!likeDoc.exists()) {
      transaction.set(likeRef, {
        userId,
        targetId: postId,
        targetType: "post",
        createdAt: serverTimestamp(),
      });
      transaction.update(doc(db, "posts", postId), {
        likesCount: increment(1),
      });
    }
  });
}

export async function unlikePost(postId: string, userId: string): Promise<void> {
  const likeRef = doc(db, "likes", `${postId}_${userId}`);
  await runTransaction(db, async (transaction) => {
    const likeDoc = await transaction.get(likeRef);
    if (likeDoc.exists()) {
      transaction.delete(likeRef);
      transaction.update(doc(db, "posts", postId), {
        likesCount: increment(-1),
      });
    }
  });
}

export async function savePost(postId: string, userId: string): Promise<void> {
  const savedPostRef = doc(db, "savedPosts", `${postId}_${userId}`);
  await runTransaction(db, async (transaction) => {
    const savedPostDoc = await transaction.get(savedPostRef);
    if (!savedPostDoc.exists()) {
      transaction.set(savedPostRef, {
        userId,
        postId,
        createdAt: serverTimestamp(),
      });
      transaction.update(doc(db, "posts", postId), {
        savedCount: increment(1),
      });
    }
  });
}
