## 🎥 Video Call App

A lightweight WebRTC-based video calling application built in JavaScript. Enables peer-to-peer video chat directly in the browser.

### Features

* Real-time video/audio streaming between peers
* Chat support (optional)
* Simple UI with “Start Call” and “Join Call” functionality
* Works in modern browsers without plugins

---

### Tech Stack

* **Frontend**: HTML, CSS, JavaScript
* **WebRTC**: Native browser APIs for real-time communication
* *(Optional)* **Socket.io** for signalling (if implemented)
* Backend can remain frontend-only or use a minimal Node.js server for signalling

---

### Setup & Usage

1. **Clone** the repo:

   ```bash
   git clone https://github.com/ManibalaSinha/vedio‑call.git
   cd vedio‑call
   ```

2. **Open** `index.html` in your browser.

3. **Start a call**:

   * One user clicks **“Start Call”**, shares the generated ID/offer link.
   * Another enters that ID and clicks **“Join Call”**.

4. **Enjoy** your video conversation!

> *Note: Browser restrictions require `https://` or `localhost` for full WebRTC functionality.*

---

### How It Works

* Generates a WebRTC **RTCPeerConnection**
* One user creates an **offer** and displays it
* Expert user reads the offer, creates an **answer**, and shares it back
* Both peers add **ICE candidates** to establish a direct connection

---

### Improvements & To‑Do

* ✅ Peer-to-peer video streaming
* 🔲 Add text chat using WebRTC DataChannels
* 🔲 Replace manual copying with a signalling server (e.g., Socket.io)
* 🔲 UI enhancements (responsive layout, mobile support)
* 🔲 Deployment instructions & SSL setup

---

### Project Structure

```
/
├── index.html     ← Main UI
├── styles.css     ← Styles
├── app.js         ← WebRTC logic
└── README.md      ← Project documentation
```

---

### Contributing

Contributions are welcome! Feel free to:

* Report **issues** or bug reports
* Submit **pull requests** for features or fixes
* Star 🌟 the repo if you find it useful

---

### Feedback & Contact

GitHub: [ManibalaSinha](https://github.com/ManibalaSinha)
Email: [manibalasinha1@gmail.com](mailto:manibalasinha1@gmail.com)
