import axios from "axios";

function getRequestParams(email: string) {
  // get env variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  // We need the us6 part
  const DATACENTER = process.env.MAILCHIMP_API_KEY?.split("-")[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  // Add aditional params here. See full list of available params:
  // https://mailchimp.com/developer/reference/lists/list-members/
  const data = {
    email_address: email,
    status: "subscribed",
  };

  // Api key needs to be encoded in base 64 format
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

export default async (req: any, res: any) => {
  const { email } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({
      error: "Ajouter votre email!",
    });
  }

  try {
    const { url, data, headers } = getRequestParams(email);

    const response = await axios.post(url, data, { headers });

    // Success
    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error: `Oops, il s'est produit une erreur inattendue..Envoyez moi un email ${process.env.EMAIL_ADRESS} pour etre ajouté manuellement.`,
    });

    // Report error to Sentry or whatever
  }
};
