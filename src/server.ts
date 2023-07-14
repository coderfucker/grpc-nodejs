import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import * as path from 'path'

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  oneofs: true
}

const packageDefinition = protoLoader.loadSync(path.join(__dirname, 'news.proto'), options)

console.log(packageDefinition)
const newsProto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as any

const server = new grpc.Server()

let news = [
  { id: "1", title: "Note 1", body: "Content 1", postImage: "Post image 1" },
  { id: "2", title: "Note 2", body: "Content 2", postImage: "Post image 2" }
]


server.addService(newsProto.NewsService.service, {
  getAllNews: (call: any, callback: (arg0: null, arg1: { news: { id: string; title: string; body: string; postImage: string }[]; message: any }) => void) => {
    callback(null, { news, message: call })
  },
  addNews: (call: { request: any }, callback: (arg0: null, arg1: any) => void) => {
    const _news = { id: Date.now().toString(), ...call.request }
    news.push(_news)
    callback(null, _news)
  },
  deleteNews: (_: { request: { id: any } }, callback: (arg0: null, arg1: {}) => void) => {
    const newsId = _.request.id
    news = news.filter(({ id }) => id !== newsId)
    callback(null, {})
  },
  editNews: (_: { request: { id: any; body: string; postImage: string; title: string } }, callback: (arg0: null, arg1: { id: string; title: string; body: string; postImage: string }) => void) => {
    const newsId = _.request.id
    const newsItem = news.find(({ id }) => newsId === id) as typeof news[number]
    newsItem.body = _.request.body
    newsItem.postImage = _.request.postImage
    newsItem.title = _.request.title
    callback(null, newsItem)
  },
  getNews: (_: { request: { id: any } }, callback: (arg0: null, arg1: { id: string; title: string; body: string; postImage: string } | undefined) => void) => {
    const newsId = _.request.id
    const newsItem = news.find(({ id }) => newsId === id)
    callback(null, newsItem)
  }
})

server.bindAsync(
  '127.0.0.1:50051',
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log(`Server running at http://127.0.0.1:${port}`)
    server.start()
  }
)