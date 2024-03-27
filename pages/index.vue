<script lang="ts" setup>
import { useUser } from "~/stores/user";

const userStore = useUser();

const test = async () => {
    await userStore.getUser("1");
}

test();

</script>

<template>
    <div class="text-red-500">
        Hello Page Home
    </div>
</template>