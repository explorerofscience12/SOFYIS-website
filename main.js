function goToDiscord() {
  // Replace with your actual Discord invite link
  const invite = 'https://discord.gg/YOUR_INVITE';
  window.open(invite, '_blank');
}

// Update all Discord link anchors
document.querySelectorAll('#discord-link, #discord-link-about, #discord-link-blog')
  .forEach(el => el.addEventListener('click', goToDiscord));
