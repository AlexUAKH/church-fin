<template>
  <v-card class="ml-1">
    <v-data-table
      :loading="loading"
      loading-text="Loading... Please wait"
      :headers="headers"
      :items="filteredRecords"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title class="hidden-md-and-down ">
            {{ $t("table.title") }}
          </v-toolbar-title>

          <v-spacer class="hidden-md-and-down"></v-spacer>

          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            :label="$t('table.search')"
            class="mr-8"
            single-line
            hide-details
          ></v-text-field>

          <v-dialog v-model="dialog" max-width="500px" v-if="isLoggedIn">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                {{ $t("table.add") }}
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.title"
                        :label="$t('table.record.title')"
                        :rules="[max25chars]"
                        counter="25"
                        maxlength="25"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-select
                        v-model="direction"
                        :items="dir"
                        label=""
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        v-model="editedItem.uah"
                        :label="$t('table.record.grn')"
                        :rules="[isNumerik]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        v-model="editedItem.usd"
                        :label="$t('table.record.usd')"
                        :rules="[isNumerik]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        v-model="editedItem.eur"
                        :label="$t('table.record.euro')"
                        :rules="[isNumerik]"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  {{ $t("table.cancel") }}
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  {{ $t("table.save") }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">
                {{ $t("table.deleteConfirm") }}
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">
                  {{ $t("table.cancel") }}
                </v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.title="{ item }">
        <v-chip :color="getColor(item.act)" dark> {{ item.title }}</v-chip>
      </template>

      <template v-slot:item.date="{ item }">
        {{ formatedDate(item.date) }}
      </template>

      <template v-if="isLoggedIn" v-slot:item.actions="{ item }">
        <v-icon small class="mx-1" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small class="mx-1" @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:no-data>
        {{ $t("table.no-data") }}
      </template>
    </v-data-table>

    <v-snackbar
      v-model="snack"
      app
      centered
      elevation-4
      labsolute
      :color="snackColor"
    >
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" text @click="snack = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import moment from "moment";
import { maxChars, isNumerik } from "../helpers/vualidateFunctions";

export default {
  data: () => ({
    loading: true,
    snack: false,
    snackColor: "",
    snackText: "",
    search: "",
    dialog: false,
    dialogDelete: false,
    max25chars: v => maxChars(v, 25),
    isNumerik: v => isNumerik(v),
    items: [],
    direction: "",
    editedIndex: -1,
    editedItem: {
      title: "",
      uah: 0,
      usd: 0,
      eur: 0
    },
    defaultItem: {
      title: "",
      uah: 0,
      usd: 0,
      eur: 0
    }
  }),
  computed: {
    records() {
      return this.$store.state.records.records;
    },
    filteredRecords() {
      return this.records.filter(i =>
        i.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    isLoggedIn() {
      //return this.$store.getters.isLoggedIn;
      return !!this.$store.state.user.user;
    },
    headers() {
      let head = [
        {
          text: this.$t("table.record.date"),
          sortable: false,
          value: "date"
        },
        {
          text: this.$t("table.record.title"),
          align: "start",
          sortable: false,
          value: "title"
        },
        {
          text: this.$t("table.record.grn"),
          value: "uah",
          align: "center",
          sortable: false
        },
        {
          text: this.$t("table.record.usd"),
          value: "usd",
          align: "center",
          sortable: false
        },
        {
          text: this.$t("table.record.euro"),
          value: "eur",
          align: "center",
          sortable: false
        }
      ];
      if (this.isLoggedIn) {
        head.push({ text: "Actions", value: "actions", sortable: false });
      }
      return head;
    },
    formTitle() {
      return this.editedIndex === -1
        ? this.$t("table.add")
        : this.$t("table.updateVal");
    },
    dir() {
      return [this.$t("menu.income"), this.$t("menu.outcome")];
    },
    firstDir() {
      return this.dir[0];
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    firstDir() {
      this.direction = this.dir[0];
    }
  },

  created() {
    this.direction = this.dir[0];
    this.$store
      .dispatch("records/getRecords")
      .then(() => (this.loading = false))
      .catch(() => this.errorMessage("Somyhing went wrong"));
  },

  methods: {
    formatedDate(date) {
      return moment(date).format("DD MM YYYY");
    },
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      //this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.items.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedIndex = -1;
        this.editedItem = { ...this.defaultItem };
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedIndex = -1;
      });
    },

    save() {
      this.editedItem.date = Date.now();
      this.editedItem.act =
        this.dir.indexOf(this.direction) === 0 ? "add" : "dec";
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        // saveData(this.editedItem)
        //   .then(res => {
        //     this.snack = true;
        //     this.snackColor = "success";
        //     this.snackText = this.$t("messages.saved-success");
        //     this.items.push(this.editedItem);
        //     console.log("res save: ", res);
        //     this.close();
        //   })
        //   .catch(e => {
        //     this.errorMessage(e);
        //   });
        //this.items= [...this.items, this.editedItem];
      }
    },
    getColor(action) {
      if (action === "add") return "green";
      else if (action === "dec") return "red";
      else return "none";
    },
    errorMessage(err) {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = err;
    }
  }
};
</script>
