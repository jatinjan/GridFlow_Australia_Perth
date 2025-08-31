import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle, Bot, User, Loader2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatbotWidgetProps {
  webhookUrl?: string;
  position?: 'bottom-right' | 'bottom-left';
  primaryColor?: string;
  accentColor?: string;
}

const ChatbotWidget = ({ 
  position = 'bottom-right',
  primaryColor = 'var(--grid-electric-blue)',
  accentColor = 'var(--grid-vibrant-yellow)'
}: ChatbotWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const webhookUrl = "https://kiva17.app.n8n.cloud/webhook/fcfcf688-b2c9-485b-979a-d002d6f812d8/chat"
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: webhookUrl && webhookUrl.trim()
        ? "Hello! I'm GridFlow Assistant, your power engineering expert. How can I help you with your electrical infrastructure needs today?"
        : "Hi there! 👋 The GridFlow Assistant chatbot is currently on vacation. For immediate assistance with your power engineering needs, please contact our team directly at info@gridflow.com.au or call our office. We'll be happy to help with your electrical infrastructure projects!",
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Generate a unique session ID for this chat session
  const sessionId = useRef(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  console.log("webhookUrl", webhookUrl);
  console.log("sessionId", sessionId.current);
  

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      // Simulate typing delay
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

      let response;
      if (webhookUrl && webhookUrl.trim()) {
        // Send to webhook
        console.log('Sending to webhook:', webhookUrl);
        console.log('Payload:', {
          action: "sendMessage",
          sessionId: sessionId.current,
          chatInput: inputValue
        });

        try {
          const webhookResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              action: "sendMessage",
              sessionId: sessionId.current,
              chatInput: inputValue
            })
          });
          
          console.log('Webhook response status:', webhookResponse.status);
          console.log('Webhook response headers:', Object.fromEntries(webhookResponse.headers.entries()));
          
          if (webhookResponse.ok) {
            const responseText = await webhookResponse.text();
            console.log('Raw webhook response:', responseText);
            
            try {
              const data = JSON.parse(responseText);
              console.log('Parsed webhook data:', data);
              
              // Try multiple possible response fields that n8n might use
              response = data.response || 
                        data.message || 
                        data.reply || 
                        data.text || 
                        data.output || 
                        data.answer || 
                        data.content ||
                        (data.body && data.body.response) ||
                        (data.body && data.body.message) ||
                        (Array.isArray(data) && data[0] && data[0].response) ||
                        (Array.isArray(data) && data[0] && data[0].message) ||
                        responseText || 
                        "Thank you for your message. Our team will get back to you soon!";
            } catch (parseError) {
              console.log('Failed to parse JSON, using raw text:', responseText);
              response = responseText || "Thank you for your message. Our team will get back to you soon!";
            }
          } else {
            const errorText = await webhookResponse.text();
            console.error('Webhook error:', webhookResponse.status, errorText);
            throw new Error(`Webhook failed with status ${webhookResponse.status}: ${errorText}`);
          }
        } catch (fetchError) {
          console.error('Fetch error:', fetchError);
          throw fetchError;
        }
      } else {
        // If no webhook is configured, show vacation message
        response = "Hi there! 👋 The GridFlow Assistant chatbot is currently on vacation. For immediate assistance with your power engineering needs, please contact our team directly at info@gridflow.com.au or call our office. We'll be happy to help with your electrical infrastructure projects!";
      }

      setIsTyping(false);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      // Show notification if chat is closed
      if (!isOpen) {
        setHasNewMessage(true);
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      setIsTyping(false);
      
      let errorContent = "Hi there! 👋 The GridFlow Assistant chatbot is currently on vacation. For immediate assistance with your power engineering needs, please contact our team directly at info@gridflow.com.au or call our office. We'll be happy to help with your electrical infrastructure projects!";
      
      // If webhook is configured but failed, provide more specific error
      if (webhookUrl && webhookUrl.trim()) {
        console.log('Webhook URL is configured but failed:', webhookUrl);
        if (error instanceof Error) {
          console.log('Error details:', error.message);
          if (error.message.includes('CORS') || error.message.includes('network')) {
            errorContent = "I'm having trouble connecting to our chat service right now. Please try again in a moment, or contact us directly at info@gridflow.com.au for immediate assistance.";
          }
        }
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: errorContent,
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      
      // Show notification if chat is closed
      if (!isOpen) {
        setHasNewMessage(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Function to format message content with proper line breaks, bullet points, and bold text
  const formatMessageContent = (content: string) => {
    // Helper function to process bold text formatting
    const processBoldText = (text: string) => {
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={partIndex} className="font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });
    };

    return content.split('\n').map((line, index) => {
      // Handle bullet points
      if (line.trim().startsWith('* ')) {
        const bulletText = line.trim().substring(2);
        return (
          <div key={index} className="flex items-start mb-1">
            <span className="text-blue-600 mr-2 mt-0.5">•</span>
            <span>{processBoldText(bulletText)}</span>
          </div>
        );
      }
      // Handle empty lines
      if (line.trim() === '') {
        return <div key={index} className="h-2"></div>;
      }
      // Handle regular lines
      return <div key={index} className="mb-1">{processBoldText(line)}</div>;
    });
  };

  return (
    <div 
      className="fixed z-[9999]"
      style={{ 
        position: 'fixed',
        bottom: '20px',
        right: position === 'bottom-right' ? '16px' : 'auto',
        left: position === 'bottom-left' ? '16px' : 'auto',
        zIndex: 9999
      }}
    >
      {/* Mobile Fullscreen Modal */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 z-[10000] bg-white flex flex-col mobile-chat-modal">
          {/* Mobile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1">
                <img 
                  src="/logo.png" 
                  alt="GridFlow Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">GridFlow Assistant</h3>
                <p className="text-blue-100 text-sm">Power Engineering Expert</p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/10 h-10 w-10 rounded-lg"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white rounded-2xl rounded-br-md'
                    : 'bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm border border-gray-100'
                } px-4 py-3`}>
                  <div className="text-base leading-relaxed">
                    {message.role === 'assistant' ? formatMessageContent(message.content) : message.content}
                  </div>
                  <p className={`text-xs mt-2 ${
                    message.role === 'user' ? 'text-blue-100' : 'text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Mobile Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm border border-gray-100 px-4 py-3 max-w-[80%]">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500">GridFlow Assistant is typing</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Mobile Input - Fixed at bottom */}
          <div className="p-4 border-t border-gray-200 bg-white safe-area-bottom">
            <div className="flex space-x-3">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 rounded-xl text-base py-3 px-4 min-h-[48px]"
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 min-h-[48px] min-w-[48px]"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Chat Window */}
      {!isMobile && (
        <div className={`mb-4 transition-all duration-500 ease-in-out transform ${
          position === 'bottom-right' ? 'origin-bottom-right' : 'origin-bottom-left'
        } ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden" 
               style={{ 
                 marginLeft: position === 'bottom-right' ? 'auto' : '0',
                 width: '380px',
                 height: '500px'
               }}>
            {/* Desktop Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 flex items-center justify-between relative">
              <div className="flex items-center space-x-3 min-w-0 flex-1">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1 flex-shrink-0">
                  <img 
                    src="/logo.png" 
                    alt="GridFlow Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-medium text-sm truncate">GridFlow Assistant</h3>
                  <p className="text-blue-100 text-xs truncate">Power Engineering Expert</p>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 h-8 w-8 rounded-lg"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Desktop Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white rounded-lg rounded-br-sm'
                      : 'bg-white text-gray-800 rounded-lg rounded-bl-sm shadow-sm border border-gray-100'
                  } px-3 py-2`}>
                    <div className="text-sm leading-relaxed">
                      {message.role === 'assistant' ? formatMessageContent(message.content) : message.content}
                    </div>
                    <p className={`text-xs mt-1 ${
                      message.role === 'user' ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Desktop Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 rounded-lg rounded-bl-sm shadow-sm border border-gray-100 px-3 py-2 max-w-[85%]">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">GridFlow Assistant is typing</span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Desktop Input */}
            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex space-x-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="How can we help?"
                  disabled={isLoading}
                  className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg text-sm min-w-0"
                />
                <Button
                  onClick={sendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Support Bot Widget */}
      <div className="relative flex justify-end">
        {/* Main Support Bot Widget */}
        <div 
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) {
              setHasNewMessage(false);
            }
          }}
          className={`relative cursor-pointer transition-all duration-500 transform hover:scale-105 active:scale-95 ${
            isOpen ? 'mb-4' : ''
          }`}
        >
          {/* Widget Container - Animated between full widget and small circle */}
          <div className={`bg-white rounded-full border border-gray-100 flex items-center transition-all duration-500 ease-in-out ${
            isOpen 
              ? 'w-12 h-12 p-0 justify-center shadow-xl' 
              : 'py-2 px-2 sm:px-3 space-x-0 sm:space-x-4 shadow-2xl sm:min-w-[200px] justify-center sm:justify-start'
          }`}
          style={{
            minWidth: isOpen ? '48px' : '60px',
            maxWidth: isOpen ? '48px' : 'min(250px, calc(100vw - 32px))',
            boxShadow: isOpen 
              ? '0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(239, 68, 68, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              : '0 25px 50px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(37, 99, 235, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            animation: !isOpen ? 'gentleFloat 2s ease-in-out infinite' : 'none'
          }}>
            
            {/* When chat is closed - Full widget */}
            {!isOpen && (
              <>
                {/* Bot Icon Circle */}
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                       style={{
                         animation: 'iconBreathe 3s ease-in-out infinite',
                         boxShadow: '0 8px 16px rgba(37, 99, 235, 0.3), 0 0 20px rgba(37, 99, 235, 0.1)'
                       }}>
                    <Bot className="h-7 w-7 text-white transition-transform duration-300"
                         style={{
                           animation: 'iconGlow 2s ease-in-out infinite alternate'
                         }} />
                  </div>
                  
                  {/* Online Status Indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"
                       style={{
                         animation: 'statusPulse 2s ease-in-out infinite',
                         boxShadow: '0 0 10px rgba(34, 197, 94, 0.4)'
                       }}>
                    <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* New message notification */}
                  {hasNewMessage && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  )}
                </div>
                
                {/* Text Content - Hidden on mobile */}
                <div className="hidden sm:flex flex-1 opacity-100 transition-opacity duration-300 min-w-0 flex-col">
                  <h3 className="text-gray-900 font-semibold text-sm truncate">GridFlow Assistant</h3>
                  <p className="text-green-600 text-xs font-medium">Online</p>
                </div>
              </>
            )}
            
            {/* When chat is open - Small close button */}
            {isOpen && (
              <div className="w-full h-full flex items-center justify-center bg-red-500 rounded-full transition-all duration-300">
                <X className="h-6 w-6 text-white transition-transform duration-200 hover:rotate-90" />
              </div>
            )}
          </div>
          
          {/* Enhanced glow effect - adapts to button size */}
          <div className={`absolute inset-0 rounded-full blur-xl -z-10 transition-all duration-500 ${
            isOpen 
              ? 'bg-red-500/20' 
              : 'bg-blue-500/15'
          }`}
          style={{
            animation: isOpen ? 'glowPulse 2s ease-in-out infinite' : 'breatheGlow 4s ease-in-out infinite'
          }}></div>
          
          {/* Sparkle effects when closed */}
          {!isOpen && (
            <>
              <div className="chatbot-sparkle absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-70"
                   style={{
                     animation: 'sparkle 3s ease-in-out infinite'
                   }}></div>
              <div className="chatbot-sparkle absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-60"
                   style={{
                     animation: 'sparkle 3s ease-in-out infinite reverse',
                     animationDelay: '1.5s'
                   }}></div>
            </>
          )}
        </div>
      </div>
      
      {/* Custom CSS Animations */}
      <style>
        {`
          @keyframes gentleFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-3px); }
          }
          
          @keyframes iconBreathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes iconGlow {
            0% { filter: brightness(1); }
            100% { filter: brightness(1.1); }
          }
          
          @keyframes statusPulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          
          @keyframes breatheGlow {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          
          @keyframes glowPulse {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          
          @keyframes sparkle {
            0%, 100% { 
              opacity: 0.7; 
              transform: scale(1) rotate(0deg); 
            }
            25% { 
              opacity: 1; 
              transform: scale(1.2) rotate(90deg); 
            }
            50% { 
              opacity: 0.5; 
              transform: scale(0.8) rotate(180deg); 
            }
            75% { 
              opacity: 1; 
              transform: scale(1.1) rotate(270deg); 
            }
          }

          /* Mobile optimizations */
          @media (max-width: 640px) {
            .chatbot-widget {
              bottom: 16px !important;
              right: 12px !important;
              left: 12px !important;
            }
            
            .chatbot-sparkle {
              display: none;
            }
          }
          
          @media (max-width: 480px) {
            .chatbot-float-animation {
              animation: none !important;
            }
          }

          /* Safe area handling for mobile */
          .safe-area-bottom {
            padding-bottom: env(safe-area-inset-bottom);
          }

          /* Prevent zoom on input focus on iOS */
          @media screen and (max-width: 767px) {
            input[type="text"], input[type="email"], input[type="tel"], textarea {
              font-size: 16px !important;
            }
          }

          /* Mobile fullscreen modal styles */
          .mobile-chat-modal {
            height: 100vh;
            height: 100dvh; /* Dynamic viewport height for better mobile support */
          }
        `}
      </style>

    </div>
  );
};

export default ChatbotWidget;
