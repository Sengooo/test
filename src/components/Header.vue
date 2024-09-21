<template>
    <header>
      <div class="logo">
        <!-- Logo image or text -->
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #42b983;
    color: white;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    gap: 15px;
  }
  
  nav ul li a {
    color: white;
    text-decoration: none;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  </style>
  