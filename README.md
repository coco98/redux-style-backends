## Requirements:

**Table:**
- name: tweets
- columns: id (uuid), raw (text), sanitized (text, nullable)

**Event trigger:**
- Trigger: On insert on tweets table
- Code: https://glitch.com/edit/#!/hilarious-pan (check index.js)
  - Remember to change endpoint to make sure mutation works

## Running the app:

- Set hasura endpoint in `index.js`
- `npm i && npm start`
