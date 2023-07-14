// Original file: proto/news.proto


export interface News {
  'id'?: (string);
  'title'?: (string);
  'body'?: (string);
  'postImage'?: (string);
}

export interface News__Output {
  'id'?: (string);
  'title'?: (string);
  'body'?: (string);
  'postImage'?: (string);
}
extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Empty: MessageTypeDefinition
  News: MessageTypeDefinition
  NewsId: MessageTypeDefinition
  NewsList: MessageTypeDefinition
  NewsService: SubtypeConstructor<typeof grpc.Client, _NewsServiceClient> & { service: _NewsServiceDefinition }
}

