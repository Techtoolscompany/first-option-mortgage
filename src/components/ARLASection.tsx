'use client'

import { motion } from 'framer-motion'
import { AnimateIn } from '@/components/AnimateIn'
import { Magnetic } from '@/components/Magnetic'
import { useConversation } from '@elevenlabs/react'
import { useCallback, useState } from 'react'

export function ARLASection() {
  const [agentId] = useState('agent_8001kk00zdksfymrawze7ht3t5fp')
  
  const conversation = useConversation({
    onConnect: () => console.log('ARLA Connected'),
    onDisconnect: () => console.log('ARLA Disconnected'),
    onMessage: (message) => console.log('ARLA Message:', message),
    onError: (error) => console.error('ARLA Error:', error),
  })

  const toggleConversation = useCallback(async () => {
    try {
      if (conversation.status === 'connected') {
        await conversation.endSession()
      } else {
        await navigator.mediaDevices.getUserMedia({ audio: true })
        await conversation.startSession({
          agentId: agentId,
          connectionType: 'websocket'
        })
      }
    } catch (error) {
      console.error('Failed to toggle conversation:', error)
      alert("Microphone access is required to talk to ARLA. Please check your permissions.")
    }
  }, [conversation, agentId])

  const isConnected = conversation.status === 'connected'
  const isSpeaking = conversation.isSpeaking

  return (
    <section id="arla" className="py-24 bg-white border-y border-primary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          {/* Active Glow Effect */}
          <motion.div 
            className={`absolute -inset-10 rounded-full blur-3xl transition-colors duration-1000 ${
              isConnected ? (isSpeaking ? 'bg-accent/60' : 'bg-accent/30') : 'bg-transparent'
            }`}
            animate={{
              scale: isSpeaking ? [1, 1.2, 1] : 1,
              opacity: isSpeaking ? [0.5, 0.8, 0.5] : (isConnected ? 0.5 : 0)
            }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          ></motion.div>
          
          <div className="bg-accent/10 absolute -top-10 -left-10 w-64 h-64 rounded-full blur-3xl"></div>
          
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <img 
              alt="ARLA Support" 
              className={`relative shadow-2xl z-10 w-full rounded-[2.5rem] transition-all duration-700 ${
                isConnected ? 'grayscale-0 ring-4 ring-accent/30' : 'grayscale-[50%] hover:grayscale-0'
              }`}
              data-alt="Professional woman smiling in a bright modern office" 
              src="/images/arla.png"
            />
          </motion.div>
        </div>
        <div className="space-y-8">
          <AnimateIn delay={0.1}>
            <span className="font-display text-accent font-bold tracking-[0.3em] uppercase text-xs">
              {isConnected ? 'ARLA IS LISTENING...' : 'Always Available'}
            </span>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h2 className="font-serif text-5xl font-medium text-primary italic leading-tight">Meet ARLA</h2>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="font-display text-lg text-slate-600 leading-relaxed italic">
              "Our Automated Response Loan Assistant is available 24/7 to provide instant updates and answer your questions with precision."
            </p>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <p className="font-display text-slate-500 text-sm leading-relaxed max-w-md">
              Experience the future of client support. Click below to start a live voice conversation.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.5}>
            <div className="flex items-center gap-4">
              <Magnetic strength={20}>
                <button 
                  onClick={toggleConversation}
                  disabled={conversation.status === 'connecting'}
                  className={`font-display flex items-center gap-4 px-10 py-4 font-bold uppercase tracking-widest text-sm transition-all rounded-full group ${
                    isConnected 
                      ? 'bg-red-500 text-white hover:bg-red-600 shadow-xl shadow-red-500/20' 
                      : 'bg-primary text-white hover:bg-primary/90 hover:shadow-xl'
                  } ${conversation.status === 'connecting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {conversation.status === 'connecting' ? 'Connecting...' : (isConnected ? 'End Conversation' : 'Talk with ARLA')}
                  {!isConnected && <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">mic</span>}
                  {isConnected && <span className="material-symbols-outlined text-sm">mic_off</span>}
                </button>
              </Magnetic>
              
              {isConnected && (
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isSpeaking ? 'bg-accent' : 'bg-green-400'}`}></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${isSpeaking ? 'bg-accent' : 'bg-green-500'}`}></span>
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {isSpeaking ? 'ARLA Speaking' : 'Listening'}
                  </span>
                </div>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
