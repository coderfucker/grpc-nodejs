
import { client} from './client'

client.GetAllPost({}, (error: any, news: any) => {
  if (error) throw error
  console.log(news)
}, )

client.AddPost({
  title: 'Title news 3',
  body: 'body content 3',
  postImage: 'Image url here'
},
  (error: any, news: any) => {
    if (error) throw error
    console.log('successfully create a news')
  }
)

client.EditPost({
  id: '2',
  body: 'Body content 2 edited',
  postImage: 'image url edited',
  title: 'title for 2 edited'
}, (error: any, news: any) => {
  if (error) throw error
  console.log('successfully edited a news')
})

client.GetAllPost({}, (error: any, news: any) => {
  if (error) throw error
  console.log(news)
})
