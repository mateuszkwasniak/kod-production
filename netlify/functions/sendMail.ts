import axios from "axios";

exports.handler = async (event, context): Promise<{ statusCode: number }> => {
  try {
    const data = {
      service_id: process.env.SERVICE_ID as string,
      template_id: process.env.TEMPLATE_ID as string,
      user_id: process.env.EMAILJS_PUBLIC,
      template_params: JSON.parse(event.body),
      accessToken: process.env.EMAILJS_PRIVATE,
    };

    await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);

    return {
      statusCode: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
    };
  }
};
