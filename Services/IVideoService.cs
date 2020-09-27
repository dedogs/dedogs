using Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Services
{
    public interface IVideoService
    {
        IEnumerable<VideoFile> GetVideos { get; set; }
    }
}
