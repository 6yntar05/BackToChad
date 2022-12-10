FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS backend-build
WORKDIR /src
COPY Mpp.App.csproj ./ 
RUN dotnet restore "GrpcService.csproj"
COPY . .
RUN dotnet build "GrpcService.csproj" -c Release -o /app/build

FROM backend-build AS publish
RUN dotnet publish "GrpcService.csproj" -c Release -o /app/publish

FROM node:18-alpine AS frontendBuild
RUN corepack enable
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY ./../../Frontend/backtochad/package.json ./
COPY ./../../Frontend/backtochad/package-lock.json ./package-lock.json
USER node
RUN yarn install
COPY --chown=node:node ../../Frontend/backtochad/* ./
RUN yarn build


FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=frontendBuild /home/node/app/build ./wwwroot
ENTRYPOINT ["dotnet", "GrpcService.dll"]
