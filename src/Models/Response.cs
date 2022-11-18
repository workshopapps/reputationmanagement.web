using Newtonsoft.Json;
using System.Net;

namespace src.Models
{
    public class Response<T>
    {
        public T Data { get; set; }
        public int StatusCode { get; set; }
        public bool Status { get; set; }
        public string Message { get; set; } = null!;
        public static Response<T> Fail(string errorMessage, int statusCode = (int)HttpStatusCode.NotFound)
        {
            return new Response<T> { Status = false, Message = errorMessage, StatusCode = statusCode };
        }
        public static Response<T> Success(string successMessage, T data, int statusCode = (int)HttpStatusCode.OK)
        {
            return new Response<T> { Status = true, Message = successMessage, Data = data, StatusCode = statusCode };
        }
        public override string ToString() => JsonConvert.SerializeObject(this);
    }

}
