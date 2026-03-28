# Ask Belle backend

This folder is a minimal external backend for the portfolio chatbot.

## Why it is separate

The portfolio site is a static Jekyll site hosted in a GitHub Pages style setup, so the model call should not live in the front end. The front end widget stays in the main site, while this backend is deployed separately and called from the widget.

## Expected deployment shape

Deploy this folder as its own Vercel project with the root directory set to `chatbot-backend`.

The function is deployed at:

`https://chatbot-backend-omega-lilac.vercel.app/api/chat`

The route shape remains:

`POST /api/chat`

## Environment variables

- `OPENAI_API_KEY`: required
- `OPENAI_MODEL`: optional, defaults to `gpt-5-mini`
- `KNOWLEDGE_BASE_URL`: optional, defaults to `https://www.beeelle.com/assets/data/belle-site-knowledge.json`
- `ALLOWED_ORIGIN`: optional, set this to `https://www.beeelle.com` after deployment

Local development origins are also allowed:

- `http://127.0.0.1:4001`
- `http://localhost:4001`

If `OPENAI_API_KEY` is missing, the deployed function returns:

`503 {"error":"Chat service is not configured."}`

The front end is built to catch that response and fall back to the local site guide.

## How it works

1. Receives recent chat messages from the portfolio widget.
2. Fetches the published knowledge base JSON from the website.
3. Selects the most relevant documents with lightweight keyword retrieval.
4. Calls the OpenAI Responses API with grounded instructions and the selected context.
5. Returns a concise answer plus citations for the widget to render.

## Front-end connection

After deployment, copy the deployed endpoint into the portfolio site's chatbot config:

`_config.yml`

Set:

`chatbot.api_url: "https://chatbot-backend-omega-lilac.vercel.app/api/chat"`

## Knowledge base

The widget and backend both use:

`/assets/data/belle-site-knowledge.json`

When the website content changes materially, update that JSON so the chatbot stays grounded in the latest site content.
