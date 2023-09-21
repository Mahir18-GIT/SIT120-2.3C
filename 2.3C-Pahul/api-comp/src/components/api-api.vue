<!-- 1. Template Syntax -->
<template>
    <!-- 1.a Text Interpolation -->
    <div>
      <!-- Display reactive data using double curly braces -->
      {{ message }}
    </div>
  
    <!-- 1.b Raw HTML [v-html] -->
    <div>
      <!-- Bind raw HTML content to an element -->
      v-html="rawHtml"
    </div>
  
    <!-- 1.c Attribute Bindings [v-bind:id] -->
    <div>
      <!-- Bind an attribute to a reactive property -->
      v-bind:id="dynamicId"
    </div>
  
    <!-- 1.d JavaScript expressions inside syntax {{ }} -->
    <div>
      <!-- Use a simple JavaScript expression inside the template -->
      {{ message.split('').reverse().join('') }}
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "Hello Vue!",
        rawHtml: "<span style='color:red'>This is raw HTML</span>",
        dynamicId: "myUniqueID"
      };
    }
  };
  </script>
  
  <!-- 2. Methods -->
  <template>
    <!-- 2. Methods -->
    <button>
      <!-- Attach a click event listener that calls the greet method -->
      @click="greet"
    >
      Click me!
    </button>
  
    <p>
      <!-- Display message reactive property -->
      {{ message }}
    </p>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello!'
      };
    },
    methods: {
      // Define a greet method
      greet() {
        // Modify the message property on button click
        this.message = 'Hello Vue 3!';
      }
    }
  };
  </script>

<!-- a. ref() -->
<template>
    <!-- Display the count value -->
    <p>{{ count.value }}</p>
    <!-- Update the count value on button click -->
    <button @click="increment">Increment</button>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Declare a reactive reference to a number
  const count = ref(0);
  
  // Method to increment the count
  function increment() {
    count.value++;
  }
  </script>

<!-- b. <script setup> -->
<template>
    <p>{{ computedMessage.value }}</p>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const message = ref("Hello Vue 3!");
  
  // Create a computed property
  const computedMessage = computed(() => message.value + " This is computed!");
  </script>

<!-- 4. Computed Properties -->
<!-- a. Basic Computed Property -->
<template>
    <!-- Display the computed property value -->
    <p>{{ reversedMessage }}</p>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const message = ref("Hello Vue!");
  
  // Declare a computed property
  const reversedMessage = computed(() => {
    return message.value.split('').reverse().join('');
  });
  </script>
  
  <!--5 . Class and Style Bindings -->
  <!-- a. Binding HTML class [v-bind:class] -->
  <template>
    <!-- 5.a Binding HTML class -->
    <div v-bind:class="{ active: isActive, 'text-danger': hasError }">
      Content here
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isActive = ref(true);
  const hasError = ref(false);
  </script>
<!-- b. Binding Inline Styles [v-bind:style]   -->
<template>
    <!-- 5.b Binding Inline Styles -->
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
      Styled content
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const activeColor = ref('red');
  const fontSize = ref(20);
  </script>

<!-- 6. List Rendering   -->
<!-- a. v-for with an Object -->
<template>
    <!-- 6.a v-for with an Object -->
    <ul>
      <li v-for="(value, name, index) in object" :key="index">
        {{ name }}: {{ value }}
      </li>
    </ul>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const object = ref({
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  });
  </script>
<!-- b. v-for with a Range   -->
<template>
    <!-- 6.b v-for with a Range -->
    <ul>
      <li v-for="n in 5" :key="n">{{ n }}</li>
    </ul>
  </template>
    
        <!-- 6.c v-for on <template> -->
         <template>
        <ul>
          <template v-for="(item, index) in items">
            <li :key="index">{{ item.text }}</li>
          </template>
        </ul>
      </template>
      
      <script setup>
      import { ref } from 'vue';
      
      const items = ref([{ text: 'Item 1' }, { text: 'Item 2' }]);
      </script>
      
      <template>
        <!-- 6.d v-for with v-if -->
        <ul>
          <li v-for="item in items" v-if="item.isVisible" :key="item.id">
            {{ item.text }}
          </li>
        </ul>
      </template>
      
      <script setup>
      import { ref } from 'vue';
      
      const items = ref([
        { id: 1, text: 'Item 1', isVisible: true },
        { id: 2, text: 'Item 2', isVisible: false }
      ]);
      </script>

<template>
    <!-- 6.e v-for with a Component -->
    <item-component 
      v-for="item in items" 
      :item="item" 
      :key="item.id"
    />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ItemComponent from './ItemComponent.vue';
  
  const items = ref([{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]);
  </script>

<template>
    <!-- 7.a Inline Handlers -->
    <button v-on:click="count++">Increment</button>
    <p>Count: {{ count }}</p>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const count = ref(0);
  </script>

<template>
    <!-- 7.b Method Handlers -->
    <button v-on:click="incrementCount">Increment</button>
    <p>Count: {{ count }}</p>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const count = ref(0);
  
  function incrementCount() {
    count.value++;
  }
  </script>

<template>
    <!-- 8.a v-model with various form controls -->
  
    <!-- Text input -->
    <input type="text" v-model="textValue">
  
    <!-- Checkbox -->
    <input type="checkbox" v-model="checkboxValue">
  
    <!-- Radio button -->
    <input type="radio" value="A" v-model="radioValue">
    <input type="radio" value="B" v-model="radioValue">
  
    <!-- Select dropdown -->
    <select v-model="selectedValue">
      <option>A</option>
      <option>B</option>
    </select>
  
    <!-- Textarea -->
    <textarea v-model="textareaValue"></textarea>
  
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const textValue = ref("");
  const checkboxValue = ref(false);
  const radioValue = ref("");
  const selectedValue = ref("");
  const textareaValue = ref("");
  </script>


<template>
    <!-- 8.b v-model modifiers -->
  
    <!-- .lazy - sync the input after the "change" event, not "input" -->
    <input type="text" v-model.lazy="lazyValue">
  
    <!-- .number - cast the input to a number -->
    <input type="text" v-model.number="numericValue">
  
    <!-- .trim - trim whitespace from user input -->
    <input type="text" v-model.trim="trimmedValue">
  
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const lazyValue = ref("");
  const numericValue = ref(0);
  const trimmedValue = ref("");
  </script>

<template>
    <!-- 9. Watchers -->
    <div>
      <input type="text" v-model="searchQuery">
      <p>Results: {{ searchResults }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const searchQuery = ref("");
  const searchResults = ref("");
  
  // 9. Watcher on searchQuery
  watch(searchQuery, async (newQuery, oldQuery) => {
    if (newQuery !== oldQuery) {
      // For the sake of the example, let's just mimic a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      searchResults.value = "Results for " + newQuery;
    }
  });
  </script>
<template>
    <!-- 9. Watchers -->
    <div>
      <input type="text" v-model="searchQuery">
      <p>Results: {{ searchResults }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const searchQuery = ref("");
  const searchResults = ref("");
  
  // 9. Watcher on searchQuery
  watch(searchQuery, async (newQuery, oldQuery) => {
    if (newQuery !== oldQuery) {
      // For the sake of the example, let's just mimic a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      searchResults.value = "Results for " + newQuery;
    }
  });
  </script>

<template>
    <!-- 10.a Props -->
    <child-component :message="parentMessage"></child-component>
  </template>
  
  <script setup>
  import ChildComponent from './ChildComponent.vue';
  
  const parentMessage = "Hello from the parent!";
  </script>
  
  <!-- ChildComponent.vue -->
  <template>
    <p>{{ message }}</p>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const { message } = defineProps(['message']);
  </script>

<template>
    <!-- 10.b Events [$emit] -->
    <child-component @child-clicked="handleChildClicked"></child-component>
  </template>
  
  <script setup>
  import ChildComponent from './ChildComponent.vue';
  
  function handleChildClicked(event) {
    console.log("Child was clicked!", event);
  }
  </script>
  
  <!-- ChildComponent.vue -->
  <template>
    <button @click="emitClickEvent">Click Me!</button>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const emit = defineEmits();
  
  function emitClickEvent() {
    emit('child-clicked', { data: "Some data from child" });
  }
  </script>

<template>
    <!-- 10.c Slots -->
    <child-component>
      <template #header>
        <h1>This is a slot content</h1>
      </template>
    </child-component>
  </template>
  
  <script setup>
  import ChildComponent from './ChildComponent.vue';
  </script>
  
  <!-- ChildComponent.vue -->
  <template>
    <div>
      <slot name="header"></slot>
    </div>
  </template>
  
  <template>
    <!-- 11. Router -->
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
  
      <router-view></router-view>
    </div>
  </template>
  
