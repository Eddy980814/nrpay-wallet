document.addEventListener("DOMContentLoaded", () => {
    let countdownNumber = 10;
    const countdownElem = document.getElementById("countdown");

    document.getElementById("bomb-btn").addEventListener("click", () => {
        let interval = setInterval(() => {
            countdownNumber--;
            if (countdownNumber <= 0) countdownNumber = 10; // 無限循環
            countdownElem.innerText = `倒數計時：${countdownNumber} 秒`;
        }, 1000);
    });

    document.getElementById("popup-btn").addEventListener("click", () => {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                alert(`這是第 ${i + 1} 個彈窗，逃不掉！`);
            }, i * 500);
        }
    });

    document.getElementById("mystery-btn").addEventListener("click", () => {
        alert("你按了不該按的按鈕！");
        window.location.href = "https://i.imgur.com/yC7j4B5.jpg"; // 這裡換成聰聰的醜照網址
    });

    document.getElementById("hacker-btn").addEventListener("click", () => {
        let hackerScreen = document.getElementById("hacker-screen");
        hackerScreen.classList.remove("hidden");
        setTimeout(() => {
            hackerScreen.innerHTML = "ERROR: Access Denied! 聰聰發現你在偷看！";
            setTimeout(() => {
                hackerScreen.classList.add("hidden");
            }, 3000);
        }, 5000);
    });
});
