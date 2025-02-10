import React from 'react';
import { motion } from 'framer-motion';

const GamePartners = () => {
    const games = [
        { id: 1, name: 'Fantasy League', image: 'https://sprinteronlinegaming.com/jewel365.png' },
        { id: 2, name: 'Casino Royale', image: 'https://sprinteronlinegaming.com/logo.png' },
        { id: 3, name: 'Sports Betting', image: 'https://i.ibb.co/bRmJKwW/logo-text.png' },
        { id: 4, name: 'Poker Stars', image: 'https://sprinteronlinegaming.com/logo%20(4).png' },
        { id: 5, name: 'Slot Mania', image: 'https://sprinteronlinegaming.com/theme-1708455101025-kingexchange.png' },
        { id: 6, name: 'Roulette Pro', image: 'https://sprinteronlinegaming.com/jewl.png' },
    ];

    return (
        <section className="py-20 relative overflow-hidden bg-[#0A0A0A]">
            {/* Background elements remain the same */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20" />
                <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={`line-${i}`}
                            className="absolute h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
                            style={{
                                top: `${i * 15}%`,
                                left: 0,
                                right: 0,
                            }}
                            animate={{
                                opacity: [0.1, 0.3, 0.1],
                                scaleX: [0, 1, 0],
                                transition: {
                                    duration: 5,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                },
                            }}
                        />
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 mb-4 rounded-full bg-purple-500/10 border border-purple-500/20">
                        <span className="text-sm font-medium text-purple-400">Premium Gaming Partners</span>
                    </span>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                    >
                        Our Brand Partners
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {games.map((game, index) => (
                        <motion.div
                            key={game.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/5">
                                <div className="relative aspect-video">
                                    <img
                                        src={game.image}
                                        alt={game.name}
                                        className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                                </div>
                                <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                                        {game.name}
                                    </h3>
                                    <a
                                        href={`https://wa.me/447400497555?text=Request%20ID%20for%20${encodeURIComponent(game.name)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                                    >
                                        Request Game ID
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GamePartners;