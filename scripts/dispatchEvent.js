const axios = require('axios');

const token = process.argv[2];
const event = (() => {
  try {
    return JSON.parse(process.argv[3]);
  } catch (e) {
    return undefined;
  }
})();
console.log(event, event.commits, event.commits.message);
axios({
  url: 'https://api.github.com/repos/shuowu/gh-actions-playground-downstream/dispatches',
  method: 'post',
  headers: {
    'Authorization': `token ${token}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
  data: {
    'event_type': 'custom_event_type',
    'client_payload': {
      a: 'a'
    }
  }
})
.then(res => console.log(res.status))
.catch(error => console.log(error));
