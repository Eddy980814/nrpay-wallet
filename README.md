<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>陳文聰的超屌專屬網站</title>
    <style>
        body {
            background-color: black;
            color: white;
            text-align: center;
            font-family: Arial, sans-serif;
        }
        h1 {
            font-size: 40px;
            text-shadow: 3px 3px 10px red;
        }
        button {
            font-size: 20px;
            padding: 10px;
            margin: 10px;
            background-color: red;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: darkred;
        }
    </style>
</head>
<body>
    <h1>🎉 歡迎來到陳文聰的粉絲後援會 🎉</h1>
    <p>這裡紀錄了聰聰的所有黑歷史！</p>

    <button onclick="startPrank()">千萬別按</button>
    <button onclick="startHackerEffect()">駭客入侵模式</button>

    <script>
        function startPrank() {
            alert("恭喜你下載了聰聰的黑歷史！");
            window.location.href = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"; // 這裡換成聰聰的醜照網址
        }

        function startHackerEffect() {
            document.body.innerHTML = "<h1 style='color:green;'>正在入侵聰聰的手機...</h1>";
            setTimeout(() => {
                document.body.innerHTML += "<p>正在下載他的密碼...</p>";
            }, 2000);
            setTimeout(() => {
                document.body.innerHTML += "<p>破解失敗，聰聰太蠢，沒有密碼。</p>";
            }, 4000);
        }
    </script>
</body>
</html>
