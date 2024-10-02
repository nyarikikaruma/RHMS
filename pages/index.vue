<template>
    <div class="dark:bg-gray-900">
        <v-toolbar title="RHMS" class="bg-indigo-darken-4">
            <v-btn class="text-blue pa-2">
                Login
            </v-btn>
            <v-btn class="text-green pa-2">
                Register
            </v-btn>
        </v-toolbar>
        <home-body></home-body>
    </div>
</template>

<script setup>
import HomeBody from '~/components/HomeBody.vue';
</script>

<style></style>