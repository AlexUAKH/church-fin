<template>
  <div>
    <v-card
      class="d-flex ml-md-auto mx-md-0 mx-auto mb-6"
      color="grey lighten-3"
      flat
      til
      height="50"
      width="250"
    >
      <div class="mx-auto">
        <v-text-field
          v-model="dateRangeText"
          :label="$t('message.dateRange')"
          prepend-icon="mdi-calendar"
          readonly
        ></v-text-field>
      </div>
    </v-card>
    <div>
      kjbhbh
    </div>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    dates: ["10-09-2020", "10-10-2020"],
    page: 1,
    pageCount: 0,
    itemsPerPage: 10
  }),
  computed: {
    dateRangeText() {
      return this.dates
        .map(str => {
          return str
            .split("")
            .map(s => (s === "-" ? "." : s))
            .join("");
        })
        .join(" - ");
    }
  }
};
</script>
