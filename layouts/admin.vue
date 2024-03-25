<template>
    <v-card>
        <v-layout>
            <layout-admin-sidebar></layout-admin-sidebar>
            
            <v-main>
                <layout-admin-navbar></layout-admin-navbar>
                <slot></slot>
            </v-main>
        </v-layout>
    </v-card>
</template>