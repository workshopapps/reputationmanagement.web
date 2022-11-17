using System.Net;

namespace src.Dto_s
{
    public class ResponseDto<T>
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public T Data { get; set; }
    }
}
