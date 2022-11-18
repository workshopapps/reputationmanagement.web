using Newtonsoft.Json;
using System.Net;

namespace src.Models
{
    public class ResponseDto<T>
    {
        public int StatusCode { get; set; }
        public bool Status { get; set; }
        public string Message { get; set; }
        public T Data { get; set; }
        public static ResponseDto<T> Fail(string errorMessage, int statusCode = (int)HttpStatusCode.NotFound)
        {
            return new ResponseDto<T> { Status = false, Message = errorMessage, StatusCode = statusCode };
        }
        public static ResponseDto<T> Success(string successMessage, T data, int statusCode = (int)HttpStatusCode.OK)
        {
            return new ResponseDto<T> { Status = true, Message = successMessage, Data = data, StatusCode = statusCode };
        }
        public override string ToString() => JsonConvert.SerializeObject(this);
    }
}
