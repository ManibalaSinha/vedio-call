let localStream;
let remoteStream;
let peerConnection;
const servers = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
  ]
};

const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const offerTextarea = document.getElementById('offer');
const answerTextarea = document.getElementById('answer');

// Get media stream
async function startCamera() {
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  localVideo.srcObject = localStream;
}

// Create offer
async function createOffer() {
  peerConnection = new RTCPeerConnection(servers);
  remoteStream = new MediaStream();
  remoteVideo.srcObject = remoteStream;

  // Send local tracks to remote
  localStream.getTracks().forEach(track => {
    peerConnection.addTrack(track, localStream);
  });

  // Receive remote tracks
  peerConnection.ontrack = event => {
    event.streams[0].getTracks().forEach(track => {
      remoteStream.addTrack(track);
    });
  };

  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);

  offerTextarea.value = JSON.stringify(offer);
}

// Accept offer & create answer
async function createAnswer() {
  const offer = JSON.parse(offerTextarea.value);

  peerConnection = new RTCPeerConnection(servers);
  remoteStream = new MediaStream();
  remoteVideo.srcObject = remoteStream;

  localStream.getTracks().forEach(track => {
    peerConnection.addTrack(track, localStream);
  });

  peerConnection.ontrack = event => {
    event.streams[0].getTracks().forEach(track => {
      remoteStream.addTrack(track);
    });
  };

  await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);

  answerTextarea.value = JSON.stringify(answer);
}

// Add answer to complete connection
async function acceptAnswer() {
  const answer = JSON.parse(answerTextarea.value);
  await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
}
