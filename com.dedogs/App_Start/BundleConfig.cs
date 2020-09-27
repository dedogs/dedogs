using System.Web;
using System.Web.Optimization;
using dedogs.Models;

namespace dedogs
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            var scriptBundle = new ScriptBundle("~/bundles/ckeditor");
            scriptBundle.Orderer = new NonOrderingBundleOrderer();
            scriptBundle.Include("~/Scripts/ckeditor/ckeditor.js");
            scriptBundle.Include("~/Scripts/ckeditor/config.js");
            scriptBundle.Include("~/Scripts/ckeditor/adapters/jquery.js");

            bundles.Add(scriptBundle);

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Content/lib/jquery/jquery.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Content/lib/jquery/jquery.validate.js"));

            bundles.Add(new ScriptBundle("~/bundles/deDogsEditor").Include(
                "~/Scripts/Application/deDogsEditor.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/address").Include(
                "~/Content/js/Address.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Content/lib/bootstrap/js/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/lib/bootstrap/css/bootstrap.css",
                      "~/Content/site.css"
                      ));
        }
    }
}
