import * as jspb from 'google-protobuf'



export class ChatMessage extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ChatMessage;

  getIdChat(): string;
  setIdChat(value: string): ChatMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessage;
  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
  export type AsObject = {
    message: string,
    idChat: string,
  }
}

export class ChatRequest extends jspb.Message {
  getChatid(): string;
  setChatid(value: string): ChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChatRequest): ChatRequest.AsObject;
  static serializeBinaryToWriter(message: ChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatRequest;
  static deserializeBinaryFromReader(message: ChatRequest, reader: jspb.BinaryReader): ChatRequest;
}

export namespace ChatRequest {
  export type AsObject = {
    chatid: string,
  }
}

export class MessageDto extends jspb.Message {
  getId(): string;
  setId(value: string): MessageDto;

  getCreatedat(): string;
  setCreatedat(value: string): MessageDto;

  getChatid(): string;
  setChatid(value: string): MessageDto;

  getAuthorid(): string;
  setAuthorid(value: string): MessageDto;

  getTextbody(): string;
  setTextbody(value: string): MessageDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageDto.AsObject;
  static toObject(includeInstance: boolean, msg: MessageDto): MessageDto.AsObject;
  static serializeBinaryToWriter(message: MessageDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageDto;
  static deserializeBinaryFromReader(message: MessageDto, reader: jspb.BinaryReader): MessageDto;
}

export namespace MessageDto {
  export type AsObject = {
    id: string,
    createdat: string,
    chatid: string,
    authorid: string,
    textbody: string,
  }
}

export class CreateChatRequestDto extends jspb.Message {
  getName(): string;
  setName(value: string): CreateChatRequestDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatRequestDto.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatRequestDto): CreateChatRequestDto.AsObject;
  static serializeBinaryToWriter(message: CreateChatRequestDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatRequestDto;
  static deserializeBinaryFromReader(message: CreateChatRequestDto, reader: jspb.BinaryReader): CreateChatRequestDto;
}

export namespace CreateChatRequestDto {
  export type AsObject = {
    name: string,
  }
}

export class CreateChatResponseDto extends jspb.Message {
  getId(): string;
  setId(value: string): CreateChatResponseDto;

  getName(): string;
  setName(value: string): CreateChatResponseDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatResponseDto.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatResponseDto): CreateChatResponseDto.AsObject;
  static serializeBinaryToWriter(message: CreateChatResponseDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatResponseDto;
  static deserializeBinaryFromReader(message: CreateChatResponseDto, reader: jspb.BinaryReader): CreateChatResponseDto;
}

export namespace CreateChatResponseDto {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class AddUserToChatRequestDto extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): AddUserToChatRequestDto;

  getChatid(): string;
  setChatid(value: string): AddUserToChatRequestDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserToChatRequestDto.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserToChatRequestDto): AddUserToChatRequestDto.AsObject;
  static serializeBinaryToWriter(message: AddUserToChatRequestDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserToChatRequestDto;
  static deserializeBinaryFromReader(message: AddUserToChatRequestDto, reader: jspb.BinaryReader): AddUserToChatRequestDto;
}

export namespace AddUserToChatRequestDto {
  export type AsObject = {
    userid: string,
    chatid: string,
  }
}

export class AddUserToChatResponseDto extends jspb.Message {
  getError(): string;
  setError(value: string): AddUserToChatResponseDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserToChatResponseDto.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserToChatResponseDto): AddUserToChatResponseDto.AsObject;
  static serializeBinaryToWriter(message: AddUserToChatResponseDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserToChatResponseDto;
  static deserializeBinaryFromReader(message: AddUserToChatResponseDto, reader: jspb.BinaryReader): AddUserToChatResponseDto;
}

export namespace AddUserToChatResponseDto {
  export type AsObject = {
    error: string,
  }
}

export class ChatDto extends jspb.Message {
  getId(): string;
  setId(value: string): ChatDto;

  getName(): string;
  setName(value: string): ChatDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatDto.AsObject;
  static toObject(includeInstance: boolean, msg: ChatDto): ChatDto.AsObject;
  static serializeBinaryToWriter(message: ChatDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatDto;
  static deserializeBinaryFromReader(message: ChatDto, reader: jspb.BinaryReader): ChatDto;
}

export namespace ChatDto {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class GetChatsRequestDto extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatsRequestDto.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatsRequestDto): GetChatsRequestDto.AsObject;
  static serializeBinaryToWriter(message: GetChatsRequestDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatsRequestDto;
  static deserializeBinaryFromReader(message: GetChatsRequestDto, reader: jspb.BinaryReader): GetChatsRequestDto;
}

export namespace GetChatsRequestDto {
  export type AsObject = {
  }
}

export class GetChatsResponseDto extends jspb.Message {
  getChatsList(): Array<ChatDto>;
  setChatsList(value: Array<ChatDto>): GetChatsResponseDto;
  clearChatsList(): GetChatsResponseDto;
  addChats(value?: ChatDto, index?: number): ChatDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatsResponseDto.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatsResponseDto): GetChatsResponseDto.AsObject;
  static serializeBinaryToWriter(message: GetChatsResponseDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatsResponseDto;
  static deserializeBinaryFromReader(message: GetChatsResponseDto, reader: jspb.BinaryReader): GetChatsResponseDto;
}

export namespace GetChatsResponseDto {
  export type AsObject = {
    chatsList: Array<ChatDto.AsObject>,
  }
}

export class Void extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Void.AsObject;
  static toObject(includeInstance: boolean, msg: Void): Void.AsObject;
  static serializeBinaryToWriter(message: Void, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Void;
  static deserializeBinaryFromReader(message: Void, reader: jspb.BinaryReader): Void;
}

export namespace Void {
  export type AsObject = {
  }
}

