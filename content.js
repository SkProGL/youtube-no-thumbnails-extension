document.querySelectorAll('.ytd-thumbnail').forEach(n => { n.parentNode.style.display = "none" });
document.querySelectorAll('.ytd-menu-renderer').forEach(n => { n.parentNode.style.display = "none" });

window.addEventListener('scroll', () => {
    document.querySelectorAll('.ytd-thumbnail').forEach(n => { n.parentNode.style.display = "none" });
    document.querySelectorAll('.ytd-menu-renderer').forEach(n => { n.parentNode.style.display = "none" });
})