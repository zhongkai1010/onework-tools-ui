<template>
  <div class="remote-container">
    <el-form-item label="接口地址">
      <el-input
        v-model="formVlaue.url"
        @update:model-value="() => $emit('update:modelValue', formVlaue)"
      >
        <template #prepend>
          <el-select
            v-model="formVlaue.method"
            style="width: 90px"
            @update:model-value="() => $emit('update:modelValue', formVlaue)"
          >
            <el-option label="POST" value="post" />
            <el-option label="GET" value="get" />
          </el-select>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="标签键名">
      <el-input
        v-model="formVlaue.labelKey"
        @update:model-value="() => $emit('update:modelValue', formVlaue)"
      />
    </el-form-item>
    <el-form-item label="值键名">
      <el-input
        v-model="formVlaue.valueKey"
        @update:model-value="() => $emit('update:modelValue', formVlaue)"
      />
    </el-form-item>
    <el-form-item label="子级键名">
      <el-input
        v-model="formVlaue.childerKey"
        @update:model-value="() => $emit('update:modelValue', formVlaue)"
      />
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    modelValue:
      | {
          url: string;
          method: 'post' | 'get';
          labelKey?: string;
          valueKey?: string;
          childerKey?: string;
        }
      | undefined;
  }>();
  const formVlaue = reactive(props.modelValue);
</script>

<style scoped></style>
