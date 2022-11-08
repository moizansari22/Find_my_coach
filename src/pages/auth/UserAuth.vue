<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <p v-if="!formIsValid">please enter a valid email and password</p>
      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode">{{
        switchModeCaption
      }}</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode == 'login') {
        return 'login';
      } else {
        return 'signup';
      }
    },
    switchModeCaption() {
      if (this.mode === 'login') {
        return 'signup instead';
      } else {
        return 'login instead';
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (this.email === '' || this.password.length < 8) {
        this.formIsValid = false;
        return;
      }
      if (this.mode === 'login') {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        });
      } else {
        await this.$store.dispatch('signup', {
          email: this.email,
          password: this.password,
        });
      }
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
