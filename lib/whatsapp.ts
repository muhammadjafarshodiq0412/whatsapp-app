import makeWASocket, {
    DisconnectReason,
    useMultiFileAuthState,
    WASocket
} from "@whiskeysockets/baileys";

let sock: WASocket | null = null;

let qrCode: string | null = null;

let isConnecting = false;

export async function connectWhatsapp() {

    if (sock || isConnecting) {
        return sock;
    }

    isConnecting = true;

    try {

        const {
            state,
            saveCreds
        } = await useMultiFileAuthState("auth");

        sock = makeWASocket({
            auth: state,
            printQRInTerminal: true
        });

        sock.ev.on(
            "creds.update",
            saveCreds
        );

        sock.ev.on(
            "connection.update",
            async (update: any) => {

                const {
                    connection,
                    lastDisconnect,
                    qr
                } = update;

                if (qr) {

                    qrCode = qr;

                    console.log(
                        "QR RECEIVED"
                    );
                }

                if (connection === "open") {

                    console.log(
                        "WHATSAPP CONNECTED"
                    );

                    qrCode = null;

                    isConnecting = false;
                }

                if (connection === "close") {

                    console.log(
                        "CONNECTION CLOSED"
                    );

                    const statusCode =
                        (lastDisconnect?.error as any)
                            ?.output
                            ?.statusCode;

                    const shouldReconnect =
                        statusCode !==
                        DisconnectReason.loggedOut;

                    sock = null;

                    isConnecting = false;

                    if (shouldReconnect) {

                        console.log(
                            "RECONNECTING..."
                        );

                        await connectWhatsapp();
                    }
                }
            }
        );

        return sock;

    } catch (err) {

        console.error(
            "WHATSAPP ERROR",
            err
        );

        sock = null;

        qrCode = null;

        isConnecting = false;

        throw err;
    }
}

export function getSocket() {
    return sock;
}

export function getQrCode() {
    return qrCode;
}