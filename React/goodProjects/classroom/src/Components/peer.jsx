import React, { useMemo, useCallback, useEffect, useState } from "react";

const PeerContext = React.createContext(null);
export const usePeer = () => React.useContext(PeerContext);

export const PeerProvider = (props) => {
    const [remoteStream, setRemoteStream] = useState(null);

    const peer = useMemo(() => {
        const connection = new RTCPeerConnection({
            iceServers: [
                {
                    urls: [
                        "stun:stun.l.google.com:19302",
                        "stun:global.stun.twilio.com:3478",
                    ],
                },
            ],
        });

        // Handle incoming ICE candidates
        connection.onicecandidate = (event) => {
            if (event.candidate) {
                // Send candidate to the signaling server
                // Example: socket.emit('ice-candidate', event.candidate);
            }
        };

        // Handle incoming media streams
        connection.ontrack = (event) => {
            console.log("Stream received");
            setRemoteStream(event.streams[0]);
        };

        return connection;
    }, []);

    const createOffer = async () => {
        try {
            const offer = await peer.createOffer();
            await peer.setLocalDescription(offer);
            return offer; // Return the offer to send to the other peer
        } catch (err) {
            console.error("Error creating offer:", err);
        }
    };

    const createAnswer = async (offer) => {
        try {
            await peer.setRemoteDescription(new RTCSessionDescription(offer));
            const answer = await peer.createAnswer();
            await peer.setLocalDescription(answer);
            return answer; // Return the answer to send back
        } catch (err) {
            console.error("Error creating answer:", err);
        }
    };

    const sendStream = async (stream) => {
        if (!stream) return;

        console.log("Sending stream");
        stream.getTracks().forEach(track => peer.addTrack(track, stream));
    };

    const setRemoteAnswer = async (ans) => {
        try {
            await peer.setRemoteDescription(new RTCSessionDescription(ans));
        } catch (err) {
            console.error("Error setting remote answer:", err);
        }
    };

    // Clean up on unmount
    useEffect(() => {
        return () => {
            peer.close(); // Close the peer connection when the provider is unmounted
        };
    }, [peer]);

    return (
        <PeerContext.Provider value={{ peer, createOffer, createAnswer, setRemoteAnswer, sendStream, remoteStream }}>
            {props.children}
        </PeerContext.Provider>
    );
};
