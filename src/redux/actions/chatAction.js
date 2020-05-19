import { ON_MESSAGE } from "../types/chatTypes";
import { ApiAiClient } from "api-ai-javascript";
const accessToken = "81bbbe3517d644909fbb7a20dd55b985";
const client = new ApiAiClient({ accessToken });

export const sendMessage = (text, sender = "user") => ({
  type: ON_MESSAGE,
  payload: { text, sender },
});

export const messageMiddleware = () => (next) => (action) => {
  next(action);
  if (action.type === ON_MESSAGE) {
    const { text } = action.payload;
    client.textRequest(text).then(onSuccess);
    function onSuccess(response) {
      const {
        result: { fulfillment },
      } = response;
      next(sendMessage(fulfillment.speech, "bot"));
    }
  }
};
