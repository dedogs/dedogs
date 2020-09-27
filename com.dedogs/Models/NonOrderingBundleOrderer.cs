using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace dedogs.Models
{
    public class NonOrderingBundleOrderer: IBundleOrderer
    {

        public IEnumerable<BundleFile> OrderFiles(BundleContext context, IEnumerable<BundleFile> files)
        {
            
            return files;
        }

        class NonOrderingBundleOrderer2 : IBundleOrderer
        {
            public IEnumerable<BundleFile> OrderFiles(BundleContext context, IEnumerable<BundleFile> files)
            {
                var count = files.Count();
                var arry = files.ToArray();

                if (count == 0)
                {
                    return arry;
                }

                var j = 1;
                BundleFile hold = arry[0];
                BundleFile temp;

                for (int i = 0; i < count; i++)
                {
                    if (hold.VirtualFile.Name.IndexOf("_View") == -1)
                    {
                        if (j < count) //Not at the end of the array, swap them.
                        {
                            temp = arry[j];
                            arry[j] = hold;
                            hold = temp;
                            j += 1;
                        }
                    }
                    else
                    {
                        arry[0] = hold;
                        break;
                    }
                }

                return arry;
            }
        }
    }
}