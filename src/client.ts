import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import * as path from 'path'

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  oneofs: true,
}

const packageDefinition = protoLoader.loadSync(path.join(__dirname, 'news.proto'), options)
const NewsService = grpc.loadPackageDefinition(packageDefinition).NewsService as any

const client = new NewsService(
  'localhost:50051',
  grpc.credentials.createInsecure()
)

export { client }