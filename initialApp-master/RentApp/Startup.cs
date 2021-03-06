﻿using System;
using System.Collections.Generic;
using System.Linq;
using Owin;
using Microsoft.Owin;

[assembly: OwinStartup(typeof(RentApp.Startup))]

namespace RentApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            app.MapSignalR();
        }
    }
}
