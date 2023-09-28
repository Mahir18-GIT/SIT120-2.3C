<template>
    <div class="responsive-buttons">
      <div v-for="(item, index) in items" :key="index" class="btn" @click="handleItemClick(index)">
        {{ item }}
      </div>
  
      <div v-if="showElement" class="btn" @click="toggleShowElement">
        Conditional Element
      </div>
  
      <input v-model="inputValue" class="input-field" placeholder="Type something..."/>
  
      <button class="btn" @click="handleButtonClick">Click me</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResponsiveButtons',
    data() {
      return {
        items: ['Item 1', 'Item 2', 'Item 3'],
        showElement: true,
        inputValue: '',
      };
    },
    methods: {
      handleItemClick(index) {
        alert(`Item ${index + 1} clicked!`);
      },
      toggleShowElement() {
        this.showElement = !this.showElement;
      },
      handleButtonClick() {
        alert('Button clicked!');
      },
    },
  };
  </script>
  
  <style scoped>
  .responsive-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  
  .btn, .input-field {
    margin: 5px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .btn:hover {
    background-color: #555;
  }
  
  .input-field {
    font-size: 16px;
    background-color: #f5f5f5;
    color: #333;
  }
  
  @media screen and (max-width: 768px) {
    .btn, .input-field {
      padding: 8px 16px;
      font-size: 14px;
    }
  }
  
  @media screen and (max-width: 480px) {
    .btn, .input-field {
      padding: 6px 12px;
      font-size: 12px;
    }
  }
  </style>
  