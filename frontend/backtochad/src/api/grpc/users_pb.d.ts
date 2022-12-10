import * as jspb from 'google-protobuf'



export class CreateUserRequestDto extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): CreateUserRequestDto;

  getPassword(): string;
  setPassword(value: string): CreateUserRequestDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequestDto.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequestDto): CreateUserRequestDto.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequestDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequestDto;
  static deserializeBinaryFromReader(message: CreateUserRequestDto, reader: jspb.BinaryReader): CreateUserRequestDto;
}

export namespace CreateUserRequestDto {
  export type AsObject = {
    login: string,
    password: string,
  }
}

export class CreateUserResponseDto extends jspb.Message {
  getId(): string;
  setId(value: string): CreateUserResponseDto;

  getLogin(): string;
  setLogin(value: string): CreateUserResponseDto;

  getErrors(): string;
  setErrors(value: string): CreateUserResponseDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResponseDto.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResponseDto): CreateUserResponseDto.AsObject;
  static serializeBinaryToWriter(message: CreateUserResponseDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResponseDto;
  static deserializeBinaryFromReader(message: CreateUserResponseDto, reader: jspb.BinaryReader): CreateUserResponseDto;
}

export namespace CreateUserResponseDto {
  export type AsObject = {
    id: string,
    login: string,
    errors: string,
  }
}

export class GetUsersRequestDto extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersRequestDto.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersRequestDto): GetUsersRequestDto.AsObject;
  static serializeBinaryToWriter(message: GetUsersRequestDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersRequestDto;
  static deserializeBinaryFromReader(message: GetUsersRequestDto, reader: jspb.BinaryReader): GetUsersRequestDto;
}

export namespace GetUsersRequestDto {
  export type AsObject = {
  }
}

export class GetUsersResponseDto extends jspb.Message {
  getUsersList(): Array<UserDto>;
  setUsersList(value: Array<UserDto>): GetUsersResponseDto;
  clearUsersList(): GetUsersResponseDto;
  addUsers(value?: UserDto, index?: number): UserDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUsersResponseDto.AsObject;
  static toObject(includeInstance: boolean, msg: GetUsersResponseDto): GetUsersResponseDto.AsObject;
  static serializeBinaryToWriter(message: GetUsersResponseDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUsersResponseDto;
  static deserializeBinaryFromReader(message: GetUsersResponseDto, reader: jspb.BinaryReader): GetUsersResponseDto;
}

export namespace GetUsersResponseDto {
  export type AsObject = {
    usersList: Array<UserDto.AsObject>,
  }
}

export class UserDto extends jspb.Message {
  getId(): string;
  setId(value: string): UserDto;

  getLogin(): string;
  setLogin(value: string): UserDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDto.AsObject;
  static toObject(includeInstance: boolean, msg: UserDto): UserDto.AsObject;
  static serializeBinaryToWriter(message: UserDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDto;
  static deserializeBinaryFromReader(message: UserDto, reader: jspb.BinaryReader): UserDto;
}

export namespace UserDto {
  export type AsObject = {
    id: string,
    login: string,
  }
}

