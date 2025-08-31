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
        bottom: position === 'bottom-right' ? '75px' : '75px',
        right: position === 'bottom-right' ? '16px' : 'auto',
        left: position === 'bottom-left' ? '16px' : 'auto',
        zIndex: 9999
      }}
    >
      {/* Chat Window */}
      <div className={`mb-4 transition-all duration-500 ease-in-out transform origin-bottom-right ${
        isOpen 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 w-80 sm:w-96 h-[500px] flex flex-col overflow-hidden" 
             style={{ marginLeft: position === 'bottom-right' ? 'auto' : '0' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 flex items-center justify-between relative">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1">
                <img 
                  src="/logo.png" 
                  alt="GridFlow Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">GridFlow Assistant</h3>
                <p className="text-blue-100 text-xs">Power Engineering Expert</p>
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

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] ${
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
            
            {/* Typing Indicator */}
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

          {/* Input */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="How can we help?"
                disabled={isLoading}
                className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg text-sm"
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* Chat Toggle Button */}
      <div className="relative flex justify-end">
        <Button
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) {
              setHasNewMessage(false);
            }
          }}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl ${
            isOpen 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <div className="relative">
              <MessageCircle className="h-5 w-5 text-white" />
              {hasNewMessage && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white"></div>
              )}
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ChatbotWidget;
