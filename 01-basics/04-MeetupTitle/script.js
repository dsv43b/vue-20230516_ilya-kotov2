import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
// Что-то я не понял как сделать это задание правильно((

const app = createApp({
  data() {
    return {
      meetupId: null,
      nameOfMeetup: '',
    }
  },

  watch: {
    meetupId() {
      fetchMeetupById(this.meetupId)
      .then(res => this.nameOfMeetup = res.title);
    }
  }
});

const vm = app.mount('#app');
