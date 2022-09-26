<template>
  <div class="bg-background">
    <div class="container p-10">
      <h2 class="text-3xl font-bold leading-7">CGI Styling</h2>
    </div>

    <div class="container p-10">
      <div class="row-auto py-4">
        <Button class="mb-2" theme="default" size="small">Default button</Button>
        <br>
        <code>&lt;Button theme="default" size="small"&gt;Button waarde&lt;/Button&gt;</code>
      </div>

      <div class="row-auto py-4">
        <Button class="mb-2" theme="white">White button</Button>
        <br>
        <code>&lt;Button theme="white" size="default"&gt;Button waarde&lt;/Button&gt;</code>
      </div>

      <div class="row-auto py-4">
        <Button class="mb-2" theme="default" size="large">Default button</Button>
        <br>
        <code>&lt;Button theme="default" size="large"&gt;Button waarde&lt;/Button&gt;</code>
      </div>

      <div class="row-auto py-4">
        <Label>Label text</Label>
        <code>&lt;Label&gt;Label waarde&lt;/Label&gt;</code>
      </div>

      <div class="row-auto py-4">
        <Input class="mb-2" name="test" placeholder="Hello World" status="default"></Input>
        <code>&lt;Input name="" placeholder="" status="default"&gt;&lt;/Input&gt;</code>
      </div>

      <div class="row-auto py-4">
        <Input class="mb-2" name="test" placeholder="Hello World" status="error"></Input>
        <code>&lt;Input name="" placeholder="" status="error"&gt;&lt;/Input&gt;</code>
      </div>

      <div class="row-auto py-4">
        <Input class="mb-2" name="test" placeholder="Hello World" status="bordered"></Input>
        <code>&lt;Input name="" placeholder="" status="bordered"&gt;&lt;/Input&gt;</code>
      </div>

      <div class="row-auto py-4">
        <Title weight="normal" size="1">Your text here</Title>
        <Title weight="normal" size="2">Your text here</Title>
        <Title weight="normal" size="3">Your text here</Title>
        <Title weight="normal" size="4">Your text here</Title>
        <Title weight="normal" size="5">Your text here</Title>
        <Title weight="normal" size="6">Your text here</Title>
      </div>

      <div class="row-auto py-4">
        <code>
          &lt;Title weight="normal" color="black" size="1"&gt;Your text here&lt;/Title&gt; <br>
          &lt;Title weight="normal" color="black" size="2"&gt;Your text here&lt;/Title&gt; <br>
          &lt;Title weight="normal" color="black" size="3"&gt;Your text here&lt;/Title&gt; <br>
          &lt;Title weight="normal" color="black" size="4"&gt;Your text here&lt;/Title&gt; <br>
          &lt;Title weight="normal" color="black" size="5"&gt;Your text here&lt;/Title&gt; <br>
          &lt;Title weight="normal" color="black" size="6"&gt;Your text here&lt;/Title&gt; <br>
        </code>
      </div>

      <div class="row-auto py-4">
        <Title weight="bold" size="1" color="primary">Your text here</Title>
        <Title weight="bold" size="2" color="primary">Your text here</Title>
        <Title weight="bold" size="3" color="primary">Your text here</Title>
        <Title weight="bold" size="4" color="primary">Your text here</Title>
        <Title weight="bold" size="5" color="primary">Your text here</Title>
        <Title weight="bold" size="6" color="primary">Your text here</Title>
      </div>

      <div class="row-auto py-4">
        <code>
          &lt;Title weight="bold" color="primary" size="1"&gt;Your text here&lt;/Title&gt; <br>
          &lt;Title weight="bold" color="primary" size="2"&gt;Your text here&lt;/Title&gt; <br>
          &lt;Title weight="bold" color="primary" size="3"&gt;Your text here&lt;/Title&gt; <br>
          &lt;Title weight="bold" color="primary" size="4"&gt;Your text here&lt;/Title&gt; <br>
          &lt;Title weight="bold" color="primary" size="5"&gt;Your text here&lt;/Title&gt; <br>
          &lt;Title weight="bold" color="primary" size="6"&gt;Your text here&lt;/Title&gt; <br>
        </code>
      </div>

      <div class="row-auto py-4">
        <Accordion>
          <AccordionItem title="Hello :)">
            Hello this is the accordion content
          </AccordionItem>
          <AccordionItem title="Hello :)">
            Hello this is the accordion content
          </AccordionItem>
        </Accordion>
      </div>

      <div class="row-auto py-4">
        <code>
          &lt;Accordion&gt; <br>
          &nbsp;&nbsp; &lt;AccordionItem title="Hello :)"&gt; <br>
          &nbsp;&nbsp;&nbsp;&nbsp; Hello this is the accordion content <br>
          &nbsp;&nbsp; &lt;/AccordionItem&gt; <br>
          &nbsp;&nbsp; &lt;AccordionItem title="Hello :)"&gt; <br>
          &nbsp;&nbsp;&nbsp;&nbsp; Hello this is the accordion content <br>
          &nbsp;&nbsp; &lt;/AccordionItem&gt; <br>
          &lt;/Accordion&gt; <br>
        </code>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../components/atoms/Forms/Button.vue';

import Input from '../components/atoms/Forms/Input.vue';
import Label from '../components/atoms/Forms/Label.vue';
import Title from '../components/atoms/Title.vue';

import Accordion from '../components/molecules/Accordion.vue';
import AccordionItem from '../components/atoms/AccordionItem.vue';
</script>

<style scoped>

</style>
