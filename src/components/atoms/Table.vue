<template>
  <table class="w-full text-sm text-left text-gray-500">
    <caption v-if="!!$slots.caption || caption">
      <slot name="caption">{{ caption }}</slot>
    </caption>
    <colgroup>
      <template v-for="field in displayedFields" :key="field.key">
        <slot :name="`col(${field.key})`">
          <col>
        </slot>
      </template>
    </colgroup>
    <thead class="text-xs uppercase bg-secondary text-white rounded-lg">
    <tr>
      <th v-for="field in displayedFields" class="py-3 px-6">
        <slot :name="`head(${field.key})`" :field="field">
          {{ field.label }}
        </slot>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in items" :key="item.id" class="bg-white border-b">
      <template v-for="key in displayedFieldKeys">
        <Component :is="cellElement(key as string)" class="py-4 px-6">
          <slot
              :name="`cell(${key})`"
              :value="format(item, (key as string))"
              :item="item"
              :format="(k: string) => format(item, k)"
          >
            <div v-if="key !== 'action'">
              {{ format(item, (key as string)) }}
            </div>

            <div v-if="key === 'action'">
              <Button size="small" theme="default">{{ format(item, (key as string)) }}</Button>
            </div>
          </slot>
        </Component>
      </template>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { PropType } from 'vue'
import Button from '../../components/atoms/Forms/Button.vue'

interface TableField {
  key: string
  label: string
  format?: Function
  hidden?: boolean
  header?: boolean
}

interface TableItem {
  id: number
  [key: string]: unknown
}

const props = defineProps({
  fields: { type: Array as PropType<TableField[]>, default: () => [] },
  items: { type: Array as PropType<TableItem[]>, default: () => [] },
  caption: { type: String, default: null }
})

const displayedFields = computed(() => props.fields.filter((i) => !i.hidden))

const displayedFieldKeys = computed(() => {
  return Object.entries(displayedFields.value).map(([_key, value]) => value.key)
})

const cellElement = (key: string) => {
  const field = props.fields.find((f) => f.key === key)
  return field && field.header ? 'th' : 'td'
}

const format = (item: TableItem, key: string) => {
  const field = props.fields.find((f) => f.key === key)
  return field && field.format ? field.format(item[key]) : item[key]
}
</script>
