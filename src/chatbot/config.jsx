import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import BotAvatar from "../components/botAvatar";
import Loader from "../components/loader";
import TherapyForm from "../login";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hi. I am your Diet and Fitness health Nutritionist, I can make recommendations on how to improve Diet and Fitness. `,
      { widget: "TherapyForm" }
    ),
  ],
  widgets: [
    {
      widgetName: "loader",
      widgetFunc: (props) => <Loader {...props} />,
    },
    {
      widgetName: "TherapyForm",
      widgetFunc: (props) => <TherapyForm {...props} />,
    },
  ],
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <></>,
  },
};

export default config;
