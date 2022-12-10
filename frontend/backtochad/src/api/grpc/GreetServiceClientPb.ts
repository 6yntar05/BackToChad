/**
 * @fileoverview gRPC-Web generated client stub for greet
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.16.3
// source: greet.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as greet_pb from './greet_pb';


export class ChatRoomClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSend = new grpcWeb.MethodDescriptor(
    '/greet.ChatRoom/Send',
    grpcWeb.MethodType.UNARY,
    greet_pb.ChatMessage,
    greet_pb.ChatRequest,
    (request: greet_pb.ChatMessage) => {
      return request.serializeBinary();
    },
    greet_pb.ChatRequest.deserializeBinary
  );

  send(
    request: greet_pb.ChatMessage,
    metadata: grpcWeb.Metadata | null): Promise<greet_pb.ChatRequest>;

  send(
    request: greet_pb.ChatMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: greet_pb.ChatRequest) => void): grpcWeb.ClientReadableStream<greet_pb.ChatRequest>;

  send(
    request: greet_pb.ChatMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: greet_pb.ChatRequest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/greet.ChatRoom/Send',
        request,
        metadata || {},
        this.methodDescriptorSend,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/greet.ChatRoom/Send',
    request,
    metadata || {},
    this.methodDescriptorSend);
  }

  methodDescriptorJoinChat = new grpcWeb.MethodDescriptor(
    '/greet.ChatRoom/JoinChat',
    grpcWeb.MethodType.SERVER_STREAMING,
    greet_pb.ChatRequest,
    greet_pb.ChatMessage,
    (request: greet_pb.ChatRequest) => {
      return request.serializeBinary();
    },
    greet_pb.ChatMessage.deserializeBinary
  );

  joinChat(
    request: greet_pb.ChatRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<greet_pb.ChatMessage> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/greet.ChatRoom/JoinChat',
      request,
      metadata || {},
      this.methodDescriptorJoinChat);
  }

  methodDescriptorCreateChat = new grpcWeb.MethodDescriptor(
    '/greet.ChatRoom/CreateChat',
    grpcWeb.MethodType.UNARY,
    greet_pb.CreateChatRequestDto,
    greet_pb.CreateChatResponseDto,
    (request: greet_pb.CreateChatRequestDto) => {
      return request.serializeBinary();
    },
    greet_pb.CreateChatResponseDto.deserializeBinary
  );

  createChat(
    request: greet_pb.CreateChatRequestDto,
    metadata: grpcWeb.Metadata | null): Promise<greet_pb.CreateChatResponseDto>;

  createChat(
    request: greet_pb.CreateChatRequestDto,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: greet_pb.CreateChatResponseDto) => void): grpcWeb.ClientReadableStream<greet_pb.CreateChatResponseDto>;

  createChat(
    request: greet_pb.CreateChatRequestDto,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: greet_pb.CreateChatResponseDto) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/greet.ChatRoom/CreateChat',
        request,
        metadata || {},
        this.methodDescriptorCreateChat,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/greet.ChatRoom/CreateChat',
    request,
    metadata || {},
    this.methodDescriptorCreateChat);
  }

  methodDescriptorAddUserToChat = new grpcWeb.MethodDescriptor(
    '/greet.ChatRoom/AddUserToChat',
    grpcWeb.MethodType.UNARY,
    greet_pb.AddUserToChatRequestDto,
    greet_pb.AddUserToChatResponseDto,
    (request: greet_pb.AddUserToChatRequestDto) => {
      return request.serializeBinary();
    },
    greet_pb.AddUserToChatResponseDto.deserializeBinary
  );

  addUserToChat(
    request: greet_pb.AddUserToChatRequestDto,
    metadata: grpcWeb.Metadata | null): Promise<greet_pb.AddUserToChatResponseDto>;

  addUserToChat(
    request: greet_pb.AddUserToChatRequestDto,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: greet_pb.AddUserToChatResponseDto) => void): grpcWeb.ClientReadableStream<greet_pb.AddUserToChatResponseDto>;

  addUserToChat(
    request: greet_pb.AddUserToChatRequestDto,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: greet_pb.AddUserToChatResponseDto) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/greet.ChatRoom/AddUserToChat',
        request,
        metadata || {},
        this.methodDescriptorAddUserToChat,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/greet.ChatRoom/AddUserToChat',
    request,
    metadata || {},
    this.methodDescriptorAddUserToChat);
  }

  methodDescriptorGetChats = new grpcWeb.MethodDescriptor(
    '/greet.ChatRoom/GetChats',
    grpcWeb.MethodType.UNARY,
    greet_pb.GetChatsRequestDto,
    greet_pb.GetChatsResponseDto,
    (request: greet_pb.GetChatsRequestDto) => {
      return request.serializeBinary();
    },
    greet_pb.GetChatsResponseDto.deserializeBinary
  );

  getChats(
    request: greet_pb.GetChatsRequestDto,
    metadata: grpcWeb.Metadata | null): Promise<greet_pb.GetChatsResponseDto>;

  getChats(
    request: greet_pb.GetChatsRequestDto,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: greet_pb.GetChatsResponseDto) => void): grpcWeb.ClientReadableStream<greet_pb.GetChatsResponseDto>;

  getChats(
    request: greet_pb.GetChatsRequestDto,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: greet_pb.GetChatsResponseDto) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/greet.ChatRoom/GetChats',
        request,
        metadata || {},
        this.methodDescriptorGetChats,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/greet.ChatRoom/GetChats',
    request,
    metadata || {},
    this.methodDescriptorGetChats);
  }

}
