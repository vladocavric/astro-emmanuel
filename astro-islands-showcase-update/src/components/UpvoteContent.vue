<script>
import { useStore } from "@nanostores/vue";
import {upvoteCountStore} from '../store/upvotes'
export default {
  setup(props) {
    return {
      upvoteCount: useStore(upvoteCountStore),
      maxUpvoteCount: 50,
    }
  },

  methods: {
    // method called when you click the upvote button
    upvote() {
      if (this.upvoteCount < this.maxUpvoteCount) {
        upvoteCountStore.set(this.upvoteCount + 1)
      }
    },
  },
};
</script>

<template>
  <div class="m-2 flex items-center rounded-md border border-slate-600 p-2">
    <button
      class="h-[80px] w-[80px] rounded-full border border-gray-500 bg-slate-900 p-4 text-center text-sm text-green-600 hover:scale-90 active:bg-slate-800"
      @click="upvote"
    >
      <svg
        fill="none"
        class="mx-auto w-8"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        ></path>
      </svg>
      Upvote
    </button>

    <div class="ml-3">
      <div class="-300 mt-2 rounded-md bg-green-600 px-2 text-sm text-white">
        Built with Vue
      </div>
      <div class="pt-2 text-slate-400">{{ `${upvoteCount} upvotes` }}</div>

      <div class="h-2 bg-green-600" :style="{ width: `${upvoteCount}%` }" />

      <div
        class="mt-2 rounded-md bg-red-300 px-2 text-sm"
        v-if="upvoteCount === maxUpvoteCount"
      >
        Max upvote reached
      </div>
    </div>
  </div>
</template>
