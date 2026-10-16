<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>الكاميرا</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 24px;
      background: #f4f4f4;
    }
    video {
      width: 100%;
      max-width: 480px;
      border-radius: 12px;
      background: #222;
    }
    button {
      padding: 12px 24px;
      margin: 12px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h2>الكاميرا</h2>
  <p>اضغط للسماح باستخدام الكاميرا وعرضها على الشاشة.</p>

  <button id="start">تشغيل الكاميرا</button>
  <p id="status"></p>
  <video id="camera" autoplay playsinline muted></video>

  <script>
    const camera = document.getElementById("camera");
    const status = document.getElementById("status");

    document.getElementById("start").onclick = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false
        });

        camera.srcObject = stream;
        status.textContent = "الكاميرا تعمل.";
      } catch (error) {
        status.textContent =
          "تعذر تشغيل الكاميرا. تحقق من الإذن وإعدادات الجهاز.";
      }
    };
  </script>
</body>
</html>
