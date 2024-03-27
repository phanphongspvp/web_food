<script setup>
import { PermissionDashboard } from "@@/types/permission"

definePageMeta({
    layout: 'admin',
    permissions : [PermissionDashboard.show]
})
</script>



<template>
    <div>
        Account
    </div>
</template>