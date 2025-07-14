<script>
    import { animate } from 'motion';
    
    let activeTab = 'Commit';
    let tabElements = {};
  
    function switchTab(tab) {
      activeTab = tab;
      
      if (tabElements[tab]) {
        animate(tabElements[tab], 
          { scale: [0.95, 1.05, 1] },
          { duration: 0.3 }
        );
      }
    }
  </script>
  
  <div style="display: flex; background-color: #374151; border-radius: 8px; padding: 4px; gap: 12px;">
    <button 
      bind:this={tabElements.Commit}
      style="padding: 8px 16px; border-radius: 6px; font-family: 'MNKYJane', sans-serif; font-size: 16px; font-weight: 500; border: none; cursor: pointer; transition: all 0.2s; background-color: {activeTab === 'Commit' ? '#4B5563' : 'transparent'}; color: {activeTab === 'Commit' ? '#ffffff' : '#9CA3AF'};"
      on:click={() => switchTab('Commit')}
    >
      Commit
    </button>
    <button 
      bind:this={tabElements.Analytics}
      style="padding: 8px 16px; border-radius: 6px; font-family: 'MNKYJane', sans-serif; font-size: 16px; font-weight: 500; border: none; cursor: pointer; transition: all 0.2s; background-color: {activeTab === 'Analytics' ? '#4B5563' : 'transparent'}; color: {activeTab === 'Analytics' ? '#ffffff' : '#9CA3AF'};"
      on:click={() => switchTab('Analytics')}
    >
      Analytics
    </button>
    <button 
      bind:this={tabElements.Upgrade}
      style="padding: 8px 16px; border-radius: 6px; font-family: 'MNKYJane', sans-serif; font-size: 16px; font-weight: 500; border: none; cursor: pointer; transition: all 0.2s; background-color: {activeTab === 'Upgrade' ? '#4B5563' : 'transparent'}; color: {activeTab === 'Upgrade' ? '#ffffff' : '#9CA3AF'};"
      on:click={() => switchTab('Upgrade')}
    >
      Upgrade
    </button>
  </div>