﻿namespace CodeForFun.Configurations
{
    public class AppSettings
    {
        public string Issuer { get; set; } = "https://localhost:5003";

        public string ApiName { get; set; } = "codeforfun";

        public int HttpsPort { get; set; } = 5001;
    }
}