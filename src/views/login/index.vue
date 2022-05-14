<template>
    <div class="w-screen h-screen flex justify-center items-center">
        <!-- <div class="w-50% h-50%">asdasd</div> -->
        <div>
            <NButton type="primary"> button </NButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const a = ref(11);
a.value = 345;
</script>

<style scoped></style>
