"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

// Modified from your GitHub repo structure to work with local files
const SONGS_DATA = [
  {
    id: "1",
    title: "Alone",
    artist: "Color Out",
    album: "Single",
    duration: "2:56",
    cover: "/images/WhatsApp Image 2025-04-17 at 13.36.30_7da05a8b.jpg",
    audioSrc: "/songs/1.mp3"
  },
  {
    id: "2",
    title: "Mahiye Jinna Sohna",
    artist: "Darshan Raval",
    album: "Single",
    duration: "3:48",
    cover: "/images/jungkook.jpg",
    audioSrc: "/songs/3.mp3"
  },
  {
    id: "3",
    title: "Pehle Bhi Main",
    artist: "Vishal Mishra",
    album: "Animal",
    duration: "4:12",
    cover: "/images/pink.jpg",
    audioSrc: "/songs/1.mp3"
  },
  {
    id: "4",
    title: "Arjan Vailly",
    artist: "Bhupinder Babbal",
    album: "Animal",
    duration: "3:01",
    cover: "/images/jungkook.jpg",
    audioSrc: "/songs/3.mp3"
  },
  {
    id: "5",
    title: "Ram Siya Ram",
    artist: "Sachet Tandon",
    album: "Adipurush",
    duration: "4:23",
    cover: "/images/WhatsApp Image 2025-04-17 at 13.36.30_7da05a8b.jpg",
    audioSrc: "/music/RamSiyaRam.mp3"
  }
];

// Create playlists based on the songs
const PLAYLISTS = [
  {
    id: "recent",
    title: "Recently Played",
    description: "Your recent tracks",
    cover: "/images/jungkook.jpg",
    songs: [SONGS_DATA[0], SONGS_DATA[1], SONGS_DATA[2]]
  },
  {
    id: "trending",
    title: "Trending Now",
    description: "Popular tracks this week",
    cover: "/images/pink.jpg",
    songs: [SONGS_DATA[3], SONGS_DATA[4], SONGS_DATA[0]]
  },
  {
    id: "recommended",
    title: "Recommended for You",
    description: "Based on your listening",
    cover: "/images/WhatsApp Image 2025-04-17 at 13.36.30_7da05a8b.jpg",
    songs: [SONGS_DATA[2], SONGS_DATA[4], SONGS_DATA[1]]
  }
];

export default function SpotifyPlayerWithExpandableCards() {
  const [active, setActive] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);
  const ref = useRef(null);
  const id = useId();

  // Initialize audio player when component mounts
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    
    // Add event listeners
    audio.addEventListener("ended", handleSongEnd);
    
    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleSongEnd);
    };
  }, []);

  // Handle song end - play next song if available
  const handleSongEnd = () => {
    if (!currentPlaylist || !currentSong) return;
    
    const currentIndex = currentPlaylist.songs.findIndex(song => song.id === currentSong.id);
    if (currentIndex < currentPlaylist.songs.length - 1) {
      playSong(currentPlaylist.songs[currentIndex + 1]);
    } else {
      setIsPlaying(false);
    }
  };

  // Play a song
  const playSong = (song) => {
    if (!song) return;
    
    // If same song is clicked again, toggle play/pause
    if (currentSong && currentSong.id === song.id) {
      togglePlayPause();
      return;
    }
    
    // Load and play new song
    setCurrentSong(song);
    if (audioRef.current) {
      audioRef.current.src = song.audioSrc;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => console.error("Error playing audio:", err));
    }
  };

  // Toggle play/pause for current song
  const togglePlayPause = () => {
    if (!audioRef.current || !currentSong) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  // Handle clicking on a playlist
  const handlePlaylistClick = (playlist) => {
    setCurrentPlaylist(playlist);
    setActive(playlist);
  };

  // Format time in seconds to MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Keyboard event handler
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      } else if (event.key === " " && currentSong) {
        // Space bar to toggle play/pause
        event.preventDefault();
        togglePlayPause();
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, currentSong, isPlaying]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="bg-neutral-900 min-h-screen text-white p-4">
      <div className="max-w-6xl mx-auto">
        <header className="py-4 mb-8">
          <h1 className="text-3xl font-bold flex items-center">
            <svg className="w-8 h-8 text-green-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.5 16.5C16.2239 16.5 15.9478 16.386 15.7364 16.1573C14.1793 14.4712 12.0609 13.5003 9.77455 13.5003H9.75C9.33579 13.5003 9 13.1646 9 12.7503C9 12.3361 9.33579 12.0003 9.75 12.0003H9.77455C12.4869 12.0003 14.9954 13.1246 16.8557 15.1195C17.1236 15.412 17.1461 15.8467 16.9096 16.1646C16.7823 16.375 16.644 16.5 16.5 16.5ZM18.0092 13.4996C17.7331 13.4996 17.457 13.3856 17.2456 13.1569C15.2986 11.0512 12.6135 9.85931 9.77455 9.85931H9.75C9.33579 9.85931 9 9.52352 9 9.10931C9 8.6951 9.33579 8.35931 9.75 8.35931H9.77455C13.0614 8.35931 16.1481 9.73717 18.3648 12.1191C18.6328 12.4116 18.6553 12.8463 18.4187 13.1642C18.2914 13.3746 18.1532 13.4996 18.0092 13.4996ZM19.545 10.1496C19.269 10.1496 18.9928 10.0356 18.7814 9.80683C16.3716 7.21308 13.0921 5.719 9.77455 5.719H9.75C9.33579 5.719 9 5.38321 9 4.969C9 4.55479 9.33579 4.219 9.75 4.219H9.77455C13.5256 4.219 17.2346 5.90491 19.959 8.86907C20.227 9.16159 20.2495 9.59629 20.0129 9.91419C19.8856 10.1246 19.7474 10.1496 19.545 10.1496Z" />
            </svg>
            Spotify Player
          </h1>
        </header>

        {/* Current Song Player */}
        {currentSong && (
          <div className="fixed bottom-0 left-0 right-0 bg-neutral-800 border-t border-neutral-700 p-4 z-10">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={currentSong.cover} 
                  alt={currentSong.title} 
                  className="w-12 h-12 rounded mr-4"
                />
                <div>
                  <h3 className="font-medium">{currentSong.title}</h3>
                  <p className="text-sm text-neutral-400">{currentSong.artist}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={togglePlayPause}
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-black"
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Playlists Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Playlists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PLAYLISTS.map((playlist) => (
              <div 
                key={playlist.id}
                onClick={() => handlePlaylistClick(playlist)}
                className="bg-neutral-800 hover:bg-neutral-700 transition-colors p-4 rounded-lg cursor-pointer"
              >
                <img 
                  src={playlist.cover}
                  alt={playlist.title}
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <h3 className="font-bold">{playlist.title}</h3>
                <p className="text-sm text-neutral-400">{playlist.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All Songs List */}
        <div>
          <h2 className="text-2xl font-bold mb-4">All Songs</h2>
          <div className="bg-neutral-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="border-b border-neutral-700">
                <tr>
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Artist</th>
                  <th className="px-4 py-2 text-left">Album</th>
                  <th className="px-4 py-2 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                {SONGS_DATA.map((song, index) => (
                  <tr 
                    key={song.id}
                    onClick={() => playSong(song)}
                    className={`hover:bg-neutral-700 cursor-pointer ${
                      currentSong && currentSong.id === song.id ? 'bg-neutral-700' : ''
                    }`}
                  >
                    <td className="px-4 py-3 text-neutral-400">{index + 1}</td>
                    <td className="px-4 py-3 flex items-center">
                      <img 
                        src={song.cover} 
                        alt={song.title}
                        className="w-10 h-10 mr-3 rounded"
                      />
                      <span>{song.title}</span>
                    </td>
                    <td className="px-4 py-3 text-neutral-400">{song.artist}</td>
                    <td className="px-4 py-3 text-neutral-400">{song.album}</td>
                    <td className="px-4 py-3 text-neutral-400">{song.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Expandable Card Modal */}
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 h-full w-full z-20" />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-30">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.05 },
                }}
                className="flex absolute top-4 right-4 items-center justify-center bg-neutral-800 rounded-full h-10 w-10"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>

              <motion.div
                layoutId={`card-${active.id}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-800 rounded-xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.id}-${id}`} className="relative">
                  <img
                    width={200}
                    height={200}
                    src={active.cover}
                    alt={active.title}
                    className="w-full h-60 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-800 flex items-end p-6">
                    <div>
                      <motion.h2
                        layoutId={`title-${active.id}-${id}`}
                        className="text-3xl font-bold text-white"
                      >
                        {active.title}
                      </motion.h2>
                      <motion.p
                        layoutId={`description-${active.id}-${id}`}
                        className="text-neutral-300"
                      >
                        {active.description} • {active.songs.length} songs
                      </motion.p>
                    </div>
                  </div>
                </motion.div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={() => {
                        if (active.songs.length > 0) {
                          setCurrentPlaylist(active);
                          playSong(active.songs[0]);
                        }
                      }}
                      className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-3 font-medium flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Play All
                    </button>
                  </div>

                  <div className="space-y-2">
                    {active.songs.map((song, index) => (
                      <div
                        key={song.id}
                        onClick={() => {
                          setCurrentPlaylist(active);
                          playSong(song);
                        }}
                        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                          currentSong && currentSong.id === song.id
                            ? "bg-neutral-700"
                            : "hover:bg-neutral-700"
                        }`}
                      >
                        <div className="flex items-center">
                          <div className="w-6 text-neutral-400 mr-4 text-center">
                            {currentSong && currentSong.id === song.id && isPlaying ? (
                              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            ) : (
                              index + 1
                            )}
                          </div>
                          <img
                            src={song.cover}
                            alt={song.title}
                            className="w-10 h-10 rounded mr-3"
                          />
                          <div>
                            <h4 className={`font-medium ${
                              currentSong && currentSong.id === song.id
                                ? "text-green-500"
                                : "text-white"
                            }`}>
                              {song.title}
                            </h4>
                            <p className="text-sm text-neutral-400">{song.artist}</p>
                          </div>
                        </div>
                        <div className="text-neutral-400">{song.duration}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};