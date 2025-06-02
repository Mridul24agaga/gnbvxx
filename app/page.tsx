"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Twitter } from "lucide-react"

export default function LandingPage() {
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <AnimatePresence>
      {/* Social Media Bar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-yellow-300/30">
        <div className="max-w-7xl mx-auto flex justify-end px-3 sm:px-4">
          <motion.a
            href="https://x.com/Iamgoatsol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-2 bg-black/40 hover:bg-black/60 text-yellow-300 px-3 sm:px-4 py-2 sm:py-3 my-1 sm:my-2 rounded-full border border-yellow-300/50 hover:border-yellow-300 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="font-bold text-xs sm:text-sm hidden sm:inline">@Iamgoatsol</span>
          </motion.a>
        </div>
      </div>

      <motion.div
        className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 relative overflow-hidden pt-12 sm:pt-16"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section
          className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center py-8 sm:py-12 md:py-16"
          variants={sectionVariants}
        >
          {/* Goat with Car - Top on mobile, Right on desktop */}
          <motion.div
            className="absolute hidden sm:block right-0 bottom-[-30px] sm:bottom-[-40px] md:right-4 md:bottom-[-30px] z-10"
            variants={imageVariants}
            animate={{
              y: [-10, 10, -10],
              rotate: [-2, 2, -2],
            }}
            transition={{
              y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          >
            <Image
              src="/images/goat-car.png"
              alt="Goat with yellow car"
              width={800}
              height={800}
              className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px]"
            />
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="max-w-5xl mx-auto z-20 mb-12 sm:mb-16 md:mb-20 space-y-6 sm:space-y-8 md:space-y-10"
            variants={sectionVariants}
          >
            <motion.h1
              className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-wide drop-shadow-lg px-4"
              style={{
                fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                fontWeight: "900",
                textShadow: "2px 2px 0px rgba(0,0,0,0.3), 4px 4px 0px rgba(0,0,0,0.1)",
                letterSpacing: "0.05em",
              }}
              animate={{
                textShadow: [
                  "2px 2px 0px rgba(0,0,0,0.3), 4px 4px 0px rgba(0,0,0,0.1)",
                  "4px 4px 0px rgba(0,0,0,0.4), 8px 8px 0px rgba(0,0,0,0.2)",
                  "2px 2px 0px rgba(0,0,0,0.3), 4px 4px 0px rgba(0,0,0,0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              {"Dripped in gold. Drenched in SOL. "}
              <motion.span
                className="text-yellow-300"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {"It's GOAT time."}
              </motion.span>
            </motion.h1>
          </motion.div>
        </motion.section>

        {/* Second Section */}
        <motion.section
          className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="p-6 sm:p-8 md:p-10 mx-4 space-y-8 sm:space-y-10 md:space-y-12">
            {/* Goat Portrait */}
            <motion.div
              className="z-20"
              variants={imageVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto relative">
                <motion.div
                  animate={{
                    filter: [
                      "drop-shadow(0 0 20px rgba(255, 255, 0, 0.5))",
                      "drop-shadow(0 0 40px rgba(255, 255, 0, 0.8))",
                      "drop-shadow(0 0 20px rgba(255, 255, 0, 0.5))",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Image
                    src="/images/goat-portrait.png"
                    alt="Cool goat with sunglasses"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-yellow-300 tracking-wide drop-shadow-lg px-4"
              style={{
                fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                fontWeight: "900",
                textShadow: "2px 2px 0px rgba(0,0,0,0.3), 4px 4px 0px rgba(0,0,0,0.1)",
                letterSpacing: "0.05em",
              }}
              variants={sectionVariants}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Enter the GOATverse
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl max-w-6xl mx-auto leading-relaxed font-bold tracking-wide drop-shadow-lg px-4"
              style={{
                fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                fontWeight: "700",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
              variants={sectionVariants}
            >
              A token forged in wealth, style, and unapologetic flex. Join the herd and ride with the one true GOAT of
              web3.
            </motion.p>

            {/* Contract Address */}
            <motion.div
              className="bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-yellow-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto"
              variants={sectionVariants}
              whileHover={{ scale: 1.05, borderColor: "#fbbf24" }}
              transition={{ duration: 0.3 }}
            >
              <p
                className="text-yellow-300 font-mono text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold break-all"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
              >
                CA: 2VwXXqwBpTet2pRHgQHt68REfC3xBfxTF4cbFo2Dpump
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Third Section - Mission */}
        <motion.section
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left Side - Goat Character */}
            <motion.div
              className="flex justify-center lg:justify-start order-2 lg:order-1"
              variants={imageVariants}
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                    rotate: [-1, 1, -1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/goat-luxury.png"
                    alt="Luxury goat with diamonds and money"
                    width={400}
                    height={400}
                    className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:w-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] object-contain drop-shadow-2xl rounded-2xl sm:rounded-3xl"
                  />
                </motion.div>
                {/* Golden glow effect */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-6 sm:h-8 bg-yellow-300 rounded-full blur-xl opacity-60"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 order-1 lg:order-2 px-4 sm:px-6"
              variants={sectionVariants}
            >
              {/* Title */}
              <motion.h2
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-yellow-300 tracking-wide drop-shadow-lg"
                style={{
                  fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                  fontWeight: "900",
                  textShadow: "2px 2px 0px rgba(0,0,0,0.3), 4px 4px 0px rgba(0,0,0,0.1)",
                  letterSpacing: "0.05em",
                }}
                variants={sectionVariants}
              >
                $GOAT's Mission
              </motion.h2>

              {/* Description Paragraphs */}
              <motion.p
                className="text-sm xs:text-base sm:text-lg md:text-xl text-white leading-relaxed font-bold"
                style={{
                  fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                  fontWeight: "700",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                }}
                variants={sectionVariants}
              >
                {"Let's be real. If you made it here, you're not new to this game—and definitely not a normie."}
              </motion.p>

              <motion.p
                className="text-sm xs:text-base sm:text-lg md:text-xl text-white leading-relaxed font-bold"
                style={{
                  fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                  fontWeight: "700",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                }}
                variants={sectionVariants}
              >
                {
                  "We're just like you. Our parents told us to get \"real jobs.\" Our friends are sick of hearing about L1s, memecoins, and NFT floors. And truth is? We still don't know how to explain what we do. But we made it here, and we're not leaving."
                }
              </motion.p>

              <motion.p
                className="text-sm xs:text-base sm:text-lg md:text-xl text-white leading-relaxed font-bold"
                style={{
                  fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                  fontWeight: "700",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                }}
                variants={sectionVariants}
              >
                {
                  "$GOAT is a celebration of that journey. Of flexing through FUD. Of stacking while they laughed. Of building something legendary—with a fat cigar in one hand and a martini in the other."
                }
              </motion.p>

              <motion.p
                className="text-sm xs:text-base sm:text-lg md:text-xl text-white leading-relaxed font-bold"
                style={{
                  fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                  fontWeight: "700",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                }}
                variants={sectionVariants}
              >
                {
                  "We're a collective of creators, degens, artists, and visionaries who knew we had something—and we ran with it."
                }
              </motion.p>

              {/* Carpe Diem */}
              <motion.p
                className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black text-yellow-300 tracking-wide drop-shadow-lg pt-4"
                style={{
                  fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                  fontWeight: "900",
                  textShadow: "2px 2px 0px rgba(0,0,0,0.3), 4px 4px 0px rgba(0,0,0,0.1)",
                  letterSpacing: "0.05em",
                }}
                variants={sectionVariants}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Carpe diem. Stay rich. Stay GOATed.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* How to Buy Section */}
        <motion.section
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
            {/* Title */}
            <motion.h2
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-yellow-300 tracking-wide drop-shadow-lg px-4 text-center"
              style={{
                fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                fontWeight: "900",
                textShadow: "2px 2px 0px rgba(0,0,0,0.3), 4px 4px 0px rgba(0,0,0,0.1)",
                letterSpacing: "0.05em",
              }}
              variants={sectionVariants}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              How to Buy $GOAT on Pump.fun
            </motion.h2>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
              {/* Left Side - Goat Computer Image */}
              <motion.div
                className="flex justify-center lg:justify-start order-2 lg:order-1"
                variants={imageVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/images/goat-computer.png"
                      alt="GOAT using computer to buy on Pump.fun"
                      width={500}
                      height={400}
                      className="w-64 h-52 xs:w-72 xs:h-58 sm:w-80 sm:h-64 md:w-96 md:h-80 lg:w-[400px] lg:h-[320px] xl:w-[500px] xl:h-[400px] object-contain drop-shadow-2xl rounded-2xl sm:rounded-3xl"
                    />
                  </motion.div>
                  {/* Glow effect */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-8 sm:h-10 bg-yellow-300 rounded-full blur-xl opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              </motion.div>

              {/* Right Side - Steps */}
              <motion.div className="order-1 lg:order-2 space-y-4 sm:space-y-5 md:space-y-6" variants={sectionVariants}>
                {/* Step 1 */}
                <motion.div
                  className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-yellow-300/50 hover:border-yellow-300 transition-all duration-300"
                  variants={imageVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-300 text-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-black text-sm sm:text-base">
                      1
                    </div>
                    <div>
                      <h3
                        className="text-base sm:text-lg font-black text-yellow-300 mb-1"
                        style={{
                          fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                        }}
                      >
                        Get a Solana Wallet
                      </h3>
                      <p
                        className="text-xs sm:text-sm text-white font-bold"
                        style={{
                          fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                        }}
                      >
                        Download Phantom or Backpack wallet
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-yellow-300/50 hover:border-yellow-300 transition-all duration-300"
                  variants={imageVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-300 text-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-black text-sm sm:text-base">
                      2
                    </div>
                    <div>
                      <h3
                        className="text-base sm:text-lg font-black text-yellow-300 mb-1"
                        style={{
                          fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                        }}
                      >
                        Buy SOL
                      </h3>
                      <p
                        className="text-xs sm:text-sm text-white font-bold"
                        style={{
                          fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                        }}
                      >
                        Use Coinbase, Binance, or Kraken
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-yellow-300/50 hover:border-yellow-300 transition-all duration-300"
                  variants={imageVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-300 text-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-black text-sm sm:text-base">
                      3
                    </div>
                    <div>
                      <h3
                        className="text-base sm:text-lg font-black text-yellow-300 mb-1"
                        style={{
                          fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                        }}
                      >
                        Visit Pump.fun
                      </h3>
                      <p
                        className="text-xs sm:text-sm text-white font-bold"
                        style={{
                          fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                        }}
                      >
                        Search for $GOAT token
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 4 */}
                <motion.div
                  className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-yellow-300/50 hover:border-yellow-300 transition-all duration-300"
                  variants={imageVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-300 text-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-black text-sm sm:text-base">
                      4
                    </div>
                    <div>
                      <h3
                        className="text-base sm:text-lg font-black text-yellow-300 mb-1"
                        style={{
                          fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                        }}
                      >
                        Connect & Buy
                      </h3>
                      <p
                        className="text-xs sm:text-sm text-white font-bold"
                        style={{
                          fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                        }}
                      >
                        Connect wallet, enter SOL amount, hit BUY
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Pro Tip Section */}
            <motion.div
              className="text-center space-y-4 sm:space-y-6 bg-black/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-yellow-300/50 max-w-4xl mx-auto"
              variants={sectionVariants}
              whileHover={{ borderColor: "#fbbf24" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="inline-block bg-yellow-300 text-black px-4 py-2 rounded-full font-black text-sm sm:text-base"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                💡 PRO TIP
              </motion.div>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-bold"
                style={{
                  fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                }}
                variants={sectionVariants}
              >
                The earlier you ape in, the cheaper the entry.
              </motion.p>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl font-black text-yellow-300 tracking-wide drop-shadow-lg"
                style={{
                  fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive, sans-serif',
                  fontWeight: "900",
                  textShadow: "2px 2px 0px rgba(0,0,0,0.3), 4px 4px 0px rgba(0,0,0,0.1)",
                  letterSpacing: "0.05em",
                }}
                variants={sectionVariants}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Stay GOATed. 🐐
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Fourth Section - Join Us & Follow */}
        <motion.section
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
            {/* GOAT Banner */}
            <motion.div
              className="flex justify-center"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(255, 193, 7, 0.3)",
                      "0 0 50px rgba(255, 193, 7, 0.6)",
                      "0 0 30px rgba(255, 193, 7, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Image
                    src="/images/goat-city.png"
                    alt="GOAT banner with city background"
                    width={800}
                    height={300}
                    className="w-full max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto object-cover rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-yellow-300"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Grouped Images Section */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-xs sm:max-w-3xl md:max-w-5xl mx-auto"
              variants={sectionVariants}
            >
              {/* Yacht Image */}
              <motion.div
                className="flex justify-center"
                variants={imageVariants}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full max-w-xs sm:max-w-none">
                  <motion.div
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl border-2 sm:border-4 border-yellow-300"
                    animate={{
                      borderColor: ["#fbbf24", "#f59e0b", "#fbbf24"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Image
                      src="/images/goat-yacht.png"
                      alt="Goat on luxury yacht"
                      width={400}
                      height={300}
                      className="w-full h-32 xs:h-36 sm:h-40 md:h-48 lg:h-56 object-cover rounded-xl sm:rounded-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Private Jet Image */}
              <motion.div
                className="flex justify-center"
                variants={imageVariants}
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full max-w-xs sm:max-w-none">
                  <motion.div
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl border-2 sm:border-4 border-yellow-300"
                    animate={{
                      borderColor: ["#fbbf24", "#f59e0b", "#fbbf24"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                  >
                    <Image
                      src="/images/goat-jet.png"
                      alt="Goat in private jet"
                      width={400}
                      height={300}
                      className="w-full h-32 xs:h-36 sm:h-40 md:h-48 lg:h-56 object-cover rounded-xl sm:rounded-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </AnimatePresence>
  )
}
