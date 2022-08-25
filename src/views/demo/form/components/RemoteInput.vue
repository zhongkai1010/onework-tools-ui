<template>
  <div class="remote-container">
    <el-form-item label="接口地址" :required="true" :prop="`${props.prop}.url`">
      <el-input v-model="formVlaue.url">
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
    <el-form-item label="标签键名" :prop="`${props.prop}.labelKey`">
      <el-input v-model="formVlaue.labelKey" />
    </el-form-item>
    <el-form-item label="值键名" :prop="`${props.prop}.valueKey`">
      <el-input v-model="formVlaue.valueKey" />
    </el-form-item>
    <el-form-item label="子级键名" :prop="`${props.prop}.childerKey`">
      <el-input v-model="formVlaue.childerKey" />
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    prop: string;
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
