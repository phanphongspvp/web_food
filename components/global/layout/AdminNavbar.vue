<template>
    <v-app-bar>
        <template v-slot:prepend permanent>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Shoppe Food</v-app-bar-title>

        <v-row align="center" justify="space-between" class="w-0">
            <v-col>
                <v-autocomplete class="mt-5 ml-3" density="comfortable" menu-icon placeholder="Search..."
                    prepend-inner-icon="mdi-magnify" style="max-width: 400px;" theme="light" variant="solo"
                    auto-select-first item-props rounded></v-autocomplete>
            </v-col>
            <v-col class="flex gap-4 items-center">
                <v-avatar>
                    <v-img
                      alt="John"
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                    ></v-img>
                  </v-avatar>
                <v-list-item-content>
                    <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                </v-list-item-content>
            </v-col>
        </v-row>
    </v-app-bar>
</template>