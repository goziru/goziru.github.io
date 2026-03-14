(function() {
    window.onload = function() {
        const part1 = [122, 105, 114, 117]; // ziru
        const part2 = [106, 105, 97, 115, 117]; // jiasu
        const part3 = [64]; // @
        const part4 = [103, 109, 97, 105, 108]; // gmail
        const part5 = [46, 99, 111, 109]; // .com

        const fullArr = part1.concat(part2, part3, part4, part5);
        let em = "";
        fullArr.forEach(code => {
            em += String.fromCharCode(code);
        });

        setTimeout(() => {
            const container = document.getElementById('secure-email-display');
            if (container) {
                container.innerHTML = '<a href="mailto:' + em + '">' + em + '</a>';
            }
        }, 800);
    };
})();

const toggle = document.getElementById("themeToggle");
const moon = document.getElementById("icon-moon");
const sun = document.getElementById("icon-sun");

function setTheme(theme){
    document.documentElement.setAttribute("data-theme", theme);

    if(theme === "dark"){
        moon.style.display = "none";
        sun.style.display = "block";
    }else{
        moon.style.display = "block";
        sun.style.display = "none";
    }

    localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");

if(savedTheme){
    setTheme(savedTheme);
}else{
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? "dark" : "light");
}

toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
});