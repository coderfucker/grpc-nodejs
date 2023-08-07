import * as path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import wrapServerWithReflection from 'grpc-node-server-reflection';
import { ProtoGrpcType } from './types/proto/blog'
import { Post } from './types/proto/Post'
import { Empty } from './types/proto/Empty'
import { PostList } from './types/proto/PostList'
import { PostId } from './types/proto/PostId'

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  oneofs: true
}

const packageDefinition = protoLoader.loadSync(path.join(__dirname, 'blog.proto'), options)

const blogProto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType

const server = wrapServerWithReflection(new grpc.Server())

let posts: Post[] = [
  { id: "1", title: "Note 1", body: "Content 1", postImage: "Post image 1" },
  { id: "2", title: "Note 2", body: "Content 2", postImage: "Post image 2" }
]

server.addService(blogProto.PostService.service, {
  GetAllPost: (call: grpc.ServerUnaryCall<Empty, PostList>, callback: grpc.sendUnaryData<PostList>) => {
    callback(null, { posts })
  },
  AddPost: (call: grpc.ServerUnaryCall<Post, Post>, callback: grpc.sendUnaryData<Post>) => {
    const _post: Post = { id: Date.now().toString(), ...call.request }
    posts.push(_post)
    callback(null, _post)
  },
  DeletePost: (call: grpc.ServerUnaryCall<PostId, Empty>, callback: grpc.sendUnaryData<Empty>) => {
    const postId = call.request.id
    posts = posts.filter(({ id }) => id !== postId)
    callback(null, {})
  },
  EditPost: (call: grpc.ServerUnaryCall<Post, Post>, callback: grpc.sendUnaryData<Post>) => {
    const postId = call.request.id
    const postItem = posts.find(({ id }) => postId === id) as Post
    postItem.body = call.request.body
    postItem.postImage = call.request.postImage
    postItem.title = call.request.title
    callback(null, postItem)
  },
  GetPost: (call: grpc.ServerUnaryCall<PostId, Post>, callback: grpc.sendUnaryData<Post>) => {
    const postId = call.request.id
    const postItem = posts.find(({ id }) => postId === id)
    callback(null, postItem)
  }
})

server.bindAsync(
  '127.0.0.1:50051',
  grpc.ServerCredentials.createInsecure(),
  (_, port) => {
    console.log(`gRPC Server running at 127.0.0.1:${port}`)
    server.start()
  }
)