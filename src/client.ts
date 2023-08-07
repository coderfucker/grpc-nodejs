import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import * as path from 'path'
import { PostServiceClient } from './types/proto/PostService'

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  oneofs: true,
}

const packageDefinition = protoLoader.loadSync(path.join(__dirname, 'blog.proto'), options)
const PostService = grpc.loadPackageDefinition(packageDefinition).PostService as grpc.ServiceClientConstructor

const client = new PostService(
  'localhost:50051',
  grpc.credentials.createInsecure()
) as unknown as PostServiceClient

export { client }