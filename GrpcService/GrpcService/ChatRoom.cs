using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;

namespace GrpcService.Server
{
    public class ChatRoom
    {
        private ConcurrentDictionary<string, IServerStreamWriter<Message>> users = new ConcurrentDictionary<string, IServerStreamWriter<Message>>();
        public void Join(string name, IServerStreamWriter<Message> resposne) => users.TryAdd(name, resposne); //Добавить пользователя 
        public void Remove(string name) => users.TryRemove(name, out var s);//Удаление пользователя

        public async Task BroadcastMessangeAsync(Message message) => await BroadcastMessages(message);//Асихроно показывать сообщения

        
        private async Task BroadcastMessages(Message message)
        {
            foreach (var user in users.Where(x => x.Key != message.User))
            {
                var item = await SendMessageToSubscriber(user, message);
                if (item != null)
                {
                    Remove(item?.Key);
                };
            }
        }

        private async Task<Nullable<KeyValuePair<string, IServerStreamWriter<Message>>>> SendMessageToSubscriber(KeyValuePair<string, IServerStreamWriter<Message>> user, Message message)
        {
            try
            {
                await user.Value.WriteAsync(message);
                return null;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return user;
            }
        }

    }
}
