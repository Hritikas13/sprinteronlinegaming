import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';

const VideoPlayer = () => {
  const [videos] = useState([
    {
      name: "Janny Love",
      role: "Professional Gamer",
      quote: "Excellent gaming experience with top security!",
      rating: 5,
      videoFile: "https://res.cloudinary.com/dhaiaaen7/video/upload/v1737787697/WhatsApp_Video_2025-01-25_at_12.14.44_PM_2_emfclc.mp4"
    },
    {
      name: "Sarah Johnson",
      role: "eSports Champion",
      quote: "Outstanding platform reliability.",
      rating: 5,
      videoFile: "https://res.cloudinary.com/dhaiaaen7/video/upload/v1737787714/WhatsApp_Video_2025-01-25_at_12.14.44_PM_gwosib.mp4"
    },
    {
      name: "Michael Chen",
      role: "Verified Player",
      quote: "Best tournament experience ever!",
      rating: 5,
      videoFile: "https://res.cloudinary.com/dhaiaaen7/video/upload/v1737787711/WhatsApp_Video_2025-01-25_at_12.14.48_PM_ckwllv.mp4"
    },
    {
      name: "Emma Davis",
      role: "VIP Member",
      quote: "Exceptional support team.",
      rating: 5,
      videoFile: "https://res.cloudinary.com/dhaiaaen7/video/upload/v1737787711/WhatsApp_Video_2025-01-25_at_12.14.50_PM_ahy0xw.mp4"
    },
    {
      name: "Alex Wilson",
      role: "Pro Gamer",
      quote: "Incredible gaming platform!",
      rating: 5,
      videoFile: "https://res.cloudinary.com/dhaiaaen7/video/upload/v1737787708/WhatsApp_Video_2025-01-25_at_12.14.48_PM_1_q9c83t.mp4"
    },
    {
      name: "Lisa Chang",
      role: "Tournament Winner",
      quote: "Amazing experience overall.",
      rating: 5,
      videoFile: "https://res.cloudinary.com/dhaiaaen7/video/upload/v1737787707/WhatsApp_Video_2025-01-25_at_12.14.47_PM_ftpqps.mp4"
    },
    {
      name: "Davis",
      role: "VIP Member",
      quote: "Exceptional support team.",
      rating: 5,
      videoFile: "https://res.cloudinary.com/dhaiaaen7/video/upload/v1737787701/WhatsApp_Video_2025-01-25_at_12.14.44_PM_1_lojqkc.mp4"
    },

  ]);
  
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current = videos.map(() => React.createRef());
  }, []);

  const VideoCard = ({ video, index }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.7 }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, []);

    useEffect(() => {
      const videoElement = videoRefs.current[index]?.current;
      if (!videoElement) return;

      if (isVisible) {
        videoElement.play().catch(console.error);
      } else {
        videoElement.pause();
      }
    }, [isVisible, index]);

    return (
      <div ref={cardRef} className="relative min-h-screen flex items-center justify-center bg-black snap-start">
        <div className="relative w-full h-full max-w-md mx-auto">
          <video
            ref={videoRefs.current[index]}
            className="w-full h-screen object-cover"
            src={video.videoFile}
            playsInline
            loop
            muted={!isVisible}
          />
          
          <AnimatePresence>
            {isVisible && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 mb-4"
                >
                  {[...Array(video.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="bg-purple-500 rounded-full p-2">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{video.name}</h4>
                    <p className="text-purple-400">{video.role}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="relative"
                >
                  <Quote className="absolute -left-2 -top-2 w-8 h-8 text-purple-500/50" />
                  <p className="text-gray-300 italic pl-8">{video.quote}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  return (
    <section className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} index={index} />
      ))}
    </section>
  );
};

export default VideoPlayer;