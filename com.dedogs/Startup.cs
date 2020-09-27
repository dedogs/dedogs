using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(dedogs.Startup))]
namespace dedogs
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
