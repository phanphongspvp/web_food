<script lang="ts" setup>
import { PermissionDashboard } from "@@/types/permission"

definePageMeta({
    layout: 'admin',
    permissions : [PermissionDashboard.show]
})
</script>

<template>
    <div>
        dashboard
    </div>
</template>