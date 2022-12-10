import * as jspb from 'google-protobuf'



export class Message extends jspb.Message {
  getUser(): string;
  setUser(value: string): Message;

  getText(): string;
  setText(value: string): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    user: string,
    text: string,
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

export class LoginRequestDto extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): LoginRequestDto;

  getPassword(): string;
  setPassword(value: string): LoginRequestDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequestDto.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequestDto): LoginRequestDto.AsObject;
  static serializeBinaryToWriter(message: LoginRequestDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequestDto;
  static deserializeBinaryFromReader(message: LoginRequestDto, reader: jspb.BinaryReader): LoginRequestDto;
}

export namespace LoginRequestDto {
  export type AsObject = {
    login: string,
    password: string,
  }
}

export class LoginResponseDto extends jspb.Message {
  getToken(): string;
  setToken(value: string): LoginResponseDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponseDto.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponseDto): LoginResponseDto.AsObject;
  static serializeBinaryToWriter(message: LoginResponseDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponseDto;
  static deserializeBinaryFromReader(message: LoginResponseDto, reader: jspb.BinaryReader): LoginResponseDto;
}

export namespace LoginResponseDto {
  export type AsObject = {
    token: string,
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

