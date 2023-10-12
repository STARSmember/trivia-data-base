<script setup></script>

<template>
  <main>
    <div class="card">
      <RouterView />
    </div>
  </main>
</template>

<style lang="postcss" scoped>
main {
  @apply  flex h-screen justify-center items-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500
  & .card {
    @apply flex h-5/6 min-h-fit w-11/12 flex-col items-center gap-16 overflow-auto rounded-lg bg-white p-8 shadow-lg;
  }
}
</style>
