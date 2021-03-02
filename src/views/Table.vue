<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="
        items.filter(i =>
          i.title.toLowerCase().includes(this.search.toLowerCase())
        )
      "
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Finances</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">{{ $t("message.updateVal") }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.title"
                        label="Title"
                        :rules="[max25chars]"
                        counter="25"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.uah"
                        label="Grivna"
                        :rules="[isNumerik]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.usd"
                        label="Usd"
                        :rules="[isNumerik]"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.eur"
                        label="Euro"
                        :rules="[isNumerik]"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  {{ $t("message.cansel") }}
                </v-btn>
                <v-btn color="blue darken-1" text @click="save">
                  {{ $t("message.save") }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">
                {{ $t("message.deleteConfirm") }}
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">
                  {{ $t("message.cansel") }}
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

      <template v-slot:item.actions="{ item }">
        <v-icon small class="mx-1" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small class="mx-1" @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:no-data>
        No data to show
      </template>
    </v-data-table>

    <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
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
//import dateFilter from "../filters/data-filter";
const mokeData = [
  {
    date: "1.02.21",
    title: "Church offering",
    act: "add",
    uah: 12000,
    usd: "",
    eur: 240
  },
  {
    date: "5.02.21",
    title: "Rent",
    act: "dec",
    uah: 19000,
    usd: 100,
    eur: ""
  },
  {
    date: "5.02.21",
    title: "Rent",
    uah: 19000,
    usd: 100,
    eur: ""
  },
  {
    date: "5.02.21",
    title: "Rent",
    uah: 19000,
    usd: 100,
    eur: ""
  },
  {
    date: "5.02.21",
    title: "Rent",
    uah: 19000,
    usd: 100,
    eur: ""
  },
  {
    date: "5.02.21",
    title: "Rent",
    uah: 19000,
    usd: 100,
    eur: ""
  },
  {
    date: "5.02.21",
    title: "Rent",
    uah: 19000,
    usd: 100,
    eur: ""
  },
  {
    date: "5.02.21",
    title: "Rent",
    uah: 19000,
    usd: 100,
    eur: ""
  },
  {
    date: "5.02.21",
    title: "Rent",
    uah: 19000,
    usd: 100,
    eur: ""
  },
  {
    date: "5.02.21",
    title: "Rent",
    uah: 19000,
    usd: 100,
    eur: ""
  },
  {
    date: "5.02.21",
    title: "Rent",
    uah: 19000,
    usd: 100,
    eur: ""
  },
  {
    date: "5.02.21",
    title: "Rent",
    uah: 19000,
    usd: 100,
    eur: ""
  }
];
export default {
  data: () => ({
    snack: false,
    snackColor: "",
    snackText: "",
    search: "",
    dialog: false,
    dialogDelete: false,
    max25chars: v => v.length <= 25 || "Input too long!",
    isNumerik: v => Math.sign(v) > 0 || v === "" || "Must be an number",
    headers: [
      {
        text: "Date",
        sortable: false,
        value: "date"
      },
      {
        text: "",
        align: "start",
        sortable: false,
        value: "title"
      },
      { text: "Grivna", value: "uah", sortable: false },
      { text: "Dollar", value: "usd", sortable: false },
      { text: "Euro", value: "eur", sortable: false },
      { text: "Actions", value: "actions", sortable: false }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      uah: 0,
      usd: 0,
      eur: 0
    }
  }),
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },

  created() {
    this.items = mokeData;
  },

  methods: {
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
      this.editedItem = Object.assign({}, item);
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
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedIndex = -1;
      });
    },

    save() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
      Object.assign(this.items[this.editedIndex], this.editedItem);

      this.close();
    },
    getColor(action) {
      if (action === "add") return "green";
      else if (action === "dec") return "red";
      else return "none";
    }
  },
  mounted() {}
};
</script>
