<template>
  <section>
    <base-card>
      <header>
        <h2>Request Recieved</h2>
      </header>
      <ul>
        <request-item
          v-for="req in receivedRequest"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        ></request-item>
      </ul>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: {
    RequestItem,
  },
  computed: {
    receivedRequest() {
      return this.$store.getters['requests/requests'];
    },
  },
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
