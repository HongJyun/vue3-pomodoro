<template>
  <div class="py-4">
    <div class="flex justify-between">
      <label
        :for="`todo-done-${id}`"
        class="mr-4 flex items-center justify-center w-6 h-6 border-2 border-brand-gray rounded-full"
        :class="{'icon-check text-white font-bold':isDone}"
      >
        <input
          :id="`todo-done-${id}`"
          :value="isDone"
          class="hidden"
          type="checkbox"
          @change="$emit('update:isDone',!isDone)"
        >
      </label>
      <div class="flex-grow text-brand-gray">
        <input
          v-if="isEdit"
          v-model="editValue"
          type="text"
          class="text-black"
        >
        <p v-else>
          {{ content }}
        </p>
      </div>
      <div
        v-if="showControlButton"
        class="flex"
      >
        <img
          v-if="!isEdit"
          class="mr-5"
          src="@/assets/icon-edit.svg"
          alt="edit"
          @click="isEdit = true"
        >
        <i
          v-else
          class="mr-5 icon-check text-white text-[24px]"
          @click="$emit('update:content', editValue), isEdit = false"
        />
        <i
          class="icon-cross text-white text-[24px]"
          @click="$emit('delete')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: Number,
      default: undefined
    },
    isDone: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
    showControlButton: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:isDone', 'update:content', 'delete'],
  setup () {
    const editValue = ref('')
    const isEdit = ref(false)

    return { editValue, isEdit }
  }
})
</script>

<style>

</style>
