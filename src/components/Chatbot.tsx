import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: "Hello! How can I help you today?",
          isBot: true
        }
      ]);
    }
    scrollToBottom();
  }, [isOpen, messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  const getBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('tally') || input.includes('software')) {
      return "We offer comprehensive Tally solutions including implementation, training, and support. Would you like to schedule a demo?";
    }
    if (input.includes('gst') || input.includes('tax')) {
      return "Our GST experts provide training and support for all your tax compliance needs. We also conduct regular GST seminars.";
    }
    if (input.includes('price') || input.includes('cost')) {
      return "Our pricing varies based on your business needs. Please contact our sales team at +91-9131771382 for a customized quote.";
    }
    if (input.includes('location') || input.includes('office')) {
      return "We have offices in Singrauli, Ambikapur, Bilaspur, and Rewa. Our main office is at Government Degree College Road, Waidhan, MP.";
    }
    return "Thank you for your message. Would you like to speak with our team? You can reach us at +91-9131771382 or visit our contact page.";
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div>
              <h3 className="font-bold">HCS Support</h3>
              <p className="text-sm text-gray-500">We typically reply in a few minutes</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;