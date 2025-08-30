# GridFlow Chatbot Widget Configuration

## Overview
The GridFlow chatbot widget is a clean, professional floating chat interface that matches your website's electrical engineering theme. It features a modern design with GridFlow branding and requires a webhook URL to function - otherwise displays a friendly "on vacation" message.

## Features
- 🎨 Clean, professional design matching GridFlow branding
- 📱 Responsive design for mobile and desktop
- 🔗 Webhook-only operation (no fallback responses)
- ✨ Smooth animations and transitions
- 💬 Real-time typing indicators
- 🏖️ "On vacation" message when webhook unavailable
- 🎯 Professional electrical engineering context

## Setup Instructions

### 1. Environment Variables
Create a `.env` file in your project root with:

```env
# Required: Your webhook URL
VITE_CHATBOT_WEBHOOK_URL=https://your-webhook-endpoint.com/api/chat

# Optional: Customization
VITE_CHATBOT_POSITION=bottom-right
VITE_CHATBOT_PRIMARY_COLOR=#3B82F6
VITE_CHATBOT_ACCENT_COLOR=#FBBF24
```

### 2. Webhook Configuration

#### Webhook Payload Format
Your webhook will receive POST requests with this JSON structure:

```json
{
  "message": "User's message content",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "sessionId": "session_1705312200000"
}
```

#### Expected Response Format
Your webhook should respond with:

```json
{
  "response": "Your chatbot's reply message",
  "status": "success"
}
```

### 3. Popular Webhook Services

#### Zapier
1. Create a new Zap with "Webhooks by Zapier" trigger
2. Choose "Catch Hook" 
3. Copy the webhook URL to your `.env` file
4. Set up actions (email, Slack, database, etc.)

#### Make.com (formerly Integromat)
1. Create a new scenario
2. Add "Webhooks" → "Custom webhook" module
3. Copy the webhook URL to your `.env` file
4. Connect to your desired services

#### n8n (Self-hosted)
1. Create a new workflow
2. Add "Webhook" node
3. Set HTTP method to POST
4. Copy the webhook URL to your `.env` file

#### Custom API Example (Node.js)
```javascript
app.post('/api/chatbot/message', async (req, res) => {
  const { message, timestamp, sessionId } = req.body;
  
  // Process the message (AI integration, database lookup, etc.)
  const response = await processMessage(message);
  
  res.json({
    response: response,
    status: 'success'
  });
});
```

## Customization Options

### Position
Change the chatbot position:
```typescript
<ChatbotWidget position="bottom-left" />
// or
<ChatbotWidget position="bottom-right" />
```

### Colors
Customize the color scheme:
```typescript
<ChatbotWidget 
  primaryColor="#3B82F6"
  accentColor="#FBBF24"
/>
```

### Webhook URL
Set via environment variable or prop:
```typescript
<ChatbotWidget 
  webhookUrl="https://your-custom-endpoint.com/api/chat"
/>
```

## Default Behavior

If no webhook is configured, the chatbot will:
- Display a friendly "on vacation" message
- Direct users to contact GridFlow directly via email or phone
- Maintain professional tone while indicating unavailability
- Show the vacation message for all user interactions

## Styling Notes

The chatbot automatically inherits your GridFlow theme:
- Primary colors: Electric blue (`#3B82F6`) and navy (`#1E3A5F`)
- Accent color: Vibrant yellow (`#FBBF24`)
- Animations: Power pulse effects, electric borders, floating motion
- Typography: Inter font family
- Design: Professional electrical engineering aesthetic

## Technical Implementation

The chatbot is built with:
- React + TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Custom CSS animations for electric effects
- Responsive design principles

## Troubleshooting

### Webhook Not Working
1. Check your `.env` file exists and has the correct URL
2. Verify your webhook endpoint accepts POST requests
3. Ensure CORS is configured on your webhook server
4. Check browser network tab for error details

### Styling Issues
1. Ensure Tailwind CSS is properly configured
2. Check that custom animations are loaded in `index.css`
3. Verify no CSS conflicts with existing styles

### Performance
The chatbot is optimized for performance:
- Lazy loading of messages
- Efficient re-renders
- Smooth 60fps animations
- Minimal bundle size impact

## Integration Examples

### With Customer Support Platform
Connect to platforms like Intercom, Zendesk, or Freshdesk for seamless customer support integration.

### With AI Services
Integrate with OpenAI, Anthropic, or other AI services for intelligent responses about electrical engineering topics.

### With CRM Systems
Connect to Salesforce, HubSpot, or Pipedrive to automatically create leads from chat interactions.

---

For technical support or customization requests, contact the GridFlow development team.
