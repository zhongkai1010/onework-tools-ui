<template>
  <codemirror
    placeholder="Code goes here..."
    :extensions="[json(), linter(jsonParseLinter()), keymap.of(defaultKeymap)]"
    :model-value="modelValue"
    @ready="log('ready', $event)"
    @change="onChange"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
    :style="{ width: '100%', height: '300px' }"
    :lineWrapping="false"
  />
</template>

<script setup lang="ts">
  import { json, jsonParseLinter } from '@codemirror/lang-json';
  import { linter } from '@codemirror/lint';
  import { keymap } from '@codemirror/view';
  import { defaultKeymap } from '@codemirror/commands';
  import { log } from '/@/utils/log';

  interface Props {
    modelValue?: string;
  }
  defineProps<Props>();
  const emit = defineEmits<{ (e: 'update:modelValue', value: string) }>();
  const onChange = (value) => emit('update:modelValue', value);
</script>

<style scoped></style>
