
using Entities;
using System.Collections.Generic;

namespace Services
{
    public class VideoService : IVideoService
    {
        public IEnumerable<VideoFile> GetVideos { get; set; }
    }
}
