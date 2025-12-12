import {Inngest} from 'inngest';

export const inngest = new Inngest({
  id: 'Stockzen Inngest Client',
  ai:{gemini:{apiKey: process.env.GEMINI_API_KEY!}},
});