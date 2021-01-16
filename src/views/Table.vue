<template>
  <div>
    <v-card
      class="d-flex ml-auto mb-6"
      color="grey lighten-3"
      flat
      til
      height="50"
      width="210"
    >
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="dates"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateRangeText"
            :label="$t('message.dateRange')"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="dates" range :max="maxDate">
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false">
            Cancel
          </v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)">
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
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
import dateFilter from "../filters/data-filter";
export default {
  data: () => ({
    maxDate: new Date().toISOString(),
    dates: [],
    //   new Date().toLocaleDateString(),
    //   new Date(
    //     new Date().getTime() - 30 * 60 * 60 * 24 * 1000
    //   ).toLocaleDateString()
    // ].map(d =>
    //   d
    //     .split("")
    //     .map(n => (n === "." ? "-" : n))
    //     .join("")
    //     .split("-")
    //     .reverse()
    //     .join("-")
    // ),
    page: 1,
    modal: false,
    pageCount: 0,
    itemsPerPage: 10
  }),
  computed: {
    // dates: {
    //   get() {
    //     let dd = [
    //       new Date().toLocaleDateString(),
    //       new Date(
    //         new Date().getTime() - 30 * 60 * 60 * 24 * 1000
    //       ).toLocaleDateString()
    //     ];

    //     dd = dd.map(d =>
    //       d
    //         .split("")
    //         .map(n => (n === "." ? "-" : n))
    //         .join("")
    //         .split("-")
    //         .reverse()
    //         .join("-")
    //     );
    //     console.log("dd: ", dd);
    //     return dd;
    //   },
    //   set(val) {
    //     console.log("val: ", val);
    //     console.log("val: ", new Date().toUTCString());
    //   }
    // },
    dateRangeText() {
      if (this.dates.length === 0) return;
      console.log("nn: ", new Date().toISOString());

      return this.dates.map(str => dateFilter(str, "short")).join(" - ");
    }
  },
  methods: {
    addDay(days) {
      const t = new Date(new Date().getTime() + days * 60 * 60 * 24 * 1000);
      console.log("l: ", t);
      return t;
    }
  },
  mounted() {
    this.addDay(-5);
  }
};
</script>
