<script>
    import '../app.css';
  </script>
  
  <main class="min-h-screen bg-[#141414] text-white">
    <slot />
  </main>
  
  <style>
    :global(html, body) {
      background-color: #141414;
      color: #FAF5F3;
      margin: 0;
      padding: 0;
    }
  </style>