export default {
  registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const token = context.rootGetters.token;

    fetch(
      `https://vue-http-demo-a2dba-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${token}`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    ).then();

    context.commit('registerCoach', { ...coachData, id: userId });
  },
  async loadCoaches(context) {
    const response = await fetch(
      `https://vue-http-demo-a2dba-default-rtdb.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();
    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
  },
};
