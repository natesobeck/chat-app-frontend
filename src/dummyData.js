const chat1 = {
  "chatId": 1,
  "messages": [
    {
      "senderId": 101,
      "messageId": 1,
      "timeStamp": "2024-09-02T10:00:00Z",
      "isRead": true,
      "isEdited": false,
      "isDeleted": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Hey, how are you?"
              }
            ]
          }
        ]
      }
    },
    {
      "senderId": 102,
      "messageId": 2,
      "timeStamp": "2024-09-02T10:02:00Z",
      "isRead": true,
      "isEdited": false,
      "isDeleted": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [{"type": "code"}],
                "text": "I'm good, thanks! How about you?"
              }
            ]
          }
        ]
      }
    },
    {
      "senderId": 101,
      "messageId": 3,
      "timeStamp": "2024-09-02T10:05:00Z",
      "isRead": true,
      "isEdited": false,
      "isDeleted": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [{ "type": "italic" }],
                "text": "Doing well, just a bit tired."
              }
            ]
          }
        ]
      }
    },
    {
      "senderId": 102,
      "messageId": 4,
      "timeStamp": "2024-09-02T10:07:00Z",
      "isRead": true,
      "isEdited": false,
      "isDeleted": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [{ "type": "bold" }],
                "text": "Maybe you should rest a bit."
              }
            ]
          }
        ]
      }
    },
    {
      "senderId": 101,
      "messageId": 5,
      "timeStamp": "2024-09-02T10:10:00Z",
      "isRead": true,
      "isEdited": false,
      "isDeleted": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Yeah, I’ll do that. Thanks!"
              }
            ]
          }
        ]
      }
    },
    {
      "senderId": 102,
      "messageId": 6,
      "timeStamp": "2024-09-02T10:12:00Z",
      "isRead": true,
      "isEdited": false,
      "isDeleted": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Anytime! Take care."
              }
            ]
          }
        ]
      }
    }
  ]
}

const chat2 = {
  "chatId": 2,
  "messages": [
    {
      "senderId": 103,
      "messageId": 1,
      "timeStamp": "2024-09-03T14:00:00Z",
      "isRead": true,
      "isEdited": false,
      "isDeleted": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Hey, are you free for a call later?"
              }
            ]
          }
        ]
      }
    },
    {
      "senderId": 104,
      "messageId": 2,
      "timeStamp": "2024-09-03T14:02:00Z",
      "isRead": true,
      "isEdited": false,
      "isDeleted": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [{ "type": "italic" }],
                "text": "I can join in the afternoon."
              }
            ]
          }
        ]
      }
    },
    {
      "senderId": 103,
      "messageId": 3,
      "timeStamp": "2024-09-03T14:05:00Z",
      "isRead": true,
      "isEdited": false,
      "isDeleted": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [{ "type": "bold" }],
                "text": "Great, let’s schedule it for 3 PM then!"
              }
            ]
          }
        ]
      }
    },
    {
      "senderId": 104,
      "messageId": 4,
      "timeStamp": "2024-09-03T14:10:00Z",
      "isRead": true,
      "isEdited": false,
      "isDeleted": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Sounds good, talk to you then!"
              }
            ]
          }
        ]
      }
    }
  ]
};

const chat3 = {
  "chatId": 3,
  "messages": [
    {
      "senderId": 105,
      "messageId": 1,
      "timeStamp": "2024-09-04T16:30:00Z",
      "isRead": true,
      "isEdited": false,
      "isDeleted": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Did you finish the report?"
              }
            ]
          }
        ]
      }
    },
    {
      "senderId": 106,
      "messageId": 2,
      "timeStamp": "2024-09-04T16:32:00Z",
      "isRead": true,
      "isEdited": false,
      "isDeleted": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [{ "type": "code" }],
                "text": "Almost there! Just adding the final touches."
              }
            ]
          }
        ]
      }
    },
    {
      "senderId": 105,
      "messageId": 3,
      "timeStamp": "2024-09-04T16:35:00Z",
      "isRead": true,
      "isEdited": false,
      "isDeleted": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "marks": [{ "type": "bold" }, { "type": "italic" }],
                "text": "Awesome, keep me updated!"
              }
            ]
          }
        ]
      }
    },
    {
      "senderId": 106,
      "messageId": 4,
      "timeStamp": "2024-09-04T16:40:00Z",
      "isRead": true,
      "isEdited": false,
      "isDeleted": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": "Will do!"
              }
            ]
          }
        ]
      }
    }
  ]
};

export const chats = [chat1, chat2, chat3]