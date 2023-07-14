// Original file: proto/news.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _Empty, Empty__Output as _Empty__Output } from './Empty';
import type { News as _News, News__Output as _News__Output } from './News';
import type { NewsId as _NewsId, NewsId__Output as _NewsId__Output } from './NewsId';
import type { NewsList as _NewsList, NewsList__Output as _NewsList__Output } from './NewsList';

export interface NewsServiceClient extends grpc.Client {
  AddNews(argument: _News, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  AddNews(argument: _News, metadata: grpc.Metadata, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  AddNews(argument: _News, options: grpc.CallOptions, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  AddNews(argument: _News, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  addNews(argument: _News, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  addNews(argument: _News, metadata: grpc.Metadata, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  addNews(argument: _News, options: grpc.CallOptions, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  addNews(argument: _News, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  
  DeleteNews(argument: _NewsId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  DeleteNews(argument: _NewsId, metadata: grpc.Metadata, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  DeleteNews(argument: _NewsId, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  DeleteNews(argument: _NewsId, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  deleteNews(argument: _NewsId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  deleteNews(argument: _NewsId, metadata: grpc.Metadata, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  deleteNews(argument: _NewsId, options: grpc.CallOptions, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  deleteNews(argument: _NewsId, callback: grpc.requestCallback<_Empty__Output>): grpc.ClientUnaryCall;
  
  EditNews(argument: _News, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  EditNews(argument: _News, metadata: grpc.Metadata, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  EditNews(argument: _News, options: grpc.CallOptions, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  EditNews(argument: _News, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  editNews(argument: _News, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  editNews(argument: _News, metadata: grpc.Metadata, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  editNews(argument: _News, options: grpc.CallOptions, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  editNews(argument: _News, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  
  GetAllNews(argument: _Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  GetAllNews(argument: _Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  GetAllNews(argument: _Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  GetAllNews(argument: _Empty, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  getAllNews(argument: _Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  getAllNews(argument: _Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  getAllNews(argument: _Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  getAllNews(argument: _Empty, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  
  GetNews(argument: _NewsId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  GetNews(argument: _NewsId, metadata: grpc.Metadata, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  GetNews(argument: _NewsId, options: grpc.CallOptions, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  GetNews(argument: _NewsId, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  getNews(argument: _NewsId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  getNews(argument: _NewsId, metadata: grpc.Metadata, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  getNews(argument: _NewsId, options: grpc.CallOptions, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  getNews(argument: _NewsId, callback: grpc.requestCallback<_News__Output>): grpc.ClientUnaryCall;
  
}

export interface NewsServiceHandlers extends grpc.UntypedServiceImplementation {
  AddNews: grpc.handleUnaryCall<_News__Output, _News>;
  
  DeleteNews: grpc.handleUnaryCall<_NewsId__Output, _Empty>;
  
  EditNews: grpc.handleUnaryCall<_News__Output, _News>;
  
  GetAllNews: grpc.handleUnaryCall<_Empty__Output, _NewsList>;
  
  GetNews: grpc.handleUnaryCall<_NewsId__Output, _News>;
  
}

export interface NewsServiceDefinition extends grpc.ServiceDefinition {
  AddNews: MethodDefinition<_News, _News, _News__Output, _News__Output>
  DeleteNews: MethodDefinition<_NewsId, _Empty, _NewsId__Output, _Empty__Output>
  EditNews: MethodDefinition<_News, _News, _News__Output, _News__Output>
  GetAllNews: MethodDefinition<_Empty, _NewsList, _Empty__Output, _NewsList__Output>
  GetNews: MethodDefinition<_NewsId, _News, _NewsId__Output, _News__Output>
}
