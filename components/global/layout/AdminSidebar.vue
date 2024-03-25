<template>
    <v-navigation-drawer
        class="bg-primary"
        permanent
    >
        <img src="/icons/logo.png" alt="Logo" class="w-full">
        <v-list>
            <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" class="cursor-pointer" to="/dashboard" link></v-list-item>
            <v-list-item prepend-icon="mdi-account-box" title="Account" class="cursor-pointer" to="/account" link></v-list-item>
            <v-list-item prepend-icon="mdi-list-box" title="Admin" class="cursor-pointer" to="/admin" link></v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2">
                <v-btn block to="/logout" link>
                    Logout
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>