<template>
  <el-icon>
    <Icon :icon="icon" />
  </el-icon>
  <span>{{ text }}</span>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue';

  import { useI18n } from '/@/hooks/web/useI18n';
  import { Menu } from '/@/router/types';

  interface Props {
    item: Menu | null;
  }
  const props = defineProps<Props>();
  const { t } = useI18n();

  const text = computed(() => t(props.item?.name as string));
  const icon = computed(() => t(props.item?.meta?.icon as string));
</script>

<style scoped></style>
